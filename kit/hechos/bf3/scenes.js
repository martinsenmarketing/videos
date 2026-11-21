/* ===== BF 3/4: desmonto los anuncios de Black Friday ===== */
const ENV=__ENV__;
const WORDS=__WORDS__;
const nrm=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-zñ0-9]/g,'');
function WT(w,after=0,end=false){const k=nrm(w);const o=WORDS.find(x=>x.t0>=after-0.01&&nrm(x.w).startsWith(k));if(!o){return null;}return end?o.t1:o.t0;}
const DUR=__DUR__;
const B={};B.rev=WT('revisado',3)-0.45;B.si=WT('si',7);B.uno=WT('uno',11.5);B.ese=WT('ese',B.uno+3);B.manda=WT('manda',B.ese)??WT('envia',B.ese);
B.dos=WT('muchos',B.manda+2);B.nob=WT('no',WT('marcas',B.dos)+0.2);B.tres=WT('y',WT('producto',B.nob))??WT('tres',B.nob);B.mes=WT('un',WT('noviembre',B.tres));
B.antes=WT('antes',B.mes);B.lun=WT('el',WT('tienda',B.antes));
const S=[0,B.rev-0.15,B.si-0.15,B.uno-0.15,B.ese-0.15,B.manda-0.15,B.dos-0.2,B.nob-0.15,B.tres-0.15,B.mes-0.15,B.antes-0.15,B.lun-0.15,DUR];
const TR=[[S[3],S[5]],[S[6],S[8]],[S[8],S[10]]];
const SURP=[[WT('cien',3)??WT('100',3),0.8],[WT('ultimo',B.si),0.8],[WT('maximo',B.ese),0.9],[WT('marcas',B.dos),0.9],[WT('noviembre',B.tres),0.9],[WT('acaba',B.mes),0.8]];
function darkK(t){return prog(t,S[5],0.25)*(1-prog(t,S[6]-0.25,0.25));}
const PURP='#9B7BE0';
function adCard(x,y,s,t,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s,s);wcard(-300,-360,600,720,30);
  ctx.fillStyle=o.brand?PURP:INK;ctx.beginPath();ctx.arc(-240,-300,30,0,7);ctx.fill();
  txt(o.brand?'Marca X':'Tienda',-195,-312,30,{weight:900,color:INK,align:'left'});txt('Publicidad',-195,-278,20,{font:'MO',weight:700,color:GREY,align:'left'});
  ctx.fillStyle='#111';rr(-270,-240,540,420,18);ctx.fill();
  const k=1+0.04*Math.sin(t*6);txt('BLACK FRIDAY',0,-170,40,{weight:900,color:'#fff'});
  txt('HASTA',0,(o.hl?-95:-100),o.hl?62:34,{weight:900,color:o.hl?YEL:'#fff'});
  txt('-56%',0,0,150*k,{weight:900,color:RED});
  txt('*en modelos seleccionados',0,130,o.fine?30:18,{font:'MO',weight:700,color:o.fine?YEL:'#777'});
  if(o.hl){ctx.strokeStyle=YEL;ctx.lineWidth=7;rr(-110,-135,220,80,16);ctx.stroke();}
  ctx.fillStyle=o.brand?PURP:BLUE;rr(-270,210,540,90,20);ctx.fill();txt('COMPRAR YA',0,256,34,{weight:900,color:'#fff'});
  ctx.restore();}
function adGrid(x,y,t,t0){const n=Math.min(100,Math.floor(Math.max(0,t-t0)*45));ctx.save();ctx.translate(x,y);
  for(let i=0;i<n;i++){const c=i%10,r=Math.floor(i/10);ctx.fillStyle=[INK,'#2A2A33','#3A3A44'][i%3];rr(-330+c*66,-330+r*66,58,58,8);ctx.fill();ctx.fillStyle=RED;ctx.fillRect(-322+c*66,-300+r*66,42,8);}
  ctx.restore();shadowTxt(String(n),x,y-410,120,{color:YEL});txt('ANUNCIOS REVISADOS',x,y-335,26,{font:'MO',weight:700,color:'#fff'});}
function cart(x,y,s,n,t){ctx.save();ctx.translate(x,y);ctx.scale(s,s);const cols=[RED,YEL,GRN,BLUE,ORG,PINK,PURP,YEL,RED,GRN];
  for(let i=0;i<n;i++){const c=i%5,r=Math.floor(i/5);ctx.fillStyle=cols[i%10];rr(-150+c*62,-70-r*58,52,52,10);ctx.fill();}
  ctx.strokeStyle='#fff';ctx.lineWidth=12;ctx.lineJoin='round';ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-260,-80);ctx.lineTo(-190,-80);ctx.lineTo(-150,120);ctx.lineTo(180,120);ctx.lineTo(210,-20);ctx.lineTo(-180,-20);ctx.stroke();
  ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(-110,175,26,0,7);ctx.arc(150,175,26,0,7);ctx.fill();ctx.restore();}
function bars(x,y,t,t0){ctx.save();ctx.translate(x,y);wcard(-330,-280,660,560,30);txt('DESCUENTO REAL POR PRODUCTO',0,-230,22,{font:'MO',weight:700,color:GREY});
  const v=[0.56,0.1,0.05,0.15,0,0.2,0.08];const q=E.out(prog(t,t0,0.8));
  v.forEach((h,i)=>{const bx=-270+i*80,bh=360*h*q;ctx.fillStyle=i===0?RED:'#CFC9BC';rr(bx,180-bh,56,Math.max(4,bh),10);ctx.fill();});
  ctx.fillStyle=INK;ctx.fillRect(-290,182,580,6);
  if(q>0.6){txt('56%',-242,180-360*0.56-34,34,{weight:900,color:RED});txt('UNO',-242,220,20,{font:'MO',weight:700,color:RED});txt('EL RESTO: MENOS',90,220,20,{font:'MO',weight:700,color:GREY});}
  ctx.restore();}
function calendar(x,y,t,t2,t27,tfill){ctx.save();ctx.translate(x,y);ctx.scale(0.88,0.88);wcard(-340,-330,680,660,30);txt('NOVIEMBRE',0,-280,40,{weight:900,color:INK});
  ['L','M','X','J','V','S','D'].forEach((d,i)=>txt(d,-270+i*90,-215,24,{font:'MO',weight:700,color:GREY}));
  const fq=tfill?E.inOut(prog(t,tfill,1.4)):0;
  for(let d=1;d<=30;d++){const idx=d+5;const c=idx%7,r=Math.floor(idx/7);const cx=-270+c*90,cy=-150+r*88;
    const on=d>=2&&d<=27&&fq>0&&(d-2)/25<=fq;if(on){ctx.fillStyle='rgba(229,72,77,.85)';rr(cx-38,cy-34,76,68,14);ctx.fill();}
    txt(String(d),cx,cy,30,{weight:800,color:on?'#fff':INK});
    if(d===2&&t>=t2){const q=E.back(prog(t,t2,0.35));ctx.strokeStyle=ORG;ctx.lineWidth=7;ctx.beginPath();ctx.arc(cx,cy,46*q,0,7);ctx.stroke();}
    if(d===27&&t>=t27){const q=E.back(prog(t,t27,0.35));ctx.strokeStyle=INK;ctx.lineWidth=9;ctx.beginPath();ctx.arc(cx,cy,50*q,0,7);ctx.stroke();}}
  ctx.restore();}
function tag(x,y,price,col,rot){ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(-150,-90);ctx.lineTo(110,-90);ctx.lineTo(170,0);ctx.lineTo(110,90);ctx.lineTo(-150,90);ctx.closePath();ctx.fill();
  ctx.fillStyle='#0E0E12';ctx.beginPath();ctx.arc(110,0,16,0,7);ctx.fill();txt(price,-30,4,48,{weight:900,color:'#fff'});ctx.restore();}

function scene1(t){if(t>S[1]+0.3)return;const f=1-prog(t,S[1],0.3);ctx.save();ctx.globalAlpha*=f;
  const k=1+0.03*Math.sin(t*6);shadowTxt('¿POR QUÉ TODOS',540,470,84,{});shadowTxt('DICEN «HASTA»?',540,580,100*k,{color:YEL});
  const a=A_slam(t,-0.4,0.3);withPop(540,1020,a,()=>adCard(540,1020,0.8,t,{hl:t>=WT('hasta',1.5)}));ctx.restore();}
function scene2(t){if(t<S[1]-0.2||t>S[2]+0.3)return;const f=fadeIO(t,S[1],S[2]+0.3);ctx.save();ctx.globalAlpha*=f;
  adGrid(540,980,t,S[1]+0.1);const tt=WT('tres',S[1]);if(t>=tt){const a=A_slam(t,tt,0.25);withPop(540,1300,a,()=>pill(540,1300,'3 TRUCOS SE REPITEN',RED,'#fff',34));}
  ctx.restore();}
function scene3(t){if(t<S[2]-0.2||t>S[3]+0.3)return;const f=fadeIO(t,S[2],S[3]+0.3);ctx.save();ctx.globalAlpha*=f;
  HD('ANTES DE COMPRAR',470,78,t,S[2]+0.1,S[3],{color:'#fff'});const n=Math.min(10,Math.floor((t-S[2])*4));cart(540,900,1.2,n,t);
  stampB(560,1200,'EL 3º CASI NADIE LO VE',t,WT('ultimo',S[2]),48,-0.05,RED);ctx.restore();}
function scene4(t){if(t<S[3]-0.2||t>S[4]+0.3)return;const f=fadeIO(t,S[3],S[4]+0.3);ctx.save();ctx.globalAlpha*=f;
  HD('1 · LA PALABRA «HASTA»',470,70,t,S[3]+0.1,S[4],{color:YEL});
  const th=WT('hasta',S[3]+0.5),tm=WT('modelos',th);const a=A_pop(t,S[3]+0.2,0.35);if(a)withPop(540,960,a,()=>adCard(540,960,0.85,t,{hl:t>=th,fine:t>=tm}));
  ctx.restore();}
function scene5(t){if(t<S[4]-0.2||t>S[5]+0.3)return;const f=fadeIO(t,S[4],S[5]+0.3);ctx.save();ctx.globalAlpha*=f;
  HD('56% = EL MÁXIMO',470,84,t,S[4]+0.1,S[5],{color:YEL});bars(540,900,t,S[4]+0.2);
  stampB(560,1250,'NO ES TU DESCUENTO',t,WT('no',S[4]+0.8),58,-0.05,RED);ctx.restore();}
function loopTitles(t){if(t<S[5]||t>S[6])return;const f=1-prog(t,S[6]-0.2,0.2);ctx.save();ctx.globalAlpha*=f;
  const tc=WT('carrito',S[5]),ts=WT('sigue',tc);const a=A_slam(t,S[5]+0.05,0.22);
  if(a)withPop(540,560,a,()=>{shadowTxt('ENVÍASELO A QUIEN',540,500,64,{});shadowTxt('TENGA EL CARRITO LLENO',540,600,74,{color:YEL});});
  cart(540,940,1.1,t>=tc?10:3,t);
  if(t>=ts){const b=A_slam(t,ts,0.22);withPop(540,1230,b,()=>{shadowTxt('LO MEJOR',540,1180,80,{});shadowTxt('VIENE AHORA',540,1275,80,{color:YEL});});}
  ctx.restore();}
function scene6(t){if(t<S[6]-0.2||t>S[7]+0.3)return;const f=fadeIO(t,S[6],S[7]+0.3);ctx.save();ctx.globalAlpha*=f;
  HD('2 · ¿DE QUIÉN ES EL ANUNCIO?',470,62,t,S[6]+0.1,S[7],{color:YEL});
  const tm=WT('marcas',S[6]);const a=A_pop(t,S[6]+0.2,0.35);if(a)withPop(540,960,a,()=>adCard(540,960,0.82,t,{brand:t>=tm}));
  if(t>=tm){const b=A_slam(t,tm,0.25);withPop(560,1300,b,()=>pill(560,1300,'LO PAGA LA MARCA, NO LA TIENDA',PURP,'#fff',28));}
  ctx.restore();}
function scene7(t){if(t<S[7]-0.2||t>S[8]+0.3)return;const f=fadeIO(t,S[7],S[8]+0.3);ctx.save();ctx.globalAlpha*=f;
  const tb=WT('buscan',S[7]+0.5);const a=A_pop(t,S[7]+0.1,0.3);if(a)withPop(540,720,a,()=>{wcard(190,620,700,200,30);txt('TU MEJOR COMPRA',540,720,54,{weight:900,color:GREY});
    if(t>=S[7]+0.6){const q=E.out(prog(t,S[7]+0.6,0.3));ctx.strokeStyle=RED;ctx.lineWidth=12;ctx.beginPath();ctx.moveTo(230,720);ctx.lineTo(230+620*q,720);ctx.stroke();}});
  const b=A_slam(t,tb,0.25);if(b)withPop(540,1000,b,()=>{ctx.fillStyle=PURP;rr(170,900,740,200,30);ctx.fill();txt('VENDER SU PRODUCTO',540,1000,56,{weight:900,color:'#fff'});});
  ctx.restore();}
function scene8(t){if(t<S[8]-0.2||t>S[9]+0.3)return;const f=fadeIO(t,S[8],S[9]+0.3);ctx.save();ctx.globalAlpha*=f;
  HD('3 · EL CALENDARIO',470,78,t,S[8]+0.1,S[9],{color:YEL});
  const t27=WT('27',S[8])??WT('veinti',S[8]),t2=WT('2',WT('desde',S[8]))??WT('dos',WT('desde',S[8]));calendar(560,870,t,t2??S[9]-1,t27??S[8]+1,t2?t2+0.3:null);
  if(t>=t2){const c=A_slam(t,t2+0.2,0.25);withPop(560,1340,c,()=>pill(560,1340,'ANUNCIOS DESDE EL 2',RED,'#fff',32));}
  ctx.restore();}
function scene9(t){if(t<S[9]-0.2||t>S[10]+0.3)return;const f=fadeIO(t,S[9],S[10]+0.3);ctx.save();ctx.globalAlpha*=f;
  ctx.globalAlpha*=0.3;calendar(560,870,t,0,0,-10);ctx.restore();ctx.save();ctx.globalAlpha*=f;
  const L=['¡ÚLTIMAS HORAS!','¡SE ACABA!','¡ÚLTIMO DÍA!'];L.forEach((s,i)=>stampB(540+(i-1)*60,700+i*260,s,t,S[9]+0.25+i*0.5,58,(i%2?0.06:-0.07),RED));
  ctx.restore();}
function scene10(t){if(t<S[10]-0.2||t>S[11]+0.3)return;const f=fadeIO(t,S[10],S[11]+0.3);ctx.save();ctx.globalAlpha*=f;
  HD('ANTES DE PAGAR',470,84,t,S[10]+0.1,S[11],{color:'#fff'});const tc=WT('compara',S[10]),to=WT('otra',tc);
  const a=A_pop(t,tc,0.3),b=A_pop(t,to,0.3);if(a)withPop(330,900,a,()=>tag(330,900,'TIENDA 1',RED,-0.08));if(b)withPop(760,900,b,()=>tag(760,900,'TIENDA 2',GRN,0.08));
  if(t>=to+0.4){const c=A_slam(t,to+0.4,0.25);withPop(560,1180,c,()=>pill(560,1180,'COMPARA EN OTRA TIENDA',GRN,'#fff',34));}
  ctx.restore();}
function scene11(t){if(t<S[11]-0.2)return;const f=prog(t,S[11],0.3);ctx.save();ctx.globalAlpha*=f;
  HD('EL LUNES · 19:30',470,74,t,S[11]+0.1,DUR+1,{color:YEL});
  const tv=WT('vender',S[11]),ts=WT('sin',tv);const a=A_pop(t,tv,0.35);if(a)withPop(540,820,a,()=>{wcard(160,680,760,280,34);txt('CÓMO VENDER MÁS',540,770,60,{weight:900,color:INK});txt('EN BLACK FRIDAY',540,860,48,{weight:900,color:RED});});
  stampB(560,1110,'SIN BAJAR PRECIOS',t,ts,64,-0.05,GRN);
  if(t>=ts+0.6){const c=A_pop(t,ts+0.6,0.3);withPop(540,1290,c,()=>pill(560,1290,'SERIE BLACK FRIDAY · 4/4',YEL,INK,28));}
  ctx.restore();}
function sendTag(t){if(t<3.0||t>S[11])return;const a=A_pop(t,3.0,0.3);const f=1-prog(t,S[11]-0.3,0.3);withPop(540,392,{scale:a.scale,alpha:a.alpha*f*(1-0.85*darkK(t))},()=>pill(540,392,'ENVÍASELO A QUIEN TENGA EL CARRITO LLENO',RED,'#fff',22));}
function stage(t){scene1(t);scene2(t);scene3(t);scene4(t);scene5(t);scene6(t);scene7(t);scene8(t);scene9(t);scene10(t);scene11(t);}
const RIB='BLACK FRIDAY POR DENTRO · 3/4  ·  ';
window.cover=function(){};
