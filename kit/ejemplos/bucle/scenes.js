/* ===== Piloto 4 · Bucle de dopamina, un solo mundo ===== */
const ENV=__ENV__;const WORDS=__WORDS__;const DUR=__DUR__;
const nrm=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-zñ0-9]/g,'');
function WT(w,after=0){const k=nrm(w);const o=WORDS.find(x=>x.t0>=after-0.01&&nrm(x.w).startsWith(k));return o?o.t0:null;}
const STYLE='world',AVATAR=false;
const TT={};TT.cambias=WT('si');TT.igual=WT('igual');TT.miras=WT('miras');TT.ningun=WT('ningun');TT.entonces=WT('entonces');TT.donde=WT('donde');TT.casi=WT('casi');TT.fuerza=WT('fuerza');TT.pero=WT('pero');TT.compras=WT('compras');TT.como=WT('como',TT.compras);TT.pagas=WT('pagas',TT.como);
TT.midieron=WT('midieron');TT.env=WT('envias');TT.mit=WT('en',TT.env+2);TT.sub=WT('subastaron');TT.quien=WT('quien',TT.sub);TT.tarj=WT('tarjeta',TT.quien);TT.mas=WT('mas',TT.tarj);TT.efe=WT('efectivo',TT.mas);
TT.bill=WT('con',TT.efe);TT.duele=WT('duele');TT.tarj2=WT('con',TT.duele);TT.suena=WT('suena',TT.tarj2);TT.por=WT('por',TT.suena);TT.encender=WT('encender');TT.antes=WT('antes',TT.encender);TT.lo=WT('lo',TT.antes+0.5);TT.billetes=WT('billetes',TT.lo);TT.ytu=WT('y',TT.billetes);TT.coment=WT('comentarios');TT.end=WORDS[WORDS.length-1].t1;
const PA=[540,900],PB=[1900,900],PC=[1900,2600],PD=[540,2600],Ee=[540,4300],PF=[1900,4300],PG=[1900,6000],Hh=[540,6000];
const K=[[0,540,900,1.35,-0.04],[1.2,540,900,1.0,0],[TT.igual-0.1,540,890,1.12,0.01],[TT.igual+0.15,540,1050,1.3,0],[TT.miras+0.25,1900,900,1.0,0.03],
 [TT.entonces,1900,870,1.15,0],[TT.donde+0.2,2050,820,1.4,-0.03],[TT.casi-0.4,2050,820,1.45,-0.03],[TT.casi+0.15,1900,2600,1.0,0],
 [TT.pero,1900,2620,1.0,0.01],[TT.como,1900,2600,1.0,0],[TT.pagas+0.1,1900,2830,1.3,0],[TT.midieron+0.3,540,2600,1.0,-0.03],
 [TT.env,540,2580,1.08,0],[TT.mit-0.3,540,2620,1.12,0.01],[TT.mit+0.25,540,4300,1.0,0],[TT.mas-0.2,560,4320,1.05,0],[TT.mas+0.2,600,4200,1.3,0],[TT.bill-0.5,560,4250,1.15,0],
 [TT.bill+0.1,1900,4300,0.95,0.02],[TT.bill+1.0,1900,4240,1.9,0],[TT.duele+0.3,1900,4240,2.05,0.02],[TT.suena,1900,4240,2.15,-0.02],[TT.por+0.1,1900,6000,1.0,0],
 [TT.antes,1900,5980,1.08,0],[TT.billetes,1950,6050,1.3,0.01],[TT.ytu+0.25,540,6000,1.0,-0.03],[TT.coment,540,6000,1.12,0],[TT.end+0.2,1220,3450,0.3,0],[DUR,1220,3450,0.28,0]];
const CAMK2=K.map(k=>[k[0],k[1],k[2],k[3]]);
function camRot(t){let i=0;while(i<K.length-2&&t>=K[i+1][0])i++;const a=K[i],b=K[i+1];return lerp(a[4],b[4],E.inOut(prog(t,a[0],b[0]-a[0])));}
const S=[0,TT.miras,TT.casi,TT.midieron,TT.mit,TT.bill,TT.por,TT.ytu,DUR];
const TR=[];const SURP=[[TT.igual,0.8],[TT.donde,0.8],[TT.como,0.9],[TT.mas,1],[TT.duele,0.8],[TT.billetes,0.7]];
function darkK(t){return 0;}function loopTitles(t){}function sendTag(t){}
function creamMark(t){chipC('PREGUNTAS QUE INCOMODAN',W/2,150,INK,CRM,26);txt('@martinsenmarketing',W/2,222,22,{weight:700,color:GREY});
  // gancho en pantalla desde el fotograma 0
  if(t<TT.cambias+0.2){const f=1-prog(t,TT.cambias-0.1,0.25);ctx.save();ctx.globalAlpha*=f;bigText([{s:'¿Llegas a fin de mes',c:INK},{s:'sin saber en qué',c:INK},{s:'se te fue el dinero?',c:RED}],360,78,t,-0.3,{stag:0.1,shadow:false,stroke:'#fff'});ctx.restore();}}
const IK={shadow:false,color:INK};
function wstamp(s,x,y,t,t0,col=RED,size=90,rot=-0.08){if(t<t0)return;const a=A_slam(t,t0,0.22);withPop(x,y,a,()=>{ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.font=`900 ${size}px IN`;const w=ctx.measureText(s).width+60;ctx.fillStyle='#fff';rr(-w/2,-size*0.8,w,size*1.6,18);ctx.fill();ctx.strokeStyle=col;ctx.lineWidth=10;rr(-w/2,-size*0.8,w,size*1.6,18);ctx.stroke();txt(s,0,4,size,{weight:900,color:col});ctx.restore();});}
function wtxt(s,x,y,size,t,t0,col=INK){if(t<t0)return;const a=A_pop(t,t0,0.3);txt(s,x,y,size,{weight:900,color:col,scale:a.scale,alpha:a.alpha});}
function coin(x,y,r,rot){ctx.save();ctx.translate(x,y);ctx.scale(Math.cos(rot),1);ctx.fillStyle='#F2C14E';ctx.strokeStyle='#B8862B';ctx.lineWidth=5;ctx.beginPath();ctx.arc(0,0,r,0,7);ctx.fill();ctx.stroke();ctx.restore();}
function world(t){ // papel y camino que une las escenas
  ctx.save();ctx.strokeStyle='rgba(20,20,22,.05)';ctx.lineWidth=3;for(let y=-600;y<7000;y+=70){ctx.beginPath();ctx.moveTo(-600,y);ctx.lineTo(3000,y);ctx.stroke();}
  ctx.setLineDash([26,22]);ctx.strokeStyle='rgba(20,20,22,.18)';ctx.lineWidth=10;ctx.beginPath();[PA,PB,PC,PD,Ee,PF,PG,Hh].forEach((p,i)=>i?ctx.lineTo(p[0],p[1]+380):ctx.moveTo(p[0],p[1]+380));ctx.stroke();ctx.setLineDash([]);
  for(let i=0;i<60;i++){const x=((i*733)%3400)-400,y=((i*1291)%7200)-500;coin(x,y,14,t*2+i);}ctx.restore();}
function stage(t){world(t);
  // A · apuestas
  {const [x,y]=PA;stick(x-60,y+180,1.3,INK,{mouth:'o',rx:90,ry:30});
   ctx.save();ctx.translate(x+40,y+240);ctx.fillStyle='#7A4E2D';rr(-60,-40,120,80,12);ctx.fill();ctx.restore();
   for(let i=0;i<5;i++){const k=((t*0.9+i*0.2)%1);coin(x+50+i*8,y+280+k*260,16,t*6+i);}
   const flip=t>=TT.cambias?Math.floor((t-TT.cambias)*3):0;const days=['30','31','1','30','31'];
   ctx.save();ctx.translate(x+260,y-60);ctx.rotate(0.06);ctx.fillStyle='#fff';ctx.strokeStyle=INK;ctx.lineWidth=8;rr(-120,-130,240,260,20);ctx.fill();ctx.stroke();ctx.fillStyle=RED;rr(-120,-130,240,70,20);ctx.fill();ctx.fillRect(-120,-80,240,20);
   txt(t>=TT.cambias?'MES QUE VIENE':'FIN DE MES',0,-95,22,{font:'MO',weight:700,color:'#fff'});txt(days[flip%5],0,30,110,{weight:900,color:INK});ctx.restore();
   if(t>=TT.cambias){ctx.save();ctx.translate(x+260,y-60);ctx.rotate(t*2.5);ctx.strokeStyle=ORG;ctx.lineWidth=12;ctx.lineCap='round';ctx.beginPath();ctx.arc(0,0,200,0,4.8);ctx.stroke();ctx.restore();}
   wstamp('OTRA VEZ IGUAL',x,y+400,t,TT.igual,RED,70);}
  // B · gran pregunta
  {const [x,y]=PB;ctx.save();ctx.translate(x,y);ctx.fillStyle='#1B1B22';rr(-250,-430,500,860,60);ctx.fill();ctx.fillStyle='#fff';rr(-225,-400,450,800,40);ctx.fill();
   txt('MI BANCO',0,-340,30,{font:'MO',weight:700,color:GREY});
   const items=[['Café','1,80 €'],['App','4,99 €'],['Súper','12,40 €'],['Comida a domicilio','9,90 €'],['Bizum','5,00 €'],['Gasolina','20,00 €'],['Ropa','15,99 €'],['Café','1,80 €'],['Suscripción','7,99 €'],['Tienda','6,50 €']];
   ctx.save();rr(-225,-300,450,680,0);ctx.clip();const sc=t>=TT.miras?(t-TT.miras)*70:0;
   items.forEach((it,i)=>{const yy=-260+i*86-(sc%(86*5));if(t<TT.miras+i*0.15)return;txt(it[0],-190,yy,28,{weight:700,color:INK,align:'left'});txt('-'+it[1],190,yy,28,{weight:800,color:RED,align:'right'});ctx.fillStyle='#EEE';ctx.fillRect(-190,yy+40,380,2);});ctx.restore();ctx.restore();
   if(t>=TT.ningun)wstamp('NINGÚN GASTO GRANDE',x,y-500,t,TT.ningun,BLUE,46,0.04);
   if(t>=TT.donde){const a=A_slam(t,TT.donde,0.25);withPop(x+360,y-120,a,()=>{txt('?',x+360,y-120+Math.sin(t*5)*10,320,{weight:900,color:ORG,stroke:INK,sw:14});});magnifier(x+250,y+150,80+Math.sin(t*4)*6,INK);}}
  // C · giro
  {const [x,y]=PC;if(t>=TT.casi-0.5){stick(x-300,y+120,1.1,INK,{lx:-80,ly:-130,rx:80,ry:-130,mouth:'o'});const lift=Math.sin(t*5)*20;ctx.fillStyle=INK;ctx.fillRect(x-420,y-40+lift,240,14);ctx.fillRect(x-440,y-80+lift,34,94);ctx.fillRect(x-214,y-80+lift,34,94);
    wtxt('FUERZA DE VOLUNTAD',x-300,y+400,38,t,TT.fuerza,GREY);}
   if(t>=TT.pero){ctx.save();ctx.translate(x+250,y-60);ctx.fillStyle=ORG;rr(-110,-90,220,200,20);ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=8;ctx.beginPath();ctx.arc(0,-90,55,Math.PI,0);ctx.stroke();ctx.restore();
     wtxt('LO QUE COMPRAS',x+250,y+110,38,t,TT.pero+0.4,INK);
     if(t>=TT.compras){const q=E.out(prog(t,TT.compras,0.3));ctx.strokeStyle=RED;ctx.lineWidth=18;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(x+110,y-200);ctx.lineTo(x+110+280*q,y-200+300*q);ctx.stroke();}}
   if(t>=TT.como){const a=A_slam(t,TT.como,0.25);withPop(x,y+200,a,()=>{ccard(x,y+200,-0.12+Math.sin(t*3)*0.05,1.7);});wstamp('CÓMO LO PAGAS',x,y+430,t,TT.pagas-0.2,RED,72);}}
  // D · lo midieron + envíaselo
  {const [x,y]=PD;if(t>=TT.midieron){ctx.save();ctx.translate(x,y-250);ctx.rotate(-0.05);ctx.fillStyle=YEL;ctx.strokeStyle=INK;ctx.lineWidth=6;rr(-420,-45,840,90,10);ctx.fill();ctx.stroke();for(let i=0;i<=20;i++){ctx.beginPath();ctx.moveTo(-400+i*40,-45);ctx.lineTo(-400+i*40,i%5?-15:5);ctx.stroke();}ctx.restore();
     wtxt('LO MIDIERON',x,y-120,64,t,TT.midieron,INK);wtxt('con dinero de verdad',x,y-50,36,t,TT.midieron+0.6,GREY);}
   if(t>=TT.env-0.2){stick(x-260,y+230,1.0,INK,{rx:100,ry:-60,mouth:'smile'});stick(x+260,y+230,1.0,INK,{lx:-100,ly:-60,mouth:'o'});
     const k=E.inOut(prog(t,TT.env+0.2,1.1));ctx.save();ctx.translate(x-150+k*300,y+60-Math.sin(k*Math.PI)*140);ctx.rotate(k*6.28);ctx.fillStyle=INK;rr(-45,-80,90,160,16);ctx.fill();ctx.fillStyle=CRM;rr(-35,-65,70,120,8);ctx.fill();ctx.restore();
     wstamp('ENVÍASELO',x,y+350,t,TT.env,BLUE,56,0.04);}}
  // E · revelación
  {const [x,y]=Ee;if(t>=TT.mit-0.4){gavel(x+340,y-440,0.7,t,TT.sub+0.1);ticket(x-280,y-440,-0.1,0.7);txt('MIT · 2001',x,y-560,30,{font:'MO',weight:700,color:GREY});
     bars(t,TT.sub+0.6,TT.tarj,{y:y+300,h:480,dark:true,hl:BLUE,x1:x-180,x2:x+180});ctx.save();ctx.translate(0,0);ctx.restore();
     wstamp('MÁS DEL DOBLE',x+60,y-330,t,TT.mas,RED,64,-0.05);srcChip(x,y+560,'Prelec y Simester · MIT · 2001',t,TT.mit+0.5,DUR+5);}}
  // F · por qué (dentro de la cabeza)
  {const [x,y]=PF;head(x+20,y+40,1.7,INK,'#fff');const cash=t<TT.tarj2;
   alarm(x,y-60,0.55,t,{ring:t>=TT.bill&&cash?1:0,col:cash?YEL:'#D9D4C7',muted:cash?0:prog(t,TT.tarj2+0.3,0.4)});
   if(t>=TT.bill&&cash)for(let i=0;i<5;i++){const k=((t-TT.bill)*0.8+i*0.2)%1;bill(x-160+i*80,y+120-k*200,k*3+i,0.35);}
   if(t>=TT.duele&&cash)wtxt('LE DUELE',x,y+90,46,t,TT.duele,RED);
   if(!cash){ccard(x+120,y+80,0.2,0.45);wtxt('shhh',x-110,y+70,40,t,TT.tarj2+0.4,GREY);}}
  // G · reenganche + truco
  {const [x,y]=PG;if(t>=TT.por-0.5){alarm(x,y-280,0.8,t,{ring:t>=TT.encender?1:0,col:t>=TT.encender?YEL:'#D9D4C7'});if(t<TT.billetes-0.6)wtxt('LA VUELVE A ENCENDER',x,y-30,44,t,TT.encender,ORG);
     if(t>=TT.antes){posT(x-220,y+230,0.8,'61,00',t);ccard(x-60,y+170+Math.sin(t*3)*10,-0.3,0.65);}
     if(t>=TT.lo){ctx.save();ctx.strokeStyle=INK;ctx.lineWidth=8;ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(x+230,y+180,170,120,0,0,7);ctx.fill();ctx.stroke();ctx.restore();bill(x+230,y+180,-0.1+Math.sin(t*4)*0.05,0.75);}
     if(t>=TT.billetes-0.6)wstamp('¿LO PAGARÍA EN BILLETES?',x,y-40,t,TT.billetes-0.6,'#2E7D32',46,0.03);}}
  // H · comentarios
  {const [x,y]=Hh;if(t>=TT.ytu-0.3){txt('¿Y TÚ?',x,y-330,110,{weight:900,color:INK});
     const pe=0.5+0.12*Math.sin(t*2.3),pt=1-pe;[[ 'EFECTIVO','#2E7D32',-120,pe],['TARJETA',BLUE,80,pt]].forEach(([s,c,dy,p],i)=>{const a=A_pop(t,TT.ytu+0.3+i*0.3,0.3);if(!a)return;withPop(x,y+dy,a,()=>{ctx.fillStyle='#fff';ctx.strokeStyle=INK;ctx.lineWidth=6;rr(x-380,y+dy-70,760,140,70);ctx.fill();ctx.stroke();ctx.fillStyle=c;ctx.globalAlpha*=0.25;rr(x-380,y+dy-70,760*p,140,70);ctx.fill();ctx.globalAlpha/=0.25;txt(s,x-330,y+dy+4,50,{weight:900,color:c,align:'left'});});});
     if(t>=TT.coment-0.2){const a=A_pop(t,TT.coment-0.2,0.3);withPop(x,y+320,a,()=>{ctx.fillStyle=INK;rr(x-300,y+250,600,130,30);ctx.fill();ctx.beginPath();ctx.moveTo(x-200,y+375);ctx.lineTo(x-230,y+430);ctx.lineTo(x-150,y+375);ctx.fill();txt('TE LEO EN COMENTARIOS',x,y+316,38,{weight:900,color:YEL});});}}}
}
