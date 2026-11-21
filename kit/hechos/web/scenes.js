/* ===== Web lenta: 3 segundos y se van ===== */
const ENV=__ENV__;
const WORDS=__WORDS__;
const nrm=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-zñ0-9]/g,'');
function WT(w,after=0,end=false){const k=nrm(w);const o=WORDS.find(x=>x.t0>=after-0.01&&nrm(x.w).startsWith(k));if(!o){return null;}return end?o.t1:o.t0;}
const DUR=__DUR__;
const B={};B.si=WT('si',2);B.te=WT('te',B.si+1.5);B.seg=WT('segun',B.te)??WT('google',B.te)-0.4;B.el53=WT('53',B.seg+3)??WT('cincuenta',B.seg+3);B.el53=(WT('el',B.el53-0.6)??B.el53);
B.manda=WT('envia',B.el53)??WT('manda',B.el53)??(WT('vias',B.el53)-0.25);B.pasar=WT('pasar',B.manda);B.ysi=WT('y',WT('nada',B.pasar)??B.pasar+5);
B.bueno=WT('lo',WT('va',B.ysi+1.5)??B.ysi+3);B.fotos=WT('fotos',B.bueno);B.mide=WT('y',WT('subir',B.fotos+1.5)??B.fotos+3);B.com=WT('comenta',B.mide);
const S=[0,B.si-0.15,B.te-0.15,B.seg-0.15,B.el53-0.15,B.manda-0.15,B.pasar-0.15,B.ysi-0.15,B.bueno-0.15,B.fotos-0.15,B.mide-0.15,B.com-0.15,DUR];
const TR=[[S[3],S[5]],[S[6],S[8]],[S[9],S[11]]];
const SURP=[[WT('perdiendo',B.si),0.9],[WT('van',B.seg+1),0.8],[WT('peor',B.manda),0.9],[WT('32',B.pasar)??WT('treinta',B.pasar),0.9],[WT('pagas',B.ysi+0.5),0.8],[WT('gratis',B.mide),0.8]];
function darkK(t){return prog(t,S[5],0.25)*(1-prog(t,S[6]-0.25,0.25));}
const BL='#2F6FE4';
function phone(x,y,s,t,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle='#1B1B22';rr(-230,-400,460,800,56);ctx.fill();ctx.fillStyle='#fff';rr(-205,-370,410,740,36);ctx.fill();
  ctx.fillStyle='#EEE9DE';rr(-185,-345,370,50,25);ctx.fill();txt('tunegocio.es',-150,-319,22,{font:'MO',weight:700,color:GREY,align:'left'});
  if(o.loaded){ctx.fillStyle=BL;rr(-185,-270,370,200,20);ctx.fill();ctx.fillStyle='#E3DFD6';[[-185,-40,300],[-185,0,360],[-185,40,240]].forEach(r=>{rr(r[0],r[1],r[2],22,11);ctx.fill();});ctx.fillStyle=ORG;rr(-185,120,370,80,20);ctx.fill();txt('PEDIR CITA',0,160,30,{weight:900,color:'#fff'});}
  else{ctx.strokeStyle='#E3DFD6';ctx.lineWidth=26;ctx.beginPath();ctx.arc(0,-20,90,0,7);ctx.stroke();ctx.strokeStyle=RED;ctx.lineCap='round';const a=t*5;ctx.beginPath();ctx.arc(0,-20,90,a,a+1.9);ctx.stroke();txt('Cargando…',0,130,34,{font:'MO',weight:700,color:INK});}
  ctx.restore();}
function person(x,y,s,col){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle=col;ctx.beginPath();ctx.arc(0,-40,26,0,7);ctx.fill();ctx.beginPath();ctx.ellipse(0,30,40,44,0,Math.PI,0);ctx.fill();ctx.fillRect(-40,28,80,22);ctx.restore();}
function crowd(x,y,t,tl,n){ctx.save();ctx.translate(x,y);wcard(-340,-220,680,440,30);for(let i=0;i<10;i++){const c=i%5,r=Math.floor(i/5);const leave=i<n&&t>=tl+i*0.08;const q=leave?E.in(prog(t,tl+i*0.08,0.6)):0;
    ctx.save();ctx.globalAlpha*=1-q*0.75;person(-250+c*125+q*60,-60+r*170,1.1,leave?RED:BL);ctx.restore();}
  ctx.restore();}
function timer(x,y,t,t0,d,max){const v=Math.min(max,Math.max(0,(t-t0)/d*max));ctx.save();ctx.translate(x,y);wcard(-260,-130,520,260,34);txt(v.toFixed(1).replace('.',',')+' s',0,8,130,{weight:900,color:v>=max-0.01?RED:INK});ctx.restore();}
function coin(x,y,s){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle=YEL;ctx.beginPath();ctx.arc(0,0,44,0,7);ctx.fill();ctx.strokeStyle='#C99A2E';ctx.lineWidth=6;ctx.stroke();txt('€',0,4,52,{weight:900,color:'#8A6414'});ctx.restore();}
function scene1(t){if(t>S[1]+0.3)return;const f=1-prog(t,S[1],0.3);ctx.save();ctx.globalAlpha*=f;
  const k=1+0.03*Math.sin(t*6);shadowTxt('¿CUÁNTO TARDA TU WEB',540,470,74,{});shadowTxt('EN EL MÓVIL?',540,575,100*k,{color:YEL});
  const a=A_slam(t,-0.4,0.3);withPop(720,960,a,()=>phone(720,960,0.68,t));
  const b=A_slam(t,-0.3,0.3);withPop(300,820,b,()=>{shadowTxt('53%',300,800,170*k,{color:RED});txt('SE VA ANTES',300,905,34,{weight:900,color:'#fff'});txt('DE QUE CARGUE',300,950,34,{weight:900,color:'#fff'});});
  ctx.restore();}
function scene2(t){if(t<S[1]-0.2||t>S[2]+0.3)return;const f=fadeIO(t,S[1],S[2]+0.3);ctx.save();ctx.globalAlpha*=f;
  timer(540,800,t,S[1]+0.1,WT('segundos',S[1])-S[1]+0.3,3);stampB(580,1050,'ESTÁS PERDIENDO CLIENTES',t,WT('perdiendo',S[1]),46,-0.05,RED);ctx.restore();}
function scene3(t){if(t<S[2]-0.2||t>S[3]+0.3)return;const f=fadeIO(t,S[2],S[3]+0.3);ctx.save();ctx.globalAlpha*=f;
  const tc=WT('cuantos',S[2]),ta=WT('arreglarlo',tc);if(t>=tc){const a=A_slam(t,tc,0.25);withPop(540,740,a,()=>{ctx.fillStyle=YEL;rr(240,660,600,160,30);ctx.fill();txt('¿CUÁNTOS?',540,742,76,{weight:900,color:INK});});}
  if(t>=ta){const b=A_pop(t,ta,0.3);withPop(540,980,b,()=>pill(540,980,'Y CÓMO ARREGLARLO HOY',GRN,'#fff',36));}ctx.restore();}
function scene4(t){if(t<S[3]-0.2||t>S[4]+0.3)return;const f=fadeIO(t,S[3],S[4]+0.3);ctx.save();ctx.globalAlpha*=f;
  HD('1 · MÁS DE LA MITAD SE VA',470,66,t,S[3]+0.1,S[4],{color:YEL});const tv=WT('van',S[3]+1)??S[3]+2;
  const a=A_pop(t,S[3]+0.2,0.35);if(a)withPop(540,870,a,()=>crowd(540,870,t,tv,6));
  srcChip(560,1160,'FUENTE: GOOGLE (2016)',t,WT('google',S[3])??S[3]+0.3,S[4]);ctx.restore();}
function scene5(t){if(t<S[4]-0.2||t>S[5]+0.3)return;const f=fadeIO(t,S[4],S[5]+0.3);ctx.save();ctx.globalAlpha*=f;
  const t53=WT('53',S[4])??WT('cincuenta',S[4])??S[4]+0.2;const a=A_slam(t,t53,0.3);const k=1+0.03*Math.sin(t*6);if(a)withPop(540,800,a,()=>shadowTxt('53%',540,800,260*k,{color:RED}));
  stampB(580,1010,'SIN VER NI TUS PRECIOS',t,WT('sin',t53),48,-0.05,INK);ctx.restore();}
function loopTitles(t){if(t<S[5]||t>S[6])return;const f=1-prog(t,S[6]-0.2,0.2);ctx.save();ctx.globalAlpha*=f;
  const ta=WT('anuncios',S[5]),tp=WT('peor',ta);const a=A_slam(t,S[5]+0.05,0.22);
  if(a)withPop(540,560,a,()=>{shadowTxt('ENVÍASELO A QUIEN TENGA WEB',540,500,58,{});shadowTxt('Y PAGUE ANUNCIOS',540,600,80,{color:YEL});});
  phone(540,930,0.55,t);
  if(t>=tp-0.4){const b=A_slam(t,tp-0.4,0.22);withPop(540,1230,b,()=>{shadowTxt('HAY ALGO',540,1180,80,{});shadowTxt('PEOR',540,1275,90,{color:RED});});}
  ctx.restore();}
function scene6(t){if(t<S[6]-0.2||t>S[7]+0.3)return;const f=fadeIO(t,S[6],S[7]+0.3);ctx.save();ctx.globalAlpha*=f;
  HD('2 · CADA SEGUNDO CUENTA',470,70,t,S[6]+0.1,S[7],{color:YEL});
  const t1=WT('uno',S[6])??S[6]+0.4,t3=WT('tres',t1)??t1+0.6,t32=WT('32',t3)??WT('treinta',t3)??t3+1;
  ctx.save();ctx.translate(540,820);wcard(-340,-170,680,340,34);ctx.fillStyle='#EEE9DE';rr(-270,-20,540,40,20);ctx.fill();
  const q=E.inOut(prog(t,t1,Math.max(0.3,t3-t1+0.3)));ctx.fillStyle=q>0.95?RED:ORG;rr(-270,-20,Math.max(40,540*q),40,20);ctx.fill();
  txt('1 s',-270,-80,44,{weight:900,color:INK});txt('3 s',270,-80,44,{weight:900,color:q>0.95?RED:GREY});
  txt('PROBABILIDAD DE QUE SE VAYAN',0,95,24,{font:'MO',weight:700,color:GREY});ctx.restore();
  stampB(540,1110,'+32%',t,t32,110,-0.06,RED);srcChip(560,1260,'GOOGLE / SOASTA (2017)',t,t32+0.3,S[7]);ctx.restore();}
function scene7(t){if(t<S[7]-0.2||t>S[8]+0.3)return;const f=fadeIO(t,S[7],S[8]+0.3);ctx.save();ctx.globalAlpha*=f;
  HD('Y SI PAGAS ANUNCIOS…',470,74,t,S[7]+0.1,S[8],{color:'#fff'});const tp=WT('pagas',S[7]+0.5)??S[7]+1;
  phone(540,860,0.5,t);for(let i=0;i<5;i++){const t0=tp+i*0.25;if(t<t0)continue;const q=prog(t,t0,0.9);coin(540+(i-2)*120*q,860+380*E.in(q),1-0.2*q);}
  stampB(600,1190,'PAGAS POR CADA UNO QUE SE VA',t,WT('cada',tp)??tp+0.6,38,-0.05,RED);ctx.restore();}
function scene8(t){if(t<S[8]-0.2||t>S[9]+0.3)return;const f=fadeIO(t,S[8],S[9]+0.3);ctx.save();ctx.globalAlpha*=f;
  const a=A_slam(t,S[8]+0.1,0.25);if(a)withPop(540,800,a,()=>{shadowTxt('LO BUENO:',540,720,80,{color:GRN});shadowTxt('CASI SIEMPRE',540,830,90,{});shadowTxt('ES LO MISMO',540,930,90,{color:YEL});});ctx.restore();}
function file(x,y,w,h,label,col){ctx.save();ctx.translate(x,y);ctx.fillStyle='#fff';rr(-w/2,-h/2,w,h,22);ctx.fill();ctx.fillStyle=col;rr(-w/2+18,-h/2+18,w-36,h*0.55,14);ctx.fill();
  ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(-w/2+60,-h/2+60,16,0,7);ctx.fill();ctx.beginPath();ctx.moveTo(-w/2+30,-h/2+18+h*0.55-12);ctx.lineTo(0,-h/2+80);ctx.lineTo(w/2-30,-h/2+18+h*0.55-12);ctx.fill();
  txt(label,0,h/2-50,30,{weight:900,color:INK,maxW:w-30});ctx.restore();}
function scene9(t){if(t<S[9]-0.2||t>S[10]+0.3)return;const f=fadeIO(t,S[9],S[10]+0.3);ctx.save();ctx.globalAlpha*=f;
  HD('3 · LAS FOTOS',470,84,t,S[9]+0.1,S[10],{color:YEL});const tc=WT('comprim',S[9])??S[9]+2;
  const a=A_pop(t,S[9]+0.2,0.35);if(a)withPop(400,820,a,()=>{file(400,820,380,440,'FOTO DEL MÓVIL',RED);txt('PESADA',400,1075,40,{weight:900,color:RED});});
  if(t>=tc){const b=A_pop(t,tc,0.35);withPop(810,900,b,()=>{file(810,900,220,260,'LIGERA',GRN);});
    ctx.strokeStyle='#fff';ctx.lineWidth=10;ctx.lineCap='round';const q=E.out(prog(t,tc,0.4));ctx.beginPath();ctx.moveTo(570,880);ctx.lineTo(570+110*q,880);ctx.stroke();}
  if(t>=tc+0.4){const c=A_slam(t,tc+0.4,0.25);withPop(600,1230,c,()=>pill(600,1230,'COMPRÍMELAS ANTES DE SUBIRLAS',GRN,'#fff',28));}ctx.restore();}
function scene10(t){if(t<S[10]-0.2||t>S[11]+0.3)return;const f=fadeIO(t,S[10],S[11]+0.3);ctx.save();ctx.globalAlpha*=f;
  HD('MÍDELA GRATIS',470,84,t,S[10]+0.1,S[11],{color:'#fff'});const tg=WT('google',S[10])??S[10]+1.5;
  const a=A_pop(t,S[10]+0.2,0.35);if(a)withPop(560,860,a,()=>{wcard(220,620,680,480,34);txt('PageSpeed Insights',560,690,46,{weight:900,color:INK});
    const q=E.out(prog(t,S[10]+0.5,1.5));ctx.strokeStyle='#E3DFD6';ctx.lineWidth=36;ctx.beginPath();ctx.arc(560,940,150,Math.PI,2*Math.PI);ctx.stroke();
    ctx.strokeStyle=q<0.5?RED:q<0.8?ORG:GRN;ctx.lineCap='round';ctx.beginPath();ctx.arc(560,940,150,Math.PI,Math.PI+Math.PI*q*0.9);ctx.stroke();ctx.lineCap='butt';
    txt(String(Math.round(q*90)),560,900,80,{weight:900,color:INK});});
  if(t>=tg){const c=A_slam(t,tg,0.25);withPop(560,1180,c,()=>pill(560,1180,'HERRAMIENTA GRATIS DE GOOGLE',BL,'#fff',28));}ctx.restore();}
function scene11(t){if(t<S[11]-0.2)return;const f=prog(t,S[11],0.3);ctx.save();ctx.globalAlpha*=f;
  const a=A_slam(t,S[11]+0.1,0.3);const k=1+0.03*Math.sin(t*6);if(a)withPop(540,720,a,()=>{ctx.fillStyle=YEL;rr(170,600,740,240,40);ctx.fill();txt('COMENTA',540,665,54,{weight:900,color:INK});txt('WEB',540,770,120*k,{weight:900,color:RED});});
  const tf=WT('frena',S[11])??S[11]+1;if(t>=tf-0.3){const b=A_pop(t,tf-0.3,0.3);withPop(560,960,b,()=>pill(560,960,'Y TE DIGO QUÉ FRENA LA TUYA',INK,'#fff',30));}
  if(t>=tf+0.3){const c=A_pop(t,tf+0.3,0.35);withPop(560,1140,c,()=>{ctx.save();ctx.translate(560,1140);ctx.rotate(-0.03);ctx.fillStyle=BL;rr(-330,-70,660,140,22);ctx.fill();txt('CADA NOCHE · 21:30',0,-28,22,{font:'MO',weight:700,color:'#fff'});txt('UN TRUCO PARA TU NEGOCIO',0,22,40,{weight:900,color:'#fff'});ctx.restore();});}
  ctx.restore();}
function sendTag(t){if(t<3.0||t>S[11])return;const a=A_pop(t,3.0,0.3);const f=1-prog(t,S[11]-0.3,0.3);withPop(540,392,{scale:a.scale,alpha:a.alpha*f*(1-0.85*darkK(t))},()=>pill(540,392,'ENVÍASELO A QUIEN TENGA WEB Y PAGUE ANUNCIOS',RED,'#fff',21));}
function stage(t){scene1(t);scene2(t);scene3(t);scene4(t);scene5(t);scene6(t);scene7(t);scene8(t);scene9(t);scene10(t);scene11(t);}
const RIB='PARA NEGOCIOS · MÁS CLIENTES  ·  ';
window.cover=function(){};
