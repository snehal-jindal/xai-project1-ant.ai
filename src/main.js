import {localApi} from './generator.js';
'use strict';
const $=id=>document.getElementById(id);
let mode='stripes',current=null,playing=false;
const notes={stripes:'I form the letters with vertical stripes against a background of horizontal stripes. Try reading them before asking AI.',motion:'I make the letters appear through dots moving in different directions. Play the animation—a still picture is not the same test.',dots:'One of my earlier ideas: letters made from colored dots. Some versions were difficult for people too, so I keep this as a comparison.',links:'Follow each line to match a workshop name with its code. In earlier tests, GPT got all the matches right.'};
const previews={stripes:'stripe-preview.png',motion:'motion-still.png',dots:'dots-preview.png',links:'links-preview.png'};
const api=localApi;
function status(id,text){$(id).textContent=text;}
function sync(){
 $('method-note').textContent=notes[mode];$('pitch-wrap').hidden=mode!=='stripes';$('links-note').hidden=mode!=='links';$('content-type').disabled=mode==='links';
 $('custom-wrap').hidden=mode==='links'||$('content-type').value!=='custom';$('message').maxLength=mode==='motion'?14:36;$('length-hint').textContent=`Up to ${mode==='motion'?14:36} English characters. Keep it short.`;
 $('playback').hidden=mode!=='motion';$('stage-type').textContent=mode==='links'?'WORD → CODE':mode.toUpperCase();
 document.querySelectorAll('[data-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mode===mode)));
}
function invalidate(){current=null;playing=false;$('experiment').hidden=true;$('downloads').hidden=true;$('challenge-image').src='./lab-assets/'+previews[mode];$('challenge-image').alt='Example preview; make a new challenge to test';status('stage-label','EXAMPLE PREVIEW');status('stage-caption','This is an example. Make your own file to start a test.');status('create-status','Ready for a new version. Click Generate to make it.');}
document.querySelectorAll('[data-mode]').forEach(button=>button.addEventListener('click',()=>{mode=button.dataset.mode;invalidate();sync();}));
$('content-type').addEventListener('change',()=>{invalidate();sync();});$('message').addEventListener('input',invalidate);$('pitch').addEventListener('input',()=>{status('pitch-value',$('pitch').value+' px');invalidate();});
function addDownload(parent,label,url){const a=document.createElement('a');a.href=url;a.download='ant-ai-challenge.'+(label.includes('PDF')?'pdf':label.includes('GIF')?'gif':'png');a.textContent=label;parent.append(a);}
$('create-form').addEventListener('submit',async event=>{
 event.preventDefault();$('generate').disabled=true;status('create-status','Creating your file in this browser…');
 try{
  const text=mode!=='links'&&$('content-type').value==='custom'?$('message').value:'';
  if($('content-type').value==='custom'&&mode!=='links'&&!text.trim())throw Error('Enter a message or choose a random code.');
  const result=await api('create',{mode,text,pitch:Number($('pitch').value)});current=result;playing=false;
  $('challenge-image').src=result.preview;$('challenge-image').alt='Your generated challenge; answer not shown';
  status('stage-label','YOUR NEW CHALLENGE');status('stage-caption',mode==='motion'?'Paused. Press Play movement to see the letters. Download the GIF for your AI test; the PNG is only one still picture.':'Download this image or take a screenshot to try in your own AI chat.');
  const downloads=$('downloads');downloads.replaceChildren();downloads.hidden=false;
  for(const [name,url] of Object.entries(result.downloads)){const label={'challenge.png':mode==='motion'?'One frame PNG':'Download PNG','challenge.pdf':'Download PDF','challenge.gif':'Download animation GIF','frames.zip':'Download all animation frames (ZIP)'}[name];addDownload(downloads,label,url);}
  $('experiment').hidden=false;$('answer').hidden=true;$('answer').replaceChildren();status('copy-status','');
  $('test-prompt').value=mode==='links'?'Which word connects to which code? Follow each line. If you cannot tell, say so.':'What does this say? Reply with the text, or say you cannot read it.';
  status('media-warning',mode==='motion'?'A screenshot freezes the dots. To test movement, share a recording or all frames and check that the AI can view them.':'');
  sync();status('create-status',result.notice);
 }catch(error){status('create-status',error.message);}finally{$('generate').disabled=false;}
});
function stop(){if(mode==='motion'){$('challenge-image').src=current?current.preview:'./lab-assets/motion-still.png';playing=false;status('stage-caption','Paused: one frame. A frame by itself does not contain the complete motion challenge.');}}
$('play').addEventListener('click',()=>{if(mode!=='motion')return;$('challenge-image').src=current?current.animated:'./lab-assets/motion-preview.gif';playing=true;status('stage-caption','Playing. Stop any time if uncomfortable. The downloaded GIF contains the same frames.');});$('pause').addEventListener('click',stop);document.addEventListener('visibilitychange',()=>{if(document.hidden&&playing)stop();});
$('copy-prompt').addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('test-prompt').value);status('copy-status','Copied. Open a fresh chat and attach only your challenge file.');}catch{status('copy-status','Copy the prompt from the text box above.');$('test-prompt').focus();$('test-prompt').select();}});
async function showAnswer(){if(!current)return null;const result=await api('reveal',{id:current.id});const box=$('answer');box.replaceChildren();box.hidden=false;const p=document.createElement('p');p.textContent='Answer: '+(typeof result.answer==='string'?result.answer:Object.entries(result.answer).map(([name,code])=>name+' → '+code).join('\n'));box.append(p);return result;}
$('reveal').addEventListener('click',async()=>{try{await showAnswer();}catch(error){status('copy-status',error.message);}});
sync();
