const CAMK=[[0,540,960,1.0],[DUR,540,960,1.0]];
window.OPTS={subs:true};
function render(t){
  ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=1;const dk=darkK(t);
  ctx.fillStyle='#0E0E12';ctx.fillRect(0,0,W,H);
  ctx.strokeStyle='rgba(255,209,102,.05)';ctx.lineWidth=2;for(let x=0;x<W;x+=90){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}for(let y=0;y<H;y+=90){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
  let g=ctx.createRadialGradient(540,860,100,540,860,1100);g.addColorStop(0,'rgba(232,96,60,.16)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.save();ctx.translate(540,300);ctx.rotate(-0.025);ctx.fillStyle=YEL;ctx.fillRect(-700,-26,1400,52);ctx.fillStyle=INK;ctx.font='700 22px MO';ctx.textAlign='left';ctx.textBaseline='middle';const lw=ctx.measureText(RIB).width;let off=-((t*60)%lw);for(let x=-700+off;x<700;x+=lw)ctx.fillText(RIB,x,2);ctx.restore();
  const c=cam(t),[sx,sy]=camShake(t),z=c.z*(1+camPunch(t))*kick(t);
  ctx.save();ctx.translate(W/2+sx,H/2+sy);ctx.scale(z,z);ctx.translate(-c.x,-c.y);stage(t);ctx.restore();
  if(dk>0.01){ctx.fillStyle=`rgba(40,6,8,${dk*0.88})`;ctx.fillRect(0,0,W,H);}
  loopTitles(t);hud(t);sendTag(t);presenter(t);if(window.OPTS.subs)subsB(t);
  const f=Math.min(0.35,flash(t));if(f>0.01){ctx.fillStyle=`rgba(255,255,255,${f})`;ctx.fillRect(0,0,W,H);}
}
(function(){S.slice(1,-1).forEach(s=>{FLASH.push([s,0.12]);PUNCH.push([s+0.1,0.04]);});PUNCH.push([0,0.05]);
  SURP.forEach(([t])=>{PUNCH.push([t,0.08]);SHAKE.push([t,11]);});(window.EXTRA_P||[]).forEach(t=>PUNCH.push([t,0.05]));})();
window.render=render;
document.fonts.ready.then(()=>Promise.all(['900 50px IN','800 50px IN','700 50px IN','600 50px IN','700 50px MO','400 50px AN','800 50px MS'].map(f=>document.fonts.load(f)))).then(()=>{render(0);window.READY=true;});
</script></body></html>
