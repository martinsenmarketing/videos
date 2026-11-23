/* ===== Pilotos tarjeta: helpers + render común ===== */
const XR='#0A1A38',XL='#5EC8FF',CRM='#FFF6EA',GRN2='#2FB56A';
const PHOTO=new Image();PHOTO.src='file:///home/claude/foto_caja.jpg';
const seg=(t,a,b,d=0.14)=>t>=a-d&&t<b+d?Math.min(prog(t,a-d,d),1-prog(t,b,d)):0;
function inSeg(t,a,b,fn){const f=seg(t,a,b);if(f<=0)return;ctx.save();ctx.globalAlpha*=f;fn(t-a);ctx.restore();}
function popAt(t,t0,x,y,fn,slam){const a=(slam?A_slam:A_pop)(t,t0,0.3);if(!a)return;withPop(x,y,a,fn);}
function bgPhoto(t){const z=1.06+0.04*Math.sin(t*0.15);ctx.save();ctx.translate(540,960);ctx.scale(z,z);ctx.translate(-540,-960);if(PHOTO.complete&&PHOTO.naturalWidth)ctx.drawImage(PHOTO,0,0,W,H);ctx.restore();
  const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'rgba(8,8,12,.75)');g.addColorStop(0.35,'rgba(8,8,12,.25)');g.addColorStop(0.75,'rgba(8,8,12,.35)');g.addColorStop(1,'rgba(8,8,12,.85)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);}
function bgCream(t){ctx.fillStyle=CRM;ctx.fillRect(0,0,W,H);ctx.strokeStyle='rgba(20,20,22,.05)';ctx.lineWidth=2;for(let y=40;y<H;y+=64){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}}
function xray(t,f=1){ctx.save();ctx.globalAlpha*=f;ctx.fillStyle=XR;ctx.fillRect(0,0,W,H);ctx.strokeStyle='rgba(94,200,255,.10)';ctx.lineWidth=2;for(let x=0;x<W;x+=80){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}for(let y=0;y<H;y+=80){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
  const sy=(t*420)%H;const g=ctx.createLinearGradient(0,sy-120,0,sy);g.addColorStop(0,'rgba(94,200,255,0)');g.addColorStop(1,'rgba(94,200,255,.18)');ctx.fillStyle=g;ctx.fillRect(0,sy-120,W,120);
  ctx.restore();}
function chipC(s,x,y,bg,fg,size=28){ctx.save();ctx.font=`700 ${size}px MO`;const w=ctx.measureText(s).width+48;ctx.fillStyle=bg;rr(x-w/2,y-size*0.95,w,size*1.9,size*0.95);ctx.fill();ctx.fillStyle=fg;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(s,x,y+2);ctx.restore();}
function seriesMark(t){chipC('TE LA COLARON · Nº 1',W/2,150,INK,YEL,30);txt('@martinsenmarketing',W/2,222,22,{weight:700,color:'rgba(255,255,255,.75)'});}
function ccard(x,y,rot,s=1,col=BLUE){ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(s,s);ctx.shadowColor='rgba(0,0,0,.35)';ctx.shadowBlur=30;ctx.shadowOffsetY=14;ctx.fillStyle=col;rr(-120,-76,240,152,18);ctx.fill();ctx.shadowColor='transparent';
  ctx.fillStyle=YEL;rr(-88,-34,50,38,7);ctx.fill();ctx.fillStyle='rgba(255,255,255,.85)';ctx.font='700 24px MO';ctx.textAlign='left';ctx.fillText('**** 4417',-88,48);ctx.restore();}
function bill(x,y,rot,s=1){ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(s,s);ctx.shadowColor='rgba(0,0,0,.3)';ctx.shadowBlur=20;ctx.shadowOffsetY=10;ctx.fillStyle='#86CF86';rr(-130,-64,260,128,10);ctx.fill();ctx.shadowColor='transparent';ctx.strokeStyle='#2E7D32';ctx.lineWidth=6;rr(-112,-48,224,96,8);ctx.stroke();ctx.fillStyle='#1B5E20';ctx.font='900 64px IN';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('50',0,4);ctx.restore();}
function posT(x,y,s,amount,t){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.shadowColor='rgba(0,0,0,.4)';ctx.shadowBlur=30;ctx.shadowOffsetY=16;ctx.fillStyle='#202024';rr(-130,-180,260,360,32);ctx.fill();ctx.shadowColor='transparent';ctx.fillStyle='#A7E8B0';rr(-98,-150,196,116,12);ctx.fill();
  ctx.fillStyle=INK;ctx.font='900 46px IN';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(amount,0,-92);ctx.fillStyle='#4A4A52';for(let r=0;r<3;r++)for(let c=0;c<3;c++){rr(-86+c*62,8+r*50,50,38,8);ctx.fill();}
  if(t!==undefined){const k=(t*1.6)%1;ctx.strokeStyle=`rgba(94,200,255,${1-k})`;ctx.lineWidth=6;[0,1].forEach(i=>{ctx.beginPath();ctx.arc(0,-210,30+k*50+i*25,-2.4,-0.7);ctx.stroke();});}ctx.restore();}
function stick(x,y,s,col,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.strokeStyle=col;ctx.lineWidth=11;ctx.lineCap='round';ctx.lineJoin='round';ctx.fillStyle=col;
  ctx.beginPath();ctx.arc(0,-150,52,0,7);ctx.stroke();ctx.beginPath();ctx.moveTo(0,-98);ctx.lineTo(0,60);ctx.moveTo(0,60);ctx.lineTo(-46,185);ctx.moveTo(0,60);ctx.lineTo(46,185);
  ctx.moveTo(0,-55);ctx.lineTo(o.lx??-75,o.ly??15);ctx.moveTo(0,-55);ctx.lineTo(o.rx??85,o.ry??-35);ctx.stroke();
  ctx.beginPath();ctx.arc(-17,-158,6.5,0,7);ctx.arc(17,-158,6.5,0,7);ctx.fill();
  if(o.mouth==='o'){ctx.beginPath();ctx.arc(0,-128,9,0,7);ctx.stroke();}else if(o.mouth==='smile'){ctx.beginPath();ctx.arc(0,-140,18,0.3,Math.PI-0.3);ctx.stroke();}else{ctx.beginPath();ctx.moveTo(-14,-128);ctx.lineTo(14,-128);ctx.stroke();}ctx.restore();}
function alarm(x,y,s,t,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s,s);const ring=o.ring||0;const sh=ring?Math.sin(t*40)*0.12*ring:0;ctx.rotate(sh);
  ctx.strokeStyle=INK;ctx.lineWidth=10;ctx.lineJoin='round';ctx.fillStyle=o.col||YEL;ctx.beginPath();ctx.moveTo(-80,50);ctx.quadraticCurveTo(-80,-95,0,-95);ctx.quadraticCurveTo(80,-95,80,50);ctx.lineTo(100,72);ctx.lineTo(-100,72);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.fillStyle=INK;ctx.beginPath();ctx.arc(0,92,20,0,7);ctx.fill();ctx.rotate(-sh);
  if(ring>0){ctx.strokeStyle=o.wcol||RED;ctx.lineWidth=10;ctx.lineCap='round';const k=(t*2.5)%1;for(let i=0;i<Math.round(1+ring*2);i++){const r=120+i*45+k*30;ctx.globalAlpha=(1-k*0.6)*Math.min(1,ring*1.4);[-1,1].forEach(sd=>{ctx.beginPath();ctx.arc(0,0,r,sd>0?-0.6:Math.PI-0.6+0,sd>0?0.6:Math.PI+0.6);ctx.stroke();});}ctx.globalAlpha=1;}
  if(o.muted){ctx.strokeStyle=RED;ctx.lineWidth=16;ctx.lineCap='round';const q=E.out(cl(o.muted));ctx.beginPath();ctx.moveTo(-120,-120);ctx.lineTo(-120+240*q,-120+240*q);ctx.stroke();}ctx.restore();}
function head(x,y,s,col,fill){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.strokeStyle=col;ctx.lineWidth=10;ctx.fillStyle=fill||'transparent';ctx.beginPath();ctx.moveTo(-170,180);ctx.lineTo(-170,90);ctx.bezierCurveTo(-260,40,-230,-230,10,-240);ctx.bezierCurveTo(210,-240,250,-60,200,40);ctx.lineTo(230,100);ctx.lineTo(190,110);ctx.lineTo(195,180);ctx.stroke();if(fill)ctx.fill();ctx.restore();}
function meter(x,y,w,lvl,col,label,lab2){ctx.save();txt(label,x,y-60,30,{font:'MO',weight:700,color:XL});ctx.fillStyle='rgba(94,200,255,.15)';rr(x-w/2,y-26,w,52,26);ctx.fill();ctx.strokeStyle=XL;ctx.lineWidth=3;rr(x-w/2,y-26,w,52,26);ctx.stroke();
  ctx.fillStyle=col;rr(x-w/2+6,y-20,Math.max(40,(w-12)*lvl),40,20);ctx.fill();if(lab2)txt(lab2,x,y+70,40,{weight:900,color:col});ctx.restore();}
function bars(t,tA,tB,o={}){const base=o.y||1180,x1=o.x1||330,x2=o.x2||750,hmax=o.h||560,dk=o.dark;const lab=dk?INK:'#fff';
  const ga=E.out(prog(t,tA,0.6)),gb=E.out(prog(t,tB,0.9));
  if(t>=tA){const h=hmax*29/61*ga;ctx.fillStyle='#86CF86';rr(x1-110,base-h,220,h,18);ctx.fill();txt(Math.round(29*ga)+' $',x1,base-h-50,70,{weight:900,color:lab});txt('EFECTIVO',x1,base+45,32,{font:'MO',weight:700,color:lab});}
  if(t>=tB){const h=hmax*gb;ctx.fillStyle=BLUE;rr(x2-110,base-h,220,h,18);ctx.fill();txt(Math.round(61*gb)+' $',x2,base-h-50,70,{weight:900,color:o.hl||YEL});txt('TARJETA',x2,base+45,32,{font:'MO',weight:700,color:lab});}
  ctx.strokeStyle=lab;ctx.globalAlpha*=0.6;ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(150,base);ctx.lineTo(930,base);ctx.stroke();ctx.globalAlpha/=0.6;}
function gavel(x,y,s,t,t0){const a=t>=t0?Math.max(0,Math.sin(Math.min(1,(t-t0)/0.25)*Math.PI))*0.6:0;ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle='#8B5A2B';rr(-140,90,280,40,10);ctx.fill();ctx.rotate(-0.5+a);ctx.fillStyle='#A0522D';rr(-15,-20,30,200,10);ctx.fill();ctx.fillStyle='#6B3E1E';rr(-90,-80,180,80,18);ctx.fill();ctx.restore();}
function ticket(x,y,rot,s=1){ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(s,s);ctx.fillStyle='#fff';rr(-170,-80,340,160,16);ctx.fill();ctx.fillStyle=ORG;rr(-170,-80,90,160,16);ctx.fill();ctx.fillRect(-100,-80,20,160);
  ctx.setLineDash([10,8]);ctx.strokeStyle='#ccc';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(-80,-70);ctx.lineTo(-80,70);ctx.stroke();ctx.setLineDash([]);txt('ENTRADA',45,-22,38,{weight:900,color:INK});txt('PARTIDO',45,28,26,{font:'MO',weight:700,color:GREY});ctx.restore();}
function sello(t,t0,x=560,y=900){popAt(t,t0,x,y,()=>{ctx.save();ctx.translate(x,y);ctx.rotate(-0.14);ctx.strokeStyle=RED;ctx.lineWidth=16;rr(-330,-120,660,240,26);ctx.stroke();ctx.lineWidth=5;rr(-305,-95,610,190,18);ctx.stroke();
  txt('COLADA',0,-8,130,{weight:900,color:RED});txt('TE LA COLARON · Nº 1',0,70,26,{font:'MO',weight:700,color:RED});ctx.restore();},true);}
function bigText(lines,y,size,t,t0,o={}){let yy=y,prev=0;lines.forEach((l,i)=>{const s=typeof l==='string'?{s:l}:l;const sz=s.size||size;if(i>0)yy+=(prev+sz)*0.56;prev=sz;const ly=yy;const tt=t0+(o.stag??0.12)*i;const a=A_pop(t,tt,0.28);if(!a)return;
  txt(s.s,W/2,ly,s.size||size,{weight:900,color:s.c||o.color||'#fff',scale:a.scale,alpha:a.alpha,maxW:960,stroke:o.stroke,sw:size*0.13,shadow:o.shadow===false?null:'rgba(0,0,0,.45)',blur:20,dy:6});});}
/* ===== render ===== */
const CAMK=typeof CAMK2!=='undefined'?CAMK2:[[0,540,960,1.0],[DUR,540,960,1.0]];
function render(t){ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=1;
  if(STYLE==='cream')bgCream(t);else if(STYLE==='world'){ctx.fillStyle=CRM;ctx.fillRect(0,0,W,H);}else bgPhoto(t);
  const c=cam(t),[sx,sy]=camShake(t),z=c.z*(1+camPunch(t))*kick(t);
  ctx.save();ctx.translate(W/2+sx,H/2+sy);ctx.scale(z,z);if(typeof camRot==='function')ctx.rotate(camRot(t));ctx.translate(-c.x,-c.y);stage(t);ctx.restore();
  const dk=darkK(t);if(dk>0.01){ctx.fillStyle=`rgba(20,4,6,${dk*0.9})`;ctx.fillRect(0,0,W,H);}
  loopTitles(t);if(STYLE==='photo')seriesMark(t);else creamMark(t);sendTag(t);if(AVATAR)presenter(t);subsB(t);
  const f=Math.min(0.3,flash(t));if(f>0.01){ctx.fillStyle=`rgba(255,255,255,${f})`;ctx.fillRect(0,0,W,H);}}
(function(){S.slice(1,-1).forEach(s=>{FLASH.push([s,0.10]);PUNCH.push([s+0.05,0.035]);});PUNCH.push([0,0.05]);
  SURP.forEach(([t])=>{PUNCH.push([t,0.08]);SHAKE.push([t,10]);});})();
window.render=render;
Promise.all([document.fonts.ready.then(()=>Promise.all(['900 50px IN','800 50px IN','700 50px IN','600 50px IN','700 50px MO','800 50px MS'].map(f=>document.fonts.load(f)))),new Promise(r=>{if(PHOTO.complete)r();else{PHOTO.onload=r;PHOTO.onerror=r;}})]).then(()=>{render(0);window.READY=true;});
</script></body></html>
