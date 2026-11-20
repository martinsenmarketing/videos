const { chromium } = require('/opt/node22/lib/node_modules/playwright');
(async()=>{const b=await chromium.launch({args:['--allow-file-access-from-files']});const p=await b.newPage({viewport:{width:1080,height:1920}});
await p.goto('file://'+process.cwd()+'/escenas.html');await p.waitForFunction(()=>window.READY===true);await p.evaluate(()=>cover());
await p.screenshot({path:'Portada_bf2.jpg',type:'jpeg',quality:92});await b.close();})();
