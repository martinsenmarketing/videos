const INK='#141416',RED='#E5484D',YEL='#FFD166',BLUE='#2F6FE4',GRN='#1FA463',CREAM='#FFF8EC';
function big(s,x,y,size,col,o={}){ctx.save();ctx.font=`900 ${size}px IN`;ctx.textAlign='center';ctx.textBaseline='middle';const w=ctx.measureText(s).width;const k=Math.min(1,(o.maxW||980)/w);ctx.translate(x,y);ctx.scale(k,k);ctx.rotate(o.rot||0);
  if(o.stroke){ctx.lineJoin='round';ctx.lineWidth=size*0.14;ctx.strokeStyle=o.stroke;ctx.strokeText(s,0,0);}ctx.fillStyle=col;ctx.fillText(s,0,0);ctx.restore();}
function label(s,y,bg,fg){ctx.save();ctx.font='700 30px MO';const w=ctx.measureText(s).width+56;ctx.fillStyle=bg;rr(540-w/2,y-30,w,60,30);ctx.fill();ctx.fillStyle=fg;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(s,540,y+2);ctx.restore();}
function bgc(c){ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle=c;ctx.fillRect(0,0,W,H);ctx.fillStyle='rgba(0,0,0,.05)';for(let i=0;i<14;i++){ctx.beginPath();ctx.arc(1000-i*10,250+i*5,60+i*70,0,7);ctx.lineWidth=2;ctx.strokeStyle='rgba(0,0,0,.05)';ctx.stroke();}}
function face(x,y,s){ctx.save();ctx.beginPath();ctx.rect(0,0,W,1640);ctx.clip();drawAvatar2(ctx,x,y,s,{mouth:0.7,brow:0.55,blink:0,lookX:0.75,smile:0.4});ctx.restore();}
function milk(x,y,s){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.rotate(0.12);ctx.shadowColor='rgba(0,0,0,.25)';ctx.shadowBlur=40;ctx.shadowOffsetY=20;ctx.fillStyle='#fff';ctx.beginPath();ctx.moveTo(-90,-60);ctx.lineTo(-90,190);ctx.lineTo(90,190);ctx.lineTo(90,-60);ctx.lineTo(60,-140);ctx.lineTo(-60,-140);ctx.closePath();ctx.fill();ctx.shadowColor='transparent';
  ctx.strokeStyle=INK;ctx.lineWidth=10;ctx.lineJoin='round';ctx.stroke();ctx.fillStyle='#fff';ctx.fillRect(-60,-175,120,38);ctx.strokeRect(-60,-175,120,38);ctx.beginPath();ctx.moveTo(-90,-60);ctx.lineTo(90,-60);ctx.stroke();ctx.fillStyle='#4A86E8';ctx.fillRect(-84,20,168,90);ctx.fillStyle='#fff';ctx.font='900 46px IN';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('LECHE',0,66);ctx.restore();}
function covLeche(){bgc(YEL);label('TRUCOS DEL SÚPER',380,INK,YEL);big('¿LECHE',540,560,210,INK);big('AL FONDO?',540,760,190,INK);milk(700,1180,1.35);
  face(210,1330,0.8);}
function covBF(){bgc(RED);label('BLACK FRIDAY POR DENTRO · 2/4',380,'#fff',RED);big('CUENTA ATRÁS',540,560,150,'#fff');big('FALSA',540,760,250,YEL,{stroke:INK});
  ctx.save();ctx.translate(640,1160);ctx.rotate(-0.06);ctx.shadowColor='rgba(0,0,0,.3)';ctx.shadowBlur=40;ctx.shadowOffsetY=20;ctx.fillStyle='#fff';rr(-340,-140,680,280,40);ctx.fill();ctx.shadowColor='transparent';ctx.font='700 130px MO';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=INK;ctx.fillText('23:59:59',0,10);ctx.restore();
  ctx.save();ctx.translate(780,1360);ctx.rotate(0.08);ctx.fillStyle=INK;rr(-170,-48,340,96,20);ctx.fill();ctx.fillStyle=YEL;ctx.font='900 50px IN';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('↻ OTRA VEZ',0,4);ctx.restore();face(200,1340,0.8);}
function covMaps(){bgc(BLUE);label('PARA NEGOCIOS',380,'#fff',BLUE);big('¿NO SALES',540,560,190,'#fff');big('EN MAPS?',540,760,210,YEL,{stroke:INK});
  ctx.save();ctx.translate(680,1180);ctx.rotate(0.05);ctx.shadowColor='rgba(0,0,0,.3)';ctx.shadowBlur=40;ctx.shadowOffsetY=20;ctx.fillStyle='#E9F0E4';rr(-300,-230,600,460,40);ctx.fill();ctx.shadowColor='transparent';ctx.save();rr(-300,-230,600,460,40);ctx.clip();ctx.strokeStyle='#fff';ctx.lineWidth=34;[[-300,-60,300,10],[-90,-230,-40,230],[110,-230,170,230]].forEach(l=>{ctx.beginPath();ctx.moveTo(l[0],l[1]);ctx.lineTo(l[2],l[3]);ctx.stroke();});ctx.restore();
  pin(-20,-40,200,RED);ctx.globalAlpha=0.55;pin(190,140,90,'#8C8A84');ctx.restore();face(200,1340,0.8);}

function covBF3(){bgc(RED);label('BLACK FRIDAY POR DENTRO · 3/4',380,'#fff',RED);big('¿POR QUÉ',540,540,150,'#fff');big('«HASTA»?',540,740,240,YEL,{stroke:INK});
  ctx.save();ctx.translate(660,1170);ctx.rotate(-0.05);ctx.shadowColor='rgba(0,0,0,.3)';ctx.shadowBlur=40;ctx.shadowOffsetY=20;ctx.fillStyle='#fff';rr(-300,-230,600,460,40);ctx.fill();ctx.shadowColor='transparent';
  ctx.fillStyle='#111';rr(-260,-190,520,380,24);ctx.fill();ctx.textAlign='center';ctx.textBaseline='middle';ctx.font='900 50px IN';ctx.fillStyle='#fff';ctx.fillText('HASTA',0,-110);ctx.font='900 170px IN';ctx.fillStyle=RED;ctx.fillText('-56%',0,30);ctx.font='700 26px MO';ctx.fillStyle='#888';ctx.fillText('*en modelos seleccionados',0,140);ctx.restore();
  ctx.save();ctx.strokeStyle=YEL;ctx.lineWidth=26;ctx.lineCap='round';ctx.beginPath();ctx.arc(560,1060,120,0,7);ctx.stroke();ctx.beginPath();ctx.moveTo(645,1145);ctx.lineTo(740,1240);ctx.stroke();ctx.restore();face(200,1340,0.8);}
function covSenuelo(){bgc(YEL);label('TRUCOS DE PRECIO',380,INK,YEL);big('LA OPCIÓN',540,560,170,INK);big('TRAMPA',540,760,230,RED,{stroke:INK});
  const P=[['S','3 €',0],['M','6,50 €',1],['L','7 €',0]];P.forEach(([z,p,d],i)=>{const x=380+i*230,y=1170,h=200+i*70;ctx.save();ctx.translate(x,y);ctx.shadowColor='rgba(0,0,0,.25)';ctx.shadowBlur=30;ctx.shadowOffsetY=14;ctx.fillStyle='#fff';ctx.beginPath();ctx.moveTo(-70-i*8,-h/2);ctx.lineTo(70+i*8,-h/2);ctx.lineTo(55,h/2);ctx.lineTo(-55,h/2);ctx.closePath();ctx.fill();ctx.shadowColor='transparent';ctx.strokeStyle=INK;ctx.lineWidth=8;ctx.stroke();
    ctx.fillStyle=d?'#999':RED;ctx.font='900 70px IN';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(z,0,-10);ctx.restore();});
  ctx.save();ctx.translate(610,1010);ctx.rotate(-0.1);ctx.fillStyle=INK;rr(-140,-44,280,88,18);ctx.fill();ctx.fillStyle=YEL;ctx.font='900 46px IN';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('SEÑUELO',0,4);ctx.restore();face(200,1360,0.8);}
function covWeb(){bgc(BLUE);label('PARA NEGOCIOS',380,'#fff',BLUE);big('3 SEGUNDOS',540,560,170,'#fff');big('Y SE VAN',540,760,210,YEL,{stroke:INK});
  ctx.save();ctx.translate(690,1180);ctx.rotate(0.06);ctx.shadowColor='rgba(0,0,0,.3)';ctx.shadowBlur=40;ctx.shadowOffsetY=20;ctx.fillStyle='#1B1B22';rr(-180,-300,360,600,50);ctx.fill();ctx.shadowColor='transparent';ctx.fillStyle='#fff';rr(-158,-275,316,550,34);ctx.fill();
  ctx.strokeStyle='#E3DFD6';ctx.lineWidth=22;ctx.beginPath();ctx.arc(0,-20,80,0,7);ctx.stroke();ctx.strokeStyle=RED;ctx.lineCap='round';ctx.beginPath();ctx.arc(0,-20,80,-1.57,1.2);ctx.stroke();
  ctx.fillStyle=INK;ctx.font='700 34px MO';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('Cargando…',0,120);ctx.restore();face(200,1340,0.8);}
window.COV2={bf3:covBF3,senuelo:covSenuelo,web:covWeb};

document.fonts.ready.then(()=>Promise.all(['900 50px IN','700 50px MO'].map(f=>document.fonts.load(f)))).then(()=>{window.READY=true;});
window.COV={leche:covLeche,bf:covBF,maps:covMaps};
</script></body></html>
