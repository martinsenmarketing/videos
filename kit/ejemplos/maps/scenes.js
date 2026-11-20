/* ===== Por qué tu competencia sale en Google Maps ===== */
const ENV=__ENV__;
const WORDS=__WORDS__;
const nrm=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-zñ0-9]/g,'');
function WT(w,after=0,end=false){const k=nrm(w);const o=WORDS.find(x=>x.t0>=after-0.01&&nrm(x.w).startsWith(k));if(!o)return null;return end?o.t1:o.t0;}
const DUR=__DUR__;
const B={};B.exp=WT('google',3);B.dist=WT('la',WT('prominencia',B.exp)+0.3);B.uno=WT('uno',B.dist);B.manda=WT('mand',B.uno)??WT('envi',B.uno);
B.dos=WT('dos',B.manda+2);B.tres=WT('tres',WT('malas',B.dos))-0.35;B.sig=WT('sigueme',B.tres);
const S=[0,B.exp-0.15,B.dist-0.15,B.uno-0.15,B.manda-0.15,B.dos-0.15,B.tres-0.1,B.sig-0.15,DUR];
const TR=[[S[3],S[4]],[S[5],S[6]],[S[6],S[7]]];
const SURP=[[WT('cambiar',B.dist),0.8],[WT('trabaja',B.dist),0.9],[WT('mueve',B.manda),0.9],[WT('posicion',B.dos),0.9],[WT('vivo',B.tres),0.8]];
function darkK(t){return prog(t,S[4],0.25)*(1-prog(t,S[5]-0.25,0.25));}
function phoneMap(x,y,s,t,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s,s);
  ctx.fillStyle='#1B1B22';rr(-230,-400,460,800,56);ctx.fill();ctx.fillStyle='#E9F0E4';rr(-205,-370,410,740,36);ctx.fill();
  ctx.save();rr(-205,-370,410,740,36);ctx.clip();ctx.strokeStyle='#fff';ctx.lineWidth=26;[[-205,-120,205,-60],[-90,-370,-40,370],[-205,170,205,120],[90,-370,140,370]].forEach(l=>{ctx.beginPath();ctx.moveTo(l[0],l[1]);ctx.lineTo(l[2],l[3]);ctx.stroke();});
  ctx.fillStyle='#CFE3F5';ctx.beginPath();ctx.ellipse(150,280,120,70,0.3,0,7);ctx.fill();ctx.restore();
  ctx.fillStyle='#fff';rr(-185,-350,370,64,32);ctx.fill();magnifier(-150,-322,20,GREY);txt('tu servicio cerca de mí',-115,-318,22,{font:'IN',weight:600,color:GREY,align:'left'});
  const bob=Math.sin(t*4)*6;pin(-20,-150+bob,90,RED);txt('ELLOS',-20,-80,26,{weight:900,color:INK});
  pin(110,60,64,'#7E7A72');txt('ELLOS 2',110,110,20,{weight:900,color:'#5A5750'});
  ctx.globalAlpha*=o.dim??0.5;pin(-120,230,58,'#B8B2A5');txt('TÚ',-120,278,22,{weight:900,color:'#8C8A84'});ctx.restore();}
function pillar(x,y,label,col,t,t0,o={}){const a=A_pop(t,t0,0.35);if(!a)return;withPop(x,y,a,()=>{ctx.save();ctx.globalAlpha*=o.alpha??1;wcard(x-150,y-150,300,300,30);
  ctx.fillStyle=col;ctx.beginPath();ctx.arc(x,y-40,58,0,7);ctx.fill();txt(o.n||'',x,y-38,58,{weight:900,color:'#fff'});txt(label,x,y+75,30,{weight:900,color:INK,maxW:270});
  if(o.cross){const q=E.out(o.cross);ctx.strokeStyle=RED;ctx.lineWidth=12;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(x-120,y-120);ctx.lineTo(x-120+240*q,y-120+240*q);ctx.stroke();}
  if(o.ok){const q=E.back(o.ok);ctx.save();ctx.translate(x+115,y-115);ctx.scale(q,q);ctx.fillStyle=GRN;ctx.beginPath();ctx.arc(0,0,38,0,7);ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=8;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-15,0);ctx.lineTo(-4,12);ctx.lineTo(16,-12);ctx.stroke();ctx.restore();}
  ctx.restore();});}
function profileCard(x,y,t,tc,ts,td){ctx.save();ctx.translate(x,y);wcard(-340,-300,680,600,32);
  ctx.fillStyle='#E9F0E4';rr(-340,-300,680,150,32);ctx.fill();ctx.fillRect(-340,-180,680,30);pin(-250,-215,60,RED);
  txt('TU NEGOCIO',-180,-110,44,{weight:900,color:INK,align:'left'});stars(-170,-55,15,4.8);txt('4,8',-20,-55,26,{weight:800,color:INK,align:'left'});
  const hl=(tt,yy,h)=>{if(t>=tt){const q=E.out(prog(t,tt,0.35));ctx.strokeStyle=ORG;ctx.lineWidth=7;ctx.globalAlpha=q;rr(-310,yy-h/2,620,h,16);ctx.stroke();ctx.globalAlpha=1;}};
  txt('CATEGORÍA PRINCIPAL',-300,15,20,{font:'MO',weight:700,color:GREY,align:'left'});ctx.fillStyle='#EEE9DE';rr(-300,35,330,52,26);ctx.fill();txt('Fontanero',-280,62,28,{weight:800,color:INK,align:'left'});hl(tc,40,120);
  txt('SERVICIOS',-300,125,20,{font:'MO',weight:700,color:GREY,align:'left'});['Fugas','Urgencias 24 h','Calderas'].forEach((s,i)=>{const w=tw(s,24,'IN',800)+36;const xx=[-300,-130,110][i];ctx.fillStyle='#EEE9DE';rr(xx,145,w,48,24);ctx.fill();txt(s,xx+18,170,24,{weight:800,color:INK,align:'left'});});hl(ts,150,110);
  txt('DESCRIPCIÓN',-300,230,20,{font:'MO',weight:700,color:GREY,align:'left'});ctx.fillStyle='#E3DFD6';[0,1].forEach(i=>{rr(-300,250+i*22,i?400:600,12,6);ctx.fill();});hl(td,255,90);
  ctx.restore();}
function review(x,y,name,r,text,reply,t,t0,tr,col){const a=A_pop(t,t0,0.35);if(!a)return;withPop(x,y,a,()=>{wcard(x-330,y-110,660,reply&&t>=tr?300:220,26);
  ctx.fillStyle=col;ctx.beginPath();ctx.arc(x-270,y-55,30,0,7);ctx.fill();txt(name[0],x-270,y-53,30,{weight:900,color:'#fff'});txt(name,x-225,y-70,26,{weight:800,color:INK,align:'left'});stars(x-215,y-35,11,r);
  txt(text,x-300,y+30,26,{weight:600,color:INK,align:'left'});
  if(reply&&t>=tr){const q=A_pop(t,tr,0.3);withPop(x,y+130,q,()=>{ctx.fillStyle='#EEF6F0';rr(x-290,y+85,600,80,18);ctx.fill();ctx.fillStyle=GRN;ctx.fillRect(x-290,y+85,8,80);txt('Respuesta: '+reply,x-265,y+125,24,{weight:700,color:'#1E6B43',align:'left'});});}});}
function scene1(t){if(t>S[1]+0.3)return;const f=1-prog(t,S[1],0.3);ctx.save();ctx.globalAlpha*=f;
  const k=1+0.03*Math.sin(t*6);shadowTxt('¿POR QUÉ ELLOS SALEN',540,470,74,{});shadowTxt('EN GOOGLE MAPS',540,570,92*k,{color:YEL});shadowTxt('Y TÚ NO?',540,665,80,{});
  const a=A_slam(t,-0.4,0.3);withPop(580,1080,a,()=>phoneMap(600,1080,0.76,t));ctx.restore();}
function scene2(t){if(t<S[1]-0.2||t>S[2]+0.3)return;const f=fadeIO(t,S[1],S[2]+0.3);ctx.save();ctx.globalAlpha*=f;
  const ta=WT('ayuda',S[1]);HD('GOOGLE DECIDE POR',490,70,t,S[1]+0.1,S[2],{color:'#fff'});HD('3 COSAS',580,96,t,WT('tres',S[1])??S[1]+1.5,S[2],{color:YEL,slam:true});
  const r=WT('relevancia',S[1]),d=WT('distancia',r),p=WT('prominencia',d);
  pillar(210,890,'RELEVANCIA',BLUE,t,r,{n:'1'});pillar(540,890,'DISTANCIA',GREY,t,d,{n:'2'});pillar(870,890,'PROMINENCIA',ORG,t,p,{n:'3'});
  srcChip(600,1200,'Ayuda de Google Business Profile',t,ta,S[2]);ctx.restore();}
function scene3(t){if(t<S[2]-0.2||t>S[3]+0.3)return;const f=fadeIO(t,S[2],S[3]+0.3);ctx.save();ctx.globalAlpha*=f;
  const tc=WT('cambiar',S[2]),to=WT('otras',tc),ts=WT('segunda',to),tt=WT('trabaja',ts);
  pillar(210,760,'RELEVANCIA',BLUE,t,-1,{n:'1',ok:prog(t,to+0.3,0.35)});pillar(540,760,'DISTANCIA',GREY,t,-1,{n:'2',cross:prog(t,tc,0.4),alpha:t>tc?0.55:1});pillar(870,760,'PROMINENCIA',ORG,t,-1,{n:'3',ok:prog(t,to+0.5,0.35)});
  if(t>=tc){const a=A_pop(t,tc,0.3);withPop(540,520,a,()=>pill(540,520,'LA DISTANCIA NO LA CAMBIAS',INK,'#fff',28));}
  if(t>=ts){const b=A_slam(t,ts,0.25);withPop(600,1060,b,()=>{ctx.save();ctx.translate(600,1060);ctx.rotate(-0.04);ctx.fillStyle=YEL;rr(-330,-80,660,160,22);ctx.fill();txt('LA PROMINENCIA',0,-28,40,{weight:900,color:INK});txt(t>=tt?'CASI NADIE LA TRABAJA':'...',0,30,38,{weight:900,color:RED});ctx.restore();});}
  ctx.restore();}
function scene4(t){if(t<S[3]-0.2||t>S[4]+0.3)return;const f=fadeIO(t,S[3],S[4]+0.3);ctx.save();ctx.globalAlpha*=f;
  HD('1 · RELEVANCIA',470,80,t,S[3]+0.1,S[4],{color:YEL});const tf=WT('ficha',S[3]),tc=WT('categoria',tf),ts=WT('servicios',tc),td=WT('descripcion',ts),tp=WT('palabras',td);
  if(t<tf)HD('DI EXACTAMENTE LO QUE HACES',600,48,t,S[3]+0.6,tf,{color:'#fff'});
  const a=A_pop(t,tf,0.35);if(a)withPop(560,880,a,()=>profileCard(560,880,t,tc,ts,td));
  if(t>=tp){const b=A_slam(t,tp,0.25);withPop(580,1250,b,()=>pill(580,1250,'CON LAS PALABRAS QUE BUSCA TU CLIENTE',ORG,'#fff',24));}
  ctx.restore();}
function loopTitles(t){if(t<S[4]||t>S[5])return;const f=1-prog(t,S[5]-0.2,0.2);ctx.save();ctx.globalAlpha*=f;
  const tn=WT('negocio',S[4]),ts=WT('segunda',tn),tm=WT('mueve',ts);
  const a=A_slam(t,S[4]+0.05,0.22);if(a)withPop(540,640,a,()=>{shadowTxt('MÁNDASELO A QUIEN',540,600,74,{});shadowTxt('TENGA UN NEGOCIO',540,700,84,{color:YEL});});
  if(t>=ts){const b=A_slam(t,ts,0.22);withPop(540,960,b,()=>{shadowTxt('LA 2ª',540,920,90,{});shadowTxt(t>=tm?'ES LA QUE MÁS MUEVE':'ES...',540,1030,80,{color:RED});});}
  ctx.restore();}
function scene5(t){if(t<S[5]-0.2||t>S[6]+0.3)return;const f=fadeIO(t,S[5],S[6]+0.3);ctx.save();ctx.globalAlpha*=f;
  HD('2 · PROMINENCIA',470,80,t,S[5]+0.1,S[6],{color:YEL});
  const tr=WT('resenas',S[5]),tn=WT('nota',tr),tg=WT('google',tn),tpo=WT('posicion',tg),tpi=WT('contento',tpo)-0.9,tre=WT('responde',tpi),tm=WT('malas',tre);
  if(t<tpi-0.2){const g=1-prog(t,tpi-0.5,0.3);ctx.save();ctx.globalAlpha*=g;
    const a=A_pop(t,tr,0.35);if(a)withPop(540,800,a,()=>{wcard(230,640,620,320,30);const n=Math.round(127*E.out(prog(t,tr,1.0)));txt(String(n),540,740,120,{weight:900,color:INK});txt('RESEÑAS',540,820,30,{font:'MO',weight:700,color:GREY});if(t>=tn){stars(410,895,24,4.8);}});
    if(t>=tg){const b=A_pop(t,tg,0.3);withPop(540,1090,b,()=>pill(540,1090,'MÁS RESEÑAS + MEJOR NOTA',GRN,'#fff',30));}
    if(t>=tpo){const c=A_slam(t,tpo,0.25);withPop(560,1200,c,()=>pill(560,1200,'= PUEDES SUBIR EN MAPS',YEL,INK,30));}
    srcChip(600,1310,'Ayuda de Google Business Profile',t,tg,tpi-0.5);ctx.restore();}
  else{review(560,680,'Laura',5,'Rápidos y muy amables.','¡Gracias, Laura!',t,tpi,tre,BLUE);review(560,1010,'Pedro',2,'Llegaron tarde.','Lo sentimos, Pedro. Te llamamos.',t,tre+0.3,tre+1.2,'#9B7BE0');
    stampB(620,1260,'RESPONDE A TODAS',t,tre+0.9,50,-0.05,GRN);}
  ctx.restore();}
function scene6(t){if(t<S[6]-0.2||t>S[7]+0.3)return;const f=fadeIO(t,S[6],S[7]+0.3);ctx.save();ctx.globalAlpha*=f;
  HD('3 · FICHA AL DÍA',470,80,t,S[6]+0.15,S[7],{color:YEL});
  const th=WT('horarios',S[6]),tf=WT('fotos',th),tp=WT('publicaciones',tf),tv=WT('vivo',tp);
  iconCard(220,800,'HORARIOS',INK,t,th,(x,y)=>{ctx.strokeStyle=ORG;ctx.lineWidth=12;ctx.beginPath();ctx.arc(x,y-20,62,0,7);ctx.stroke();ctx.lineCap='round';ctx.beginPath();ctx.moveTo(x,y-20);ctx.lineTo(x,y-60);ctx.moveTo(x,y-20);ctx.lineTo(x+30,y-5);ctx.stroke();});
  iconCard(540,800,'FOTOS',INK,t,tf,(x,y)=>{ctx.fillStyle=BLUE;rr(x-70,y-75,140,105,16);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(x,y-22,28,0,7);ctx.fill();ctx.fillStyle=BLUE;ctx.beginPath();ctx.arc(x,y-22,16,0,7);ctx.fill();});
  iconCard(860,800,'POSTS',INK,t,tp,(x,y)=>{ctx.fillStyle=GRN;rr(x-60,y-80,120,115,14);ctx.fill();ctx.fillStyle='#fff';[0,1,2].forEach(i=>{ctx.fillRect(x-40,y-58+i*30,i==2?50:80,12);});});
  stampB(580,1150,'= NEGOCIO VIVO',t,tv,62,-0.05,GRN);ctx.restore();}
function scene7(t){if(t<S[7]-0.2)return;const f=prog(t,S[7],0.3);ctx.save();ctx.globalAlpha*=f;
  iconCard(540,760,'SÍGUEME',INK,t,S[7]+0.15,(x,y)=>{ctx.fillStyle=ORG;ctx.beginPath();ctx.arc(x,y-30,40,0,7);ctx.fill();ctx.beginPath();ctx.ellipse(x,y+50,70,38,0,Math.PI,0);ctx.fill();ctx.strokeStyle=ORG;ctx.lineWidth=12;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(x+75,y-20);ctx.lineTo(x+75,y+30);ctx.moveTo(x+50,y+5);ctx.lineTo(x+100,y+5);ctx.stroke();});
  const tc=WT('cada',S[7])??S[7]+3;if(t>=tc){const c=A_pop(t,tc,0.35);withPop(560,1110,c,()=>{ctx.save();ctx.translate(560,1110);ctx.rotate(-0.03);ctx.fillStyle=YEL;rr(-340,-70,680,140,22);ctx.fill();txt('CADA NOCHE · 21:30',0,-28,22,{font:'MO',weight:700,color:INK});txt('UN TRUCO PARA TU NEGOCIO',0,22,40,{weight:900,color:INK});ctx.restore();});}
  ctx.restore();}
function sendTag(t){if(t<3.0||t>S[7])return;const a=A_pop(t,3.0,0.3);const f=1-prog(t,S[7]-0.3,0.3);withPop(540,392,{scale:a.scale,alpha:a.alpha*f*(1-0.85*darkK(t))},()=>pill(540,392,'MÁNDASELO A QUIEN TENGA UN NEGOCIO',RED,'#fff',25));}
function stage(t){scene1(t);scene2(t);scene3(t);scene4(t);scene5(t);scene6(t);scene7(t);}
const RIB='PARA NEGOCIOS  ·  UN TRUCO CADA NOCHE  ·  ';
window.cover=function(){render(0.01);ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='#0E0E12';ctx.fillRect(0,320,W,1600);
  shadowTxt('¿POR QUÉ ELLOS',540,450,104,{});shadowTxt('SALEN EN MAPS',540,570,112,{color:YEL});shadowTxt('Y TÚ NO?',540,690,104,{});
  phoneMap(620,1080,0.5,1,{dim:0.6});
  ctx.save();ctx.beginPath();ctx.rect(0,0,W,1450);ctx.clip();drawAvatar2(ctx,170,1250,0.7,{mouth:0.35,brow:0.6,blink:0,lookX:0.6,smile:1});ctx.restore();
  ctx.save();ctx.translate(700,1350);ctx.rotate(0.04);ctx.fillStyle=RED;rr(-260,-50,520,100,18);ctx.fill();txt('LAS 3 COSAS QUE MIRA',0,4,36,{weight:900,color:'#fff'});ctx.restore();};
