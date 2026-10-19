// Dependency-free, loopback-only static preview. Not a production server.
import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=fileURLToPath(new URL('../dist/',import.meta.url));
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.gif':'image/gif','.ttf':'font/ttf','.txt':'text/plain; charset=utf-8'};
const server=createServer(async(req,res)=>{
 try{
  const requested=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  let filename=path.resolve(root,'.'+requested);
  if(filename!==root&&!filename.startsWith(root+path.sep)){res.writeHead(403);res.end('Forbidden');return;}
  if((await stat(filename)).isDirectory())filename=path.join(filename,'index.html');
  const body=await readFile(filename);
  res.writeHead(200,{'Content-Type':mime[path.extname(filename)]||'application/octet-stream','X-Content-Type-Options':'nosniff','Cache-Control':'no-cache'});res.end(body);
 }catch{res.writeHead(404);res.end('Not found');}
});
server.listen(8000,'127.0.0.1',()=>console.log('ant.ai: http://localhost:8000 · Ctrl+C to stop'));
server.on('error',error=>{console.error(error.message);process.exitCode=1;});
