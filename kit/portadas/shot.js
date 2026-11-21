const { chromium } = require('/opt/node22/lib/node_modules/playwright');
(async()=>{const b=await chromium.launch({args:['--allow-file-access-from-files']});const p=await b.newPage({viewport:{width:1080,height:1920}});const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.cwd()+'/p.html');await p.waitForFunction(()=>window.READY===true);
for(const k of (process.argv[2]||'bf3,senuelo,web').split(',')){await p.evaluate(k=>COV2[k](),k);await p.screenshot({path:`cov_${k}.jpg`,type:'jpeg',quality:92});}console.log(e);await b.close();})();
