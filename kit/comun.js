const INK='#141416',GREY='#8C8A84',RED='#E5484D',GRN='#1FA463',ORG='#E8603C',YEL='#FFD166',CREAM='#F6F1E7',BLUE='#3B82F6',PINK='#F4A6B8';
function envAt(t){const i=Math.floor(t*30);return ENV[Math.max(0,Math.min(ENV.length-1,i))]||0;}
function shadowTxt(s,x,y,size,o={}){ctx.save();ctx.shadowColor='rgba(0,0,0,.65)';ctx.shadowBlur=24;ctx.shadowOffsetY=4;txt(s,x,y,size,{font:'IN',weight:900,color:o.color||'#fff',scale:o.scale,alpha:o.alpha,maxW:o.maxW||980,align:o.align});ctx.restore();}
function HD(s,y,size,t,t0,tOut,o={}){const a=(o.slam?A_slam:A_pop)(t,t0,o.d||0.32);if(!a)return;const f=1-prog(t,tOut,0.22);if(f<=0)return;shadowTxt(s,o.x??W/2,y-(1-f)*24,size,{color:o.color,scale:a.scale,alpha:a.alpha*f,maxW:o.maxW});}
function wcard(x,y,w,h,r=30,fill='#fff',stroke=null,lw=3){card(x,y,w,h,r,fill,true,stroke,lw);}
function pill(x,y,text,bg,fg,size=24){const w=tw(text,size,'MO',700)+40;ctx.fillStyle=bg;rr(x-w/2,y-size*0.95,w,size*1.9,size*0.95);ctx.fill();txt(text,x,y+1,size,{font:'MO',weight:700,color:fg});return w;}
function stampB(x,y,text,t,t0,size=70,rot=-0.1,col=RED){const s=A_slam(t,t0,0.22);if(!s)return;withPop(x,y,s,()=>{ctx.save();ctx.translate(x,y);ctx.rotate(rot);const w=tw(text,size,'IN',900)+60;ctx.fillStyle='rgba(255,255,255,.97)';rr(-w/2,-size*0.8,w,size*1.6,16);ctx.fill();ctx.strokeStyle=col;ctx.lineWidth=9;rr(-w/2,-size*0.8,w,size*1.6,16);ctx.stroke();txt(text,0,4,size,{font:'IN',weight:900,color:col});ctx.restore();});}
function srcChip(x,y,text,t,t0,t1){const a=A_pop(t,t0,0.3);if(!a)return;const f=1-prog(t,t1,0.2);if(f<=0)return;withPop(x,y,{scale:a.scale,alpha:a.alpha*f},()=>{ctx.save();ctx.font='700 20px MO';const w=ctx.measureText(text).width+64;ctx.fillStyle='rgba(20,20,22,.88)';rr(x-w/2,y-22,w,44,22);ctx.fill();ctx.fillStyle=YEL;ctx.beginPath();ctx.arc(x-w/2+24,y,8,0,7);ctx.fill();txt(text,x+12,y+1,20,{font:'MO',weight:700,color:'#fff'});ctx.restore();});}
function fadeIO(t,a,b){return prog(t,a,0.3)*(1-prog(t,b-0.3,0.3));}
function iconCard(x,y,label,col,t,t0,draw){const a=A_pop(t,t0,0.35);if(!a)return;withPop(x,y,a,()=>{wcard(x-170,y-150,340,300,34);draw(x,y-30);txt(label,x,y+100,40,{weight:900,color:col});});}
function syl(w){const g=w.toLowerCase().match(/[aeiouáéíóúü0-9]+/g);return Math.max(1,g?g.length:1);}
CAPS.forEach(c=>{const ws=c.s.split(' '),wt=ws.map(syl),tot=wt.reduce((a,b)=>a+b,0),t1=Math.max(c.t0+0.25,c.t1-0.2);let acc=0;c.w=ws.map((w,i)=>{const o={w,t:c.t0+0.02+(t1-c.t0)*acc/tot};acc+=wt[i];return o;});});
function hud(t){shadowTxt('@martinsenmarketing',60,232,22,{align:'left'});
  const a=A_pop(t,TR[0][0],0.3);if(!a)return;withPop(800,232,a,()=>{ctx.fillStyle='rgba(255,255,255,.92)';rr(630,196,350,72,36);ctx.fill();txt('CLAVES',665,232,20,{font:'MO',weight:700,align:'left',color:GREY});
    TR.forEach(([t0,t1],i)=>{const cx=815+i*58,done=t>=t1,on=t>=t0&&!done;const s=on?1+0.12*Math.sin(t*7):1;ctx.save();ctx.translate(cx,232);ctx.scale(s,s);ctx.fillStyle=done?GRN:on?ORG:'#E3DFD6';ctx.beginPath();ctx.arc(0,0,20,0,7);ctx.fill();
      if(done){ctx.strokeStyle='#fff';ctx.lineWidth=5;ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();ctx.moveTo(-8,1);ctx.lineTo(-2,7);ctx.lineTo(9,-6);ctx.stroke();}else txt(String(i+1),0,2,22,{weight:900,color:on?'#fff':GREY});ctx.restore();});});}
function presenter(t){const env=envAt(t),env2=envAt(t-0.033);const m=Math.min(1,(env*0.7+env2*0.3)*1.15);
  let surp=0;SURP.forEach(([t0,k])=>{const d=t-t0;if(d>=0&&d<1.1)surp=Math.max(surp,k*Math.exp(-d*2.2));});
  const bl=((t%3.7)>3.55)?1:0;const look=Math.sin(t*0.7)*0.3+0.45;const bob=Math.sin(t*2.2)*4+env*6;const x=170,y=1210+bob,sc=0.62;
  ctx.save();ctx.beginPath();ctx.rect(0,0,W,1418);ctx.clip();const g=ctx.createRadialGradient(x,1330,10,x,1330,230);g.addColorStop(0,'rgba(0,0,0,.45)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(x-240,1080,480,340);
  drawAvatar2(ctx,x,y,sc,{mouth:m*0.75+surp*0.2,brow:surp,blink:bl,lookX:look,tilt:Math.sin(t*1.3)*0.025});ctx.restore();}
function subsB(t){const c=CAPS.find(x=>t>=x.t0&&t<x.t1);if(!c)return;const q=prog(t,c.t0,0.1),sc=0.92+0.08*E.out(q);
  ctx.save();ctx.font='800 56px MS';const sp=ctx.measureText(' ').width,ws=c.w.map(o=>ctx.measureText(o.w).width),tot=ws.reduce((a,b)=>a+b,0)+sp*(c.w.length-1),k=Math.min(1,820/tot);
  ctx.translate(W/2+60,1470);ctx.scale(sc*k,sc*k);ctx.globalAlpha=q;ctx.shadowColor='rgba(0,0,0,.3)';ctx.shadowBlur=20;ctx.fillStyle='#FFFFFF';rr(-tot/2-30,-48,tot+60,96,48);ctx.fill();ctx.shadowColor='transparent';
  ctx.textAlign='left';ctx.textBaseline='middle';let cur=0;c.w.forEach((o,i)=>{if(t>=o.t)cur=i;});let x=-tot/2;c.w.forEach((o,i)=>{ctx.fillStyle=i===cur?ORG:INK;ctx.fillText(o.w,x,3);x+=ws[i]+sp;});ctx.restore();}

