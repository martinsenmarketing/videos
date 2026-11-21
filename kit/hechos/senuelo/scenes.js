/* ===== Efecto señuelo: la opción que nadie elige ===== */
const ENV=__ENV__;
const WORDS=__WORDS__;
const nrm=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-zñ0-9]/g,'');
function WT(w,after=0,end=false){const k=nrm(w);const o=WORDS.find(x=>x.t0>=after-0.01&&nrm(x.w).startsWith(k));if(!o){return null;}return end?o.t1:o.t0;}
const DUR=__DUR__;
const B={};B.no=WT('no',2);B.prof=WT('un',B.no+1);B.te=B.prof;B.nad=WT('nadie',WT('papel',WT('papel',B.prof)+0.5)+0.5);
B.manda=WT('envia',B.nad)??WT('manda',B.nad);B.quito=WT('el',WT('ahora',B.manda));B.y68=WT('y',B.quito+1.2);B.una=WT('una',B.y68+1);
B.sen=WT('se',WT('mitad',B.una));B.truco=WT('truco',B.sen);B.donde=WT('donde',B.truco);
const S=[0,B.no-0.15,B.te-0.15,B.prof-0.15,B.nad-0.15,B.manda-0.15,B.quito-0.15,B.y68-0.15,B.una-0.15,B.sen-0.15,B.truco-0.15,B.donde-0.15,DUR];
const TR=[[S[3],S[5]],[S[6],S[9]],[S[9],S[11]]];
const SURP=[[WT('pague',B.no),0.9],[WT('84',B.nad)??WT('ochenta',B.nad),0.9],[WT('68',B.y68)??WT('sesenta',B.y68),0.9],[WT('mitad',B.una),0.9],[WT('dedo',B.truco),0.8]];
function darkK(t){return prog(t,S[5],0.25)*(1-prog(t,S[6]-0.25,0.25));}
const OPT=[['SOLO WEB','59 $',BLUE],['SOLO PAPEL','125 $','#8C8A84'],['PAPEL + WEB','125 $',ORG]];
function optCard(i,x,y,t,o={}){const [n,p,c]=OPT[i];ctx.save();ctx.translate(x,y);ctx.globalAlpha*=o.dim??1;wcard(-140,-180,280,360,28);
  ctx.fillStyle=c;rr(-140,-180,280,80,28);ctx.fill();ctx.fillRect(-140,-130,280,30);txt(n,0,-138,28,{weight:900,color:'#fff',maxW:250});
  txt(p,0,-40,64,{weight:900,color:INK});
  if(o.pct!=null){const q=o.pq??1;const h=110*o.pct/100*q;ctx.fillStyle='#EEE9DE';rr(-100,40,200,110,14);ctx.fill();ctx.fillStyle=o.pct>50?RED:c;rr(-100,150-Math.max(6,h),200,Math.max(6,h),14);ctx.fill();
    txt(Math.round(o.pct*q)+'%',0,95,52,{weight:900,color:o.pct>50?'#fff':INK});}
  if(o.cross){const q=E.out(o.cross);ctx.strokeStyle=RED;ctx.lineWidth=14;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-120,-160);ctx.lineTo(-120+240*q,-160+320*q);ctx.moveTo(120,-160);ctx.lineTo(120-240*q,-160+320*q);ctx.stroke();}
  if(o.nadie){const a=A_slam(t,o.nadie,0.25);if(a)withPop(0,0,a,()=>{ctx.save();ctx.rotate(-0.15);ctx.fillStyle=INK;rr(-115,-36,230,72,14);ctx.fill();txt('NADIE',0,3,44,{weight:900,color:YEL});ctx.restore();});}
  ctx.restore();}
const CX=[215,540,865];
function scene1(t){if(t>S[1]+0.3)return;const f=1-prog(t,S[1],0.3);ctx.save();ctx.globalAlpha*=f;
  const k=1+0.03*Math.sin(t*6);shadowTxt('¿POR QUÉ HAY UNA OPCIÓN',540,470,66,{});shadowTxt('QUE NADIE ELIGE?',540,570,92*k,{color:YEL});
  const a=A_slam(t,-0.4,0.3);withPop(540,900,a,()=>{optCard(0,CX[0],900,t,{dim:0.8});optCard(1,CX[1],900,t,{nadie:-1});optCard(2,CX[2],900,t,{pct:84});});
  ctx.restore();}
function scene2(t){if(t<S[1]-0.2||t>S[2]+0.3)return;const f=fadeIO(t,S[1],S[2]+0.3);ctx.save();ctx.globalAlpha*=f;
  optCard(1,540,800,t,{nadie:-1});stampB(540,1130,'ESTÁ PARA QUE PAGUES MÁS',t,WT('pague',S[1])-0.2,54,-0.05,RED);ctx.restore();}
function scene3(t){return;if(t<S[2]-0.2||t>S[3]+0.3)return;const f=fadeIO(t,S[2],S[3]+0.3);ctx.save();ctx.globalAlpha*=f;
  const te=WT('experimento',S[2]),tf=WT('final',te);if(t>=te){const a=A_slam(t,te,0.25);withPop(540,760,a,()=>{ctx.fillStyle=YEL;rr(190,680,700,160,30);ctx.fill();txt('EXPERIMENTO REAL',540,760,56,{weight:900,color:INK});});}
  if(t>=tf){const b=A_pop(t,tf,0.3);withPop(540,1000,b,()=>pill(540,1000,'AL FINAL: CÓMO NO CAER',GRN,'#fff',34));}ctx.restore();}
function scene4(t){if(t<S[3]-0.2||t>S[4]+0.3)return;const f=fadeIO(t,S[3],S[4]+0.3);ctx.save();ctx.globalAlpha*=f;
  HD('100 ALUMNOS · UNA REVISTA',470,62,t,S[3]+0.1,S[4],{color:YEL});
  const tw0=WT('web',S[3]),tp=WT('papel',tw0),tpw=WT('papel',tp+0.5),tt=WT('tambien',tpw);
  [tw0,tp,tpw].forEach((ti,i)=>{const a=A_pop(t,ti??S[3]+1+i,0.35);if(a)withPop(CX[i],900,a,()=>optCard(i,CX[i],900,t));});
  if(t>=tt){const c=A_slam(t,tt,0.25);withPop(700,1180,c,()=>pill(700,1180,'¡MISMO PRECIO!',RED,'#fff',34));}ctx.restore();}
function scene5(t){if(t<S[4]-0.2||t>S[5]+0.3)return;const f=fadeIO(t,S[4],S[5]+0.3);ctx.save();ctx.globalAlpha*=f;
  HD('LO QUE ELIGIERON',470,78,t,S[4]+0.1,S[5],{color:'#fff'});const t84=WT('84',S[4])??WT('ochenta',S[4]);
  optCard(0,CX[0],900,t,{pct:16,pq:prog(t,t84,0.6)});optCard(1,CX[1],900,t,{pct:0,nadie:S[4]+0.1});optCard(2,CX[2],900,t,{pct:84,pq:prog(t,t84,0.6)});
  ctx.restore();}
function loopTitles(t){if(t<S[5]||t>S[6])return;const f=1-prog(t,S[6]-0.2,0.2);ctx.save();ctx.globalAlpha*=f;
  const tg=WT('grande',S[5]),tf=WT('fuerte',tg);const a=A_slam(t,S[5]+0.05,0.22);
  if(a)withPop(540,560,a,()=>{shadowTxt('ENVÍASELO A QUIEN',540,500,66,{});shadowTxt('SIEMPRE COGE EL GRANDE',540,600,74,{color:YEL});});
  if(t>=tg){const s=E.back(prog(t,tg,0.4));ctx.save();ctx.translate(540,920);ctx.scale(s,s);[[-170,150],[0,210],[190,280]].forEach(([x,h],i)=>{ctx.fillStyle=i===2?RED:'#fff';ctx.beginPath();ctx.moveTo(x-50-i*8,-h/2);ctx.lineTo(x+50+i*8,-h/2);ctx.lineTo(x+40,h/2);ctx.lineTo(x-40,h/2);ctx.closePath();ctx.fill();txt('SML'[i],x,0,52,{weight:900,color:i===2?'#fff':INK});});ctx.restore();}
  if(t>=tf){const b=A_slam(t,tf-0.3,0.22);withPop(540,1230,b,()=>{shadowTxt('LO FUERTE',540,1180,80,{});shadowTxt('VIENE AHORA',540,1275,80,{color:YEL});});}
  ctx.restore();}
function scene6(t){if(t<S[6]-0.2||t>S[7]+0.3)return;const f=fadeIO(t,S[6],S[7]+0.3);ctx.save();ctx.globalAlpha*=f;
  HD('QUITA LA QUE NADIE QUERÍA',470,64,t,S[6]+0.1,S[7],{color:YEL});const tq=WT('quito',S[6])??S[6]+0.5;
  optCard(0,CX[0],900,t);optCard(2,CX[2],900,t);const q=prog(t,tq+0.4,0.5);ctx.save();ctx.translate(0,-700*E.in(q));ctx.globalAlpha*=1-q;optCard(1,CX[1],900,t,{cross:prog(t,tq,0.35)});ctx.restore();
  ctx.restore();}
function scene7(t){if(t<S[7]-0.2||t>S[8]+0.3)return;const f=fadeIO(t,S[7],S[8]+0.3);ctx.save();ctx.globalAlpha*=f;
  HD('AHORA ELIGEN…',470,78,t,S[7]+0.1,S[8],{color:'#fff'});const t68=WT('68',S[7])??WT('sesenta',S[7]);
  optCard(0,330,900,t,{pct:68,pq:prog(t,t68,0.6)});optCard(2,750,900,t,{pct:32,pq:prog(t,t68,0.6)});
  const tb=WT('barata',S[7]);if(t>=tb){const c=A_slam(t,tb,0.25);withPop(330,1150,c,()=>pill(330,1150,'LA MÁS BARATA',GRN,'#fff',30));}ctx.restore();}
function scene8(t){if(t<S[8]-0.2||t>S[9]+0.3)return;const f=fadeIO(t,S[8],S[9]+0.3);ctx.save();ctx.globalAlpha*=f;
  const tm=WT('mitad',S[8]);const a=A_pop(t,S[8]+0.1,0.3);if(a)withPop(540,760,a,()=>{shadowTxt('UNA OPCIÓN QUE',540,700,70,{});shadowTxt('NADIE COMPRÓ',540,800,90,{color:YEL});});
  stampB(540,1060,'CAMBIÓ A MÁS DE LA MITAD',t,tm,52,-0.05,RED);ctx.restore();}
function icon(x,y,label,col,t,t0,draw){const a=A_pop(t,t0,0.35);if(!a)return;withPop(x,y,a,()=>{wcard(x-140,y-130,280,260,30);draw(x,y-30);txt(label,x,y+85,34,{weight:900,color:col});});}
function scene9(t){if(t<S[9]-0.2||t>S[10]+0.3)return;const f=fadeIO(t,S[9],S[10]+0.3);ctx.save();ctx.globalAlpha*=f;
  const ts=WT('efecto',S[9])??S[9]+0.4;const a=A_slam(t,ts,0.25);if(a)withPop(540,560,a,()=>{ctx.fillStyle=YEL;rr(170,490,740,140,30);ctx.fill();txt('EFECTO SEÑUELO',540,562,64,{weight:900,color:INK});});
  const tc=WT('cine',ts),tf=WT('cafe',tc),tm=WT('movil',tf);
  icon(CX[0],880,'CINE',RED,t,tc??ts+1,(x,y)=>{ctx.fillStyle=RED;ctx.beginPath();ctx.moveTo(x-50,y-40);ctx.lineTo(x+50,y-40);ctx.lineTo(x+38,y+50);ctx.lineTo(x-38,y+50);ctx.closePath();ctx.fill();ctx.fillStyle='#FFF4D6';for(let i=-2;i<=2;i++){ctx.beginPath();ctx.arc(x+i*20,y-48,18,0,7);ctx.fill();}});
  icon(CX[1],880,'CAFÉ','#7A4A2A',t,tf??ts+1.5,(x,y)=>{ctx.fillStyle='#7A4A2A';rr(x-45,y-40,90,95,14);ctx.fill();ctx.strokeStyle='#7A4A2A';ctx.lineWidth=10;ctx.beginPath();ctx.arc(x+50,y,22,-1.4,1.4);ctx.stroke();waves(x,y-50,t);});
  icon(CX[2],880,'MÓVIL',BLUE,t,tm??ts+2,(x,y)=>{ctx.fillStyle=BLUE;rr(x-38,y-65,76,130,14);ctx.fill();ctx.fillStyle='#fff';rr(x-28,y-52,56,100,6);ctx.fill();});
  ctx.restore();}
function waves(x,y,t){ctx.save();ctx.strokeStyle='#B89B80';ctx.lineWidth=6;ctx.lineCap='round';for(let i=0;i<2;i++){ctx.beginPath();const ox=x+(i-0.5)*30;for(let k=0;k<=12;k++){const yy=y-k*4,xx=ox+Math.sin(k*0.7-t*5+i)*7;k?ctx.lineTo(xx,yy):ctx.moveTo(xx,yy);}ctx.stroke();}ctx.restore();}
function finger(x,y,s){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle='#E8B48E';ctx.strokeStyle=INK;ctx.lineWidth=6;rr(-55,-150,110,330,55);ctx.fill();ctx.stroke();ctx.fillStyle='#F6D6C0';rr(-38,-135,76,90,30);ctx.fill();ctx.restore();}
function scene10(t){if(t<S[10]-0.2||t>S[11]+0.3)return;const f=fadeIO(t,S[10],S[11]+0.3);ctx.save();ctx.globalAlpha*=f;
  HD('TRUCO',470,90,t,S[10]+0.1,S[11],{color:GRN});const td=WT('dedo',S[10]),tv=WT('vuelve',td);
  optCard(0,CX[0],900,t);optCard(1,CX[1],900,t);optCard(2,CX[2],900,t);
  if(t>=td){const q=E.out(prog(t,td,0.4));finger(CX[1],900+500*(1-q),1.25);}
  if(t>=tv){const c=A_slam(t,tv,0.25);withPop(600,1180,c,()=>pill(600,1180,'Y VUELVE A DECIDIR',GRN,'#fff',34));}ctx.restore();}
function scene11(t){if(t<S[11]-0.2)return;const f=prog(t,S[11],0.3);ctx.save();ctx.globalAlpha*=f;
  const a=A_pop(t,S[11]+0.1,0.35);if(a)withPop(540,800,a,()=>{wcard(170,620,740,330,40);txt('¿DÓNDE LO',540,730,74,{weight:900,color:INK});txt('HAS VISTO TÚ?',540,830,74,{weight:900,color:ORG});});
  const tc=WT('comentarios',S[11]);if(t>=tc-0.2){const c=A_pop(t,tc-0.2,0.35);withPop(560,1110,c,()=>{ctx.save();ctx.translate(560,1110);ctx.rotate(-0.03);ctx.fillStyle=YEL;rr(-330,-70,660,140,22);ctx.fill();txt('CADA DÍA · 15:30',0,-28,22,{font:'MO',weight:700,color:INK});txt('OTRO TRUCO DE PRECIOS',0,22,42,{weight:900,color:INK});ctx.restore();});}
  ctx.restore();}
function sendTag(t){if(t<3.0||t>S[11])return;const a=A_pop(t,3.0,0.3);const f=1-prog(t,S[11]-0.3,0.3);withPop(540,392,{scale:a.scale,alpha:a.alpha*f*(1-0.85*darkK(t))},()=>pill(540,392,'ENVÍASELO A QUIEN SIEMPRE COGE EL GRANDE',RED,'#fff',22));}
function stage(t){scene1(t);scene2(t);scene3(t);scene4(t);scene5(t);scene6(t);scene7(t);scene8(t);scene9(t);scene10(t);scene11(t);}
const RIB='TRUCOS DE PRECIO QUE TE HACEN PAGAR MÁS  ·  ';
window.cover=function(){};
