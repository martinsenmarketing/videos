/* ===== La leche al fondo del súper ===== */
const ENV=__ENV__;
const WORDS=__WORDS__;
const nrm=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-zñ0-9]/g,'');
function WT(w,after=0,end=false){const k=nrm(w);const o=WORDS.find(x=>x.t0>=after-0.01&&nrm(x.w).startsWith(k));if(!o){return null;}return end?o.t1:o.t0;}
const DUR=__DUR__;
const B={casual:WT('no',3.5),para:WT('para',8),uno:WT('uno',13),manda:(WT('envia',20)??WT('manda',20)??WT('mand',20))};
B.dos=WT('dos',B.manda+3);B.tres=WT('tres',B.dos+3);B.prox=WT('proxima',B.tres+3)-0.25;B.sig=WT('sigueme',B.prox+3);
const S=[0,B.casual-0.15,B.para-0.15,B.uno-0.15,B.manda-0.15,B.dos-0.15,B.tres-0.4,B.prox-0.1,B.sig-0.15,DUR];
const TR=[[S[3],S[4]],[S[5],S[6]],[S[6],S[7]]];
const SURP=[[WT('casualidad',3),0.9],[WT('apetito',15),0.8],[WT('diez',B.manda),0.9],[WT('barato',B.dos),0.9],[WT('pequenas',B.tres),0.8]];
function darkK(t){return prog(t,S[4],0.25)*(1-prog(t,S[5]-0.25,0.25));}
const MILK='#EAF2FF';
function milk(x,y,s){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle='#fff';ctx.strokeStyle=INK;ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(-34,-30);ctx.lineTo(-34,70);ctx.lineTo(34,70);ctx.lineTo(34,-30);ctx.lineTo(0,-62);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.fillStyle=BLUE;ctx.fillRect(-31,8,62,34);ctx.fillStyle='#fff';ctx.font='900 18px IN';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('LECHE',0,26);ctx.restore();}
function storeMap(x,y,s,t,pathQ,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s,s);
  wcard(-320,-330,640,660,34);ctx.fillStyle='#F3EFE6';rr(-290,-300,580,600,22);ctx.fill();
  for(let i=0;i<4;i++){ctx.fillStyle='#D9D2C3';rr(-230+i*130,-170,70,330,12);ctx.fill();}
  ctx.fillStyle='#BFE3CC';rr(-290,-300,580,70,20);ctx.fill();
  const k=1+0.08*Math.sin(t*6);milk(0,-262,0.62*k);
  ctx.fillStyle=GRN;rr(-90,262,180,38,10);ctx.fill();txt('ENTRADA',0,282,22,{font:'MO',weight:700,color:'#fff'});
  if(pathQ>0){const P=[[0,250],[-260,250],[-260,-200],[-130,-200],[-130,200],[0,200],[0,-200],[130,-200],[130,200],[260,200],[260,-215],[40,-215]];
    let L=0;const seg=[];for(let i=1;i<P.length;i++){const d=Math.hypot(P[i][0]-P[i-1][0],P[i][1]-P[i-1][1]);seg.push(d);L+=d;}
    let rem=L*pathQ;ctx.strokeStyle=RED;ctx.lineWidth=10;ctx.lineCap='round';ctx.lineJoin='round';ctx.setLineDash([2,22]);ctx.beginPath();ctx.moveTo(P[0][0],P[0][1]);let px=P[0][0],py=P[0][1];
    for(let i=1;i<P.length&&rem>0;i++){const q=Math.min(1,rem/seg[i-1]);px=lerp(P[i-1][0],P[i][0],q);py=lerp(P[i-1][1],P[i][1],q);ctx.lineTo(px,py);rem-=seg[i-1];}
    ctx.stroke();ctx.setLineDash([]);ctx.fillStyle=RED;ctx.beginPath();ctx.arc(px,py,16,0,7);ctx.fill();}
  if(o.arrow){const q=E.out(o.arrow);ctx.strokeStyle=ORG;ctx.lineWidth=12;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(250,230);ctx.lineTo(250,230-440*q);ctx.stroke();
    if(q>0.9){ctx.fillStyle=ORG;ctx.beginPath();ctx.moveTo(225,-190);ctx.lineTo(275,-190);ctx.lineTo(250,-225);ctx.fill();}}
  ctx.restore();}
function bread(x,y,s){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle='#D99A4E';ctx.beginPath();ctx.ellipse(0,0,95,48,0,0,7);ctx.fill();ctx.strokeStyle='#A8692C';ctx.lineWidth=7;ctx.lineCap='round';for(let i=-1;i<=1;i++){ctx.beginPath();ctx.moveTo(i*40-14,-26);ctx.lineTo(i*40+14,22);ctx.stroke();}ctx.restore();}
function apple(x,y,s){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle=RED;ctx.beginPath();ctx.arc(-26,8,48,0,7);ctx.arc(26,8,48,0,7);ctx.fill();ctx.fillStyle=GRN;ctx.beginPath();ctx.ellipse(18,-56,26,12,-0.5,0,7);ctx.fill();ctx.strokeStyle='#5A3A1A';ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(0,-30);ctx.lineTo(4,-62);ctx.stroke();ctx.restore();}
function waves(x,y,t,col){ctx.save();ctx.strokeStyle=col;ctx.lineWidth=7;ctx.lineCap='round';for(let i=0;i<3;i++){ctx.globalAlpha*=1;ctx.beginPath();const ox=x+(i-1)*36;for(let k=0;k<=20;k++){const yy=y-k*5,xx=ox+Math.sin(k*0.6-t*5+i)*9;k?ctx.lineTo(xx,yy):ctx.moveTo(xx,yy);}ctx.stroke();}ctx.restore();}
function basket(x,y,s,n,t){ctx.save();ctx.translate(x,y);ctx.scale(s,s);const cols=[RED,YEL,GRN,BLUE,ORG,PINK,'#9B7BE0',YEL,RED,GRN];
  for(let i=0;i<n;i++){const c=i%5,r=Math.floor(i/5);ctx.fillStyle=cols[i];rr(-150+c*62,-70-r*58,52,52,10);ctx.fill();}
  ctx.fillStyle='#fff';ctx.strokeStyle=INK;ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(-190,-20);ctx.lineTo(190,-20);ctx.lineTo(150,120);ctx.lineTo(-150,120);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.lineWidth=4;for(let i=-3;i<=3;i++){ctx.beginPath();ctx.moveTo(i*45,0);ctx.lineTo(i*38,105);ctx.stroke();}
  ctx.lineWidth=8;ctx.beginPath();ctx.arc(0,-20,170,Math.PI*1.1,Math.PI*1.9);ctx.stroke();ctx.restore();}
function shelf(x,y,t,tEye,tLow){ctx.save();ctx.translate(x,y);ctx.scale(0.82,0.82);wcard(-330,-330,660,660,32);
  const rows=[-210,-30,150];const cols=[[BLUE,PINK,'#9B7BE0',YEL],[RED,ORG,YEL,GRN],[GREY,'#B8B2A5',GREY,'#B8B2A5']];
  rows.forEach((ry,r)=>{for(let i=0;i<4;i++){ctx.fillStyle=cols[r][i];rr(-270+i*140,ry-70,110,120,12);ctx.fill();}ctx.fillStyle=INK;ctx.fillRect(-300,ry+55,600,12);});
  if(t>=tEye){const q=E.out(prog(t,tEye,0.35));ctx.strokeStyle=ORG;ctx.lineWidth=10;rr(-295,-115,590,190,20);ctx.globalAlpha*=q;ctx.stroke();ctx.globalAlpha=1;
    ctx.save();ctx.translate(380,-30);ctx.scale(q,q);ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(0,0,58,34,0,0,7);ctx.fill();ctx.fillStyle=INK;ctx.beginPath();ctx.arc(0,0,20,0,7);ctx.fill();ctx.restore();}
  if(t>=tLow){const q=E.out(prog(t,tLow,0.35));ctx.fillStyle=`rgba(31,164,99,${0.18*q})`;rr(-295,70,590,190,20);ctx.fill();ctx.strokeStyle=GRN;ctx.lineWidth=10;ctx.globalAlpha*=q;rr(-295,70,590,190,20);ctx.stroke();}
  ctx.restore();}
function belt(x,y,t,ts){ctx.save();ctx.translate(x,y);wcard(-330,-250,660,500,32);ctx.fillStyle='#2A2A33';rr(-290,40,580,90,20);ctx.fill();
  ctx.strokeStyle='#4B4B58';ctx.lineWidth=4;for(let i=0;i<8;i++){const xx=-280+((i*80+t*80)%580);ctx.beginPath();ctx.moveTo(xx,50);ctx.lineTo(xx,120);ctx.stroke();}
  txt('CAJA',0,-200,26,{font:'MO',weight:700,color:GREY});
  const items=[['CHICLES',PINK],['CHOCOLATE','#7A4A2A'],['PILAS',YEL]];
  items.forEach(([l,c],i)=>{const a=A_pop(t,ts[i],0.3);if(!a)return;const ix=-190+i*190;withPop(ix,-40,a,()=>{ctx.fillStyle=c;rr(ix-75,-110,150,120,18);ctx.fill();txt(l,ix,-50,22,{weight:900,color:c===YEL?INK:'#fff'});});});
  ctx.restore();}
function listCard(x,y,t,ts){ctx.save();ctx.translate(x,y);ctx.rotate(-0.02);wcard(-260,-300,520,600,24,'#FFFDF5');ctx.fillStyle=RED;ctx.fillRect(-200,-300,4,600);
  txt('LISTA',0,-235,52,{weight:900,color:INK});['LECHE','PAN','HUEVOS','FRUTA'].forEach((s,i)=>{const yy=-130+i*95;ctx.strokeStyle=INK;ctx.lineWidth=5;ctx.strokeRect(-160,yy-24,48,48);
    if(t>=ts+i*0.25){ctx.strokeStyle=GRN;ctx.lineWidth=9;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-152,yy);ctx.lineTo(-138,yy+14);ctx.lineTo(-110,yy-18);ctx.stroke();}
    txt(s,-80,yy,44,{weight:800,color:INK,align:'left'});});ctx.restore();}

function scene1(t){if(t>S[1]+0.3)return;const f=1-prog(t,S[1],0.3);ctx.save();ctx.globalAlpha*=f;
  const k=1+0.03*Math.sin(t*6);shadowTxt('¿POR QUÉ LA LECHE',540,470,82,{});shadowTxt('ESTÁ AL FONDO?',540,580,100*k,{color:YEL});
  const a=A_slam(t,-0.4,0.3);withPop(540,1000,a,()=>storeMap(540,1000,0.92,t,0));ctx.restore();}
function scene2(t){if(t<S[1]-0.2||t>S[2]+0.3)return;const f=fadeIO(t,S[1],S[2]+0.3);ctx.save();ctx.globalAlpha*=f;
  const tc=WT('casualidad',3);stampB(540,520,'NO ES CASUALIDAD',t,tc,70,-0.05,RED);
  const tm=WT('compra',tc);if(t>=tm){const b=A_pop(t,tm,0.3);withPop(540,670,b,()=>pill(540,670,'DE LO QUE MÁS SE COMPRA',YEL,INK,32));}
  const tl=WT('lejos',tm);const a=A_pop(t,tc+0.3,0.35);if(a)withPop(540,1010,a,()=>storeMap(540,1010,0.68,t,0,{arrow:prog(t,tl,0.8)}));
  if(t>=tl+0.4){const c=A_slam(t,tl+0.4,0.25);withPop(560,1290,c,()=>pill(560,1290,'LO MÁS LEJOS DE LA PUERTA',ORG,'#fff',28));}
  ctx.restore();}
function scene3(t){if(t<S[2]-0.2||t>S[3]+0.3)return;const f=fadeIO(t,S[2],S[3]+0.3);ctx.save();ctx.globalAlpha*=f;
  const tcz=WT('cruzas',S[2]),tco=WT('cosas',tcz);HD('CRUZAS MEDIA TIENDA',480,74,t,tcz,S[3],{color:'#fff'});
  storeMap(540,900,0.8,t,E.inOut(prog(t,tcz,tco-tcz)));
  const tt=WT('tres',tcz);if(t>=tt){const a=A_slam(t,tt,0.25);withPop(560,1290,a,()=>pill(560,1290,'3 TRAMPAS POR EL CAMINO',RED,'#fff',30));}
  ctx.restore();}
function scene4(t){if(t<S[3]-0.2||t>S[4]+0.3)return;const f=fadeIO(t,S[3],S[4]+0.3);ctx.save();ctx.globalAlpha*=f;
  HD('1 · LA ENTRADA',470,78,t,S[3]+0.1,S[4],{color:YEL});
  const tp=WT('pan',S[3]),tf=WT('fruta',tp);const a=A_pop(t,tp,0.35),b=A_pop(t,tf,0.35);
  if(a)withPop(350,780,a,()=>{wcard(190,640,320,280,30);bread(350,800,1);if(t>=WT('olor',tf))waves(350,730,t,'#D99A4E');});
  if(b)withPop(730,780,b,()=>{wcard(570,640,320,280,30);apple(730,800,1);});
  const to=WT('olor',tf),tc=WT('colores',to),ta=WT('apetito',tc);
  if(t>=to){const c=A_pop(t,to,0.3);withPop(540,1040,c,()=>pill(540,1040,t>=tc?'OLOR + COLOR':'OLOR',INK,'#fff',36));}
  stampB(560,1200,'= MÁS HAMBRE',t,ta,64,-0.05,RED);
  ctx.restore();}
function loopTitles(t){if(t<S[4]||t>S[5])return;const f=1-prog(t,S[5]-0.2,0.2);ctx.save();ctx.globalAlpha*=f;
  const t1=WT('una',S[4]),t10=WT('diez',t1),t3=WT('tercera',t10);
  const a=A_slam(t,S[4]+0.05,0.22);if(a)withPop(540,560,a,()=>{shadowTxt('ENTRAS A POR',540,500,70,{});shadowTxt(t>=t10?'SALES CON 10':'1 COSA',540,610,104,{color:t>=t10?RED:YEL});});
  const n=t<t1?0:t<t10?1:Math.min(10,1+Math.floor((t-t10)*30));basket(540,930,1.1,n,t);
  if(t>=t3){const b=A_slam(t,t3,0.22);withPop(540,1220,b,()=>{shadowTxt('LA 3ª',540,1170,76,{});shadowTxt('ES LA PEOR',540,1265,76,{color:YEL});});}
  ctx.restore();}
function scene5(t){if(t<S[5]-0.2||t>S[6]+0.3)return;const f=fadeIO(t,S[5],S[6]+0.3);ctx.save();ctx.globalAlpha*=f;
  HD('2 · LA ALTURA',470,78,t,S[5]+0.1,S[6],{color:YEL});
  const te=WT('ojos',S[5]),tb=WT('barato',te);const a=A_pop(t,S[5]+0.3,0.35);if(a)withPop(560,840,a,()=>shelf(560,840,t,te,tb));
  if(t>=te){const b=A_pop(t,te,0.3);withPop(540,560,b,()=>pill(540,560,'A TUS OJOS: LO QUE QUIEREN VENDER',ORG,'#fff',26));}
  if(t>=tb){const c=A_slam(t,tb,0.25);withPop(560,1290,c,()=>pill(560,1290,'LO BARATO, ABAJO',GRN,'#fff',34));}
  ctx.restore();}
function scene6(t){if(t<S[6]-0.2||t>S[7]+0.3)return;const f=fadeIO(t,S[6],S[7]+0.3);ctx.save();ctx.globalAlpha*=f;
  HD('3 · LA CAJA',470,78,t,S[6]+0.15,S[7],{color:YEL});
  const tc=WT('chicles',S[6]),tch=WT('chocola',tc),tp=WT('pilas',tch),tq=WT('pequenas',tp);
  const a=A_pop(t,WT('caja',S[6]),0.35);if(a)withPop(540,880,a,()=>belt(540,880,t,[tc,tch,tp]));
  stampB(600,1170,'COMPRAS DE IMPULSO',t,tq,52,-0.05,RED);
  ctx.restore();}
function scene7(t){if(t<S[7]-0.2||t>S[8]+0.3)return;const f=fadeIO(t,S[7],S[8]+0.3);ctx.save();ctx.globalAlpha*=f;
  const tl=WT('lista',S[7]),tm=WT('mira',tl);HD('LA PRÓXIMA VEZ',470,78,t,S[7]+0.1,S[8],{color:'#fff'});
  const a=A_pop(t,tl,0.35);if(a)withPop(400,800,a,()=>listCard(400,800,t,tl+0.3));
  if(t>=tm){const b=A_slam(t,tm,0.25);withPop(820,880,b,()=>{ctx.save();ctx.translate(820,880);ctx.fillStyle=GRN;rr(-120,-170,240,250,26);ctx.fill();txt('MIRA',0,-120,40,{weight:900,color:'#fff'});txt('ABAJO',0,-70,40,{weight:900,color:'#fff'});
    const yy=Math.sin(t*6)*10;ctx.fillStyle='#fff';ctx.beginPath();ctx.moveTo(-40,-20+yy);ctx.lineTo(40,-20+yy);ctx.lineTo(0,40+yy);ctx.closePath();ctx.fill();ctx.restore();});}
  ctx.restore();}
function scene8(t){if(t<S[8]-0.2)return;const f=prog(t,S[8],0.3);ctx.save();ctx.globalAlpha*=f;
  iconCard(540,760,'SÍGUEME',INK,t,S[8]+0.15,(x,y)=>{ctx.fillStyle=ORG;ctx.beginPath();ctx.arc(x,y-30,40,0,7);ctx.fill();ctx.beginPath();ctx.ellipse(x,y+50,70,38,0,Math.PI,0);ctx.fill();ctx.strokeStyle=ORG;ctx.lineWidth=12;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(x+75,y-20);ctx.lineTo(x+75,y+30);ctx.moveTo(x+50,y+5);ctx.lineTo(x+100,y+5);ctx.stroke();});
  const tg=WT('gastes',S[8])??WT('gaste',S[8])??S[8]+2;if(t>=tg-0.3){const c=A_pop(t,tg-0.3,0.35);withPop(560,1110,c,()=>{ctx.save();ctx.translate(560,1110);ctx.rotate(-0.03);ctx.fillStyle=YEL;rr(-330,-70,660,140,22);ctx.fill();txt('CADA DÍA · 15:30',0,-28,22,{font:'MO',weight:700,color:INK});txt('OTRO TRUCO DEL SÚPER',0,22,42,{weight:900,color:INK});ctx.restore();});}
  ctx.restore();}
function sendTag(t){if(t<3.0||t>S[8])return;const a=A_pop(t,3.0,0.3);const f=1-prog(t,S[8]-0.3,0.3);withPop(540,392,{scale:a.scale,alpha:a.alpha*f*(1-0.85*darkK(t))},()=>pill(540,392,'ENVÍASELO A QUIEN SIEMPRE GASTA DE MÁS',RED,'#fff',24));}
function stage(t){scene1(t);scene2(t);scene3(t);scene4(t);scene5(t);scene6(t);scene7(t);scene8(t);}
const RIB='LO QUE EL SÚPER NO TE CUENTA  ·  ';
window.cover=function(){render(0.01);ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='#0E0E12';ctx.fillRect(0,320,W,1600);
  shadowTxt('¿POR QUÉ',540,450,110,{});shadowTxt('LA LECHE',540,575,130,{color:YEL});shadowTxt('ESTÁ AL FONDO?',540,700,96,{});
  storeMap(560,1080,0.75,3,0.55);
  ctx.save();ctx.beginPath();ctx.rect(0,0,W,1450);ctx.clip();drawAvatar2(ctx,170,1250,0.7,{mouth:0.35,brow:0.6,blink:0,lookX:0.6,smile:1});ctx.restore();
  ctx.save();ctx.translate(720,1340);ctx.rotate(0.04);ctx.fillStyle=RED;rr(-250,-50,500,100,18);ctx.fill();txt('3 TRAMPAS DEL SÚPER',0,4,36,{weight:900,color:'#fff'});ctx.restore();};
