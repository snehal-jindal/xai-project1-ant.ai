// These are software/evidence-integrity checks, NOT AI effectiveness tests.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const root=path.resolve(import.meta.dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const html=read('dist/index.html'),main=read('src/main.js'),generator=read('src/generator.js');
test('four methods and an accessible starting point',()=>{
 assert.equal((html.match(/data-mode=/g)||[]).length,4);
 assert.match(html,/Skip to the playground/);assert.match(html,/Suggested prompt/);
});
test('static page references existing local assets',()=>{
 for(const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)){
  const url=match[1];if(/^(?:https?:|blob:)/.test(url))continue;
  assert.ok(!url.startsWith('/'),'assets must work under a GitHub Pages subpath');
  assert.ok(fs.existsSync(path.resolve(root,'dist',url)),url);
 }
});
test('standalone app does not require an application API',()=>{
 assert.doesNotMatch(main,/fetch\(|\/api\//);assert.doesNotMatch(generator,/fetch\(|\/api\//);
 assert.match(main,/localApi/);assert.match(generator,/crypto.getRandomValues/);
});
test('no visitor results form or JSON export workflow',()=>{
 assert.doesNotMatch(html,/id="(?:human-form|model-form|export)"/);
 assert.doesNotMatch(main,/api\('(?:record|report)'/);
});
test('motion retains a pause control and static-frame warning',()=>{
 assert.match(html,/id="pause"/);assert.match(main,/screenshot freezes/);
 assert.match(generator,/t<48/);assert.match(generator,/delay:40/);
});
test('sample evidence is selected, paired and not a benchmark',()=>{
 const e=JSON.parse(read('evidence/trials.json'));assert.equal(e.trials.length,8);
 assert.equal(e.trials[1].follow_up_to,'01');assert.equal(e.is_benchmark,false);
 for(const t of e.trials){const b=fs.readFileSync(path.join(root,t.screenshot));assert.equal(crypto.createHash('sha256').update(b).digest('hex'),t.sha256);}
});
test('research, setup, design and known limits are documented',()=>{
 for(const p of ['README.md','docs/TRY_IT.md','docs/DESIGN.md','docs/FINDINGS.md','docs/REFERENCES.md','NOTICE.md'])assert.ok(read(p).length>500,p);
 assert.match(read('docs/FINDINGS.md'),/not byte-identical/);
});
test('font, software notices and ready-built bundle are included',()=>{
 assert.ok(fs.statSync(path.join(root,'dist/fonts/VeraBd.ttf')).size>10000);
 assert.match(read('dist/fonts/LICENSE.txt'),/Bitstream/);
 assert.ok(read('dist/software-licenses.txt').length>1000);
 assert.ok(read('dist/lab.js').length>10000);
});
