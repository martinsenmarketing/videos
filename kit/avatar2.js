// Avatar v3 de Nahuel (estilo B, caricatura cuidada). drawAvatar2(g,cx,cy,s,o) — cy = centro de la cara
function drawAvatar2(g,cx,cy,s,o={}){
  const C={skin:'#E6B892',skinD:'#CF9A74',skinS:'#D9A783',hair:'#1B1410',hairM:'#2B211A',hairL:'#47372B',brow:'#1A120D',iris:'#3B2416',beard:'#221912',lip:'#B77561',lipD:'#9C5E4C',mouthIn:'#4A1C1C',tongue:'#D0646A',shirt:'#F6F4F0',shirtD:'#DEDAD2'};
  const mouth=o.mouth??0,brow=o.brow??0,blink=o.blink??0,lookX=o.lookX??0,lookY=o.lookY??0,tilt=o.tilt??0,smile=o.smile??0.6;
  const P=(f)=>{g.beginPath();f();};
  g.save();g.translate(cx,cy);g.rotate(tilt);g.scale(s,s);
  const E=(x,y,rx,ry,col,rot=0)=>{g.fillStyle=col;g.beginPath();g.ellipse(x,y,rx,ry,rot,0,7);g.fill();};
  // camiseta
  g.fillStyle=C.shirt;P(()=>{g.moveTo(-170,360);g.quadraticCurveTo(-168,210,-70,186);g.lineTo(70,186);g.quadraticCurveTo(168,210,170,360);g.closePath();});g.fill();
  g.fillStyle=C.shirtD;P(()=>{g.moveTo(-170,360);g.quadraticCurveTo(-166,222,-108,200);g.quadraticCurveTo(-136,270,-132,360);g.closePath();});g.fill();
  // cuello
  g.fillStyle=C.skinD;P(()=>{g.moveTo(-36,120);g.lineTo(36,120);g.lineTo(42,196);g.quadraticCurveTo(0,214,-42,196);g.closePath();});g.fill();
  g.fillStyle='rgba(150,95,65,.25)';P(()=>{g.moveTo(-36,130);g.quadraticCurveTo(0,160,36,130);g.lineTo(36,150);g.quadraticCurveTo(0,178,-36,150);g.closePath();});g.fill();
  g.strokeStyle=C.shirtD;g.lineWidth=8;P(()=>{g.moveTo(-50,190);g.quadraticCurveTo(0,220,50,190);});g.stroke();
  g.strokeStyle='#D2CFC7';g.lineWidth=2.5;P(()=>{g.moveTo(-32,182);g.quadraticCurveTo(0,206,32,182);});g.stroke();
  // orejas
  [[-1],[1]].forEach(([sd])=>{E(sd*104,14,18,30,C.skinD);E(sd*106,14,9,18,C.skinS);});
  // cara (más ovalada, mentón definido)
  const face=()=>{g.moveTo(-100,-46);g.quadraticCurveTo(-106,52,-72,106);g.quadraticCurveTo(-40,146,0,150);g.quadraticCurveTo(40,146,72,106);g.quadraticCurveTo(106,52,100,-46);g.quadraticCurveTo(92,-118,0,-120);g.quadraticCurveTo(-92,-118,-100,-46);};
  g.fillStyle=C.skin;P(face);g.fill();
  // sombra suave lateral y barba de pocos días en la mandíbula
  g.save();P(face);g.clip();
    g.fillStyle='rgba(40,28,20,.10)';P(()=>{g.moveTo(-104,40);g.quadraticCurveTo(-90,120,-40,146);g.quadraticCurveTo(0,156,40,146);g.quadraticCurveTo(90,120,104,40);g.lineTo(104,150);g.lineTo(-104,150);g.closePath();});g.fill();
  g.restore();
  E(-58,60,22,12,'rgba(225,130,110,.20)');E(58,60,22,12,'rgba(225,130,110,.20)');
  // pelo: laterales cortos pegados a la cabeza
  g.fillStyle=C.hair;[[-1],[1]].forEach(([sd])=>{P(()=>{g.moveTo(sd*101,-64);g.quadraticCurveTo(sd*108,-24,sd*101,4);g.quadraticCurveTo(sd*96,-20,sd*90,-52);g.closePath();});g.fill();});
  // masa de rizos (más volumen arriba y hacia delante, algún rizo cae a la frente)
  g.fillStyle=C.hair;P(()=>{g.moveTo(-98,-62);g.quadraticCurveTo(-114,-168,-20,-192);g.quadraticCurveTo(60,-200,102,-140);g.quadraticCurveTo(118,-102,98,-62);g.quadraticCurveTo(54,-92,6,-88);g.quadraticCurveTo(-48,-94,-98,-62);});g.fill();
  const curls=[[-90,-96,20],[-76,-130,23],[-50,-160,25],[-14,-176,27],[24,-176,26],[58,-160,25],[86,-132,22],[98,-98,18],[-56,-120,22],[-20,-140,25],[18,-144,25],[52,-130,23],[78,-104,20],[-80,-76,16],[-40,-96,20],[-2,-106,22],[36,-102,21],[66,-84,17],[-22,-80,15],[14,-82,15],[44,-76,13]];
  curls.forEach(([x,y,r],i)=>{E(x,y,r,r*0.9,i%3?C.hair:C.hairM);g.strokeStyle=C.hairL;g.lineWidth=3;P(()=>{g.arc(x-r*0.1,y-r*0.12,r*0.58,Math.PI*(0.95+0.12*(i%3)),Math.PI*(1.62+0.1*(i%2)));});g.stroke();});
  // cejas gruesas y rectas
  const by=-28-brow*11;g.fillStyle=C.brow;
  [[-1],[1]].forEach(([sd])=>{g.save();g.translate(sd*44,by);g.scale(sd,1);g.rotate(-0.04-brow*0.1);P(()=>{g.moveTo(-28,8);g.quadraticCurveTo(-6,-6,30,-3);g.lineTo(32,5);g.quadraticCurveTo(0,4,-28,14);g.closePath();});g.fill();g.restore();});
  // ojos almendrados, grandes (caricatura)
  [[-1],[1]].forEach(([sd])=>{const ex=sd*44,ey=6,rw=27,rh=(19+brow*4)*(1-blink)+1.5;
    g.save();g.translate(ex,ey);g.scale(sd,1);
    const shape=()=>{g.moveTo(-rw,0);g.bezierCurveTo(-rw*0.55,-rh*1.25,rw*0.55,-rh*1.25,rw,rh*0.05);g.bezierCurveTo(rw*0.55,rh*0.95,-rw*0.55,rh*0.95,-rw,0);};
    g.fillStyle='#FFFFFF';P(shape);g.fill();
    if(blink<0.85){g.save();P(shape);g.clip();const ix=lookX*8*sd,iy=lookY*5+1;E(ix,iy,14,15,C.iris);E(ix,iy,7,7.5,'#120A06');E(ix+5,iy-5,4.5,4.5,'#FFFFFF');g.restore();}
    g.strokeStyle=C.brow;g.lineWidth=5;g.lineCap='round';P(()=>{g.moveTo(-rw,0);g.bezierCurveTo(-rw*0.55,-rh*1.25,rw*0.55,-rh*1.25,rw,rh*0.05);});g.stroke();
    g.strokeStyle='rgba(160,100,70,.45)';g.lineWidth=2.5;P(()=>{g.moveTo(-rw*0.75,-rh*1.05);g.quadraticCurveTo(0,-rh*1.55,rw*0.8,-rh*0.95);});g.stroke();
    g.restore();});
  // nariz recta
  g.strokeStyle=C.skinD;g.lineWidth=5;g.lineCap='round';P(()=>{g.moveTo(-2,8);g.quadraticCurveTo(-6,38,-14,52);g.quadraticCurveTo(-6,62,8,58);});g.stroke();
  E(-10,56,4,3,'rgba(150,95,65,.45)');E(10,56,4,3,'rgba(150,95,65,.45)');
  // boca (labios)
  const mo=Math.max(0,mouth),my=92;
  if(mo<0.05){g.fillStyle=C.lip;P(()=>{g.moveTo(-26,my);g.quadraticCurveTo(-10,my-6,0,my-3);g.quadraticCurveTo(10,my-6,26,my);g.quadraticCurveTo(0,my+12+smile*4,-26,my);});g.fill();
    g.strokeStyle=C.lipD;g.lineWidth=3;P(()=>{g.moveTo(-26,my);g.quadraticCurveTo(0,my+3+smile*7,26,my);});g.stroke();}
  else{g.fillStyle=C.lip;P(()=>{g.moveTo(-30,my);g.quadraticCurveTo(0,my-8,30,my);g.quadraticCurveTo(24,my+8+mo*36,0,my+10+mo*38);g.quadraticCurveTo(-24,my+8+mo*36,-30,my);});g.fill();
    g.fillStyle=C.mouthIn;P(()=>{g.moveTo(-24,my+1);g.quadraticCurveTo(0,my-3,24,my+1);g.quadraticCurveTo(20,my+4+mo*30,0,my+5+mo*32);g.quadraticCurveTo(-20,my+4+mo*30,-24,my+1);});g.fill();
    g.fillStyle='#FFFFFF';P(()=>{g.moveTo(-18,my+1);g.quadraticCurveTo(0,my-1,18,my+1);g.lineTo(16,my+7);g.quadraticCurveTo(0,my+8,-16,my+7);g.closePath();});g.fill();
    if(mo>0.35)E(0,my+4+mo*26,12,mo*8,C.tongue);}
  // bigote fino
  g.fillStyle=C.beard;P(()=>{g.moveTo(-36,my-2);g.quadraticCurveTo(-26,my-22,0,my-18);g.quadraticCurveTo(26,my-22,36,my-2);g.quadraticCurveTo(30,my-8,22,my-10);g.quadraticCurveTo(0,my-13,-22,my-10);g.quadraticCurveTo(-30,my-8,-36,my-2);});g.fill();
  // perilla de mentón
  const cy2=my+22+mo*28;g.fillStyle=C.beard;P(()=>{g.moveTo(-16,cy2);g.quadraticCurveTo(0,cy2-6,16,cy2);g.quadraticCurveTo(14,cy2+22,0,cy2+30);g.quadraticCurveTo(-14,cy2+22,-16,cy2);});g.fill();
  g.restore();}
