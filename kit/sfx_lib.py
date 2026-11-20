import numpy as np, wave
SR=48000; rng=np.random.default_rng(11)
def env(n,a,d):
    t=np.arange(n)/SR; return np.minimum(1,t/max(a,1e-4))*np.exp(-np.maximum(0,t-a)/d)
def lp(x,c):
    a=np.exp(-2*np.pi*c/SR); y=np.empty_like(x); z=0.0
    for i in range(len(x)): z=(1-a)*x[i]+a*z; y[i]=z
    return y
def bp_noise(n,f0,f1,q=0.25):
    x=rng.standard_normal(n); out=np.zeros(n); blk=2048
    for i in range(0,n,blk):
        seg=x[i:i+blk]; f=f0+(f1-f0)*(i/n); F=np.fft.rfft(seg,blk); fr=np.fft.rfftfreq(blk,1/SR)
        g=np.exp(-((np.log(fr+1)-np.log(f))**2)/(2*q**2)); out[i:i+blk]=np.fft.irfft(F*g,blk)[:len(seg)]
    return out/(np.abs(out).max()+1e-9)
def whoosh(d=0.45,up=True):
    n=int(d*SR); x=bp_noise(n,400 if up else 3000,3000 if up else 400,0.35); return x*np.sin(np.pi*np.linspace(0,1,n))**2
def impact(big=False):
    d=1.1 if big else 0.55; n=int(d*SR); t=np.arange(n)/SR; f=(90 if big else 120)*np.exp(-t*(3 if big else 6))+(32 if big else 45)
    body=np.sin(2*np.pi*np.cumsum(f)/SR)*env(n,0.004,0.35 if big else 0.16); click=rng.standard_normal(n)*env(n,0.001,0.012)*0.6
    nz=lp(rng.standard_normal(n),900)*env(n,0.002,0.08)*3; return np.tanh(1.6*(body+click+nz))
def pop(f0=520):
    n=int(0.12*SR); t=np.arange(n)/SR; f=f0+900*t/0.12; return np.sin(2*np.pi*np.cumsum(f)/SR)*env(n,0.002,0.035)
def tick():
    n=int(0.05*SR); t=np.arange(n)/SR; return (np.sin(2*np.pi*2400*t)*0.6+rng.standard_normal(n)*0.4)*env(n,0.0005,0.008)
def bell(f=1320,d=0.9,dec=0.22):
    n=int(d*SR); t=np.arange(n)/SR; x=sum(a*np.sin(2*np.pi*f*m*t) for a,m in [(1,1),(0.5,2.01),(0.25,2.76),(0.15,4.1)]); return x*env(n,0.002,dec)
def ding():
    a=bell(1568,0.8); b=bell(2093,0.9); out=np.zeros(int(1.2*SR)); out[:len(a)]+=a; k=int(0.11*SR); out[k:k+len(b)]+=b; return out/2
def doorbell():
    out=np.zeros(int(1.3*SR))
    for i,(f,g) in enumerate([(2637,1),(2093,0.9)]):
        b=bell(f,1.0,0.3)*g; k=int(i*0.16*SR); out[k:k+len(b)]+=b
    return out/2
def kaching():
    out=np.zeros(int(1.3*SR)); c=rng.standard_normal(int(0.06*SR))*env(int(0.06*SR),0.001,0.01); out[:len(c)]+=c*0.8
    for i,f in enumerate([2637,3136,3951]): b=bell(f,1.0)*0.5; k=int((0.04+0.03*i)*SR); out[k:k+len(b)]+=b
    return out
def clunk():
    n=int(0.4*SR); t=np.arange(n)/SR; x=np.sin(2*np.pi*(180*np.exp(-t*12)+70)*t)*env(n,0.002,0.07)+lp(rng.standard_normal(n),1500)*env(n,0.001,0.03)*2
    return np.tanh(x*1.5)
def ticker(d):
    n=int(d*SR); out=np.zeros(n); t=0.0; step=0.07
    while t<d-0.05:
        k=int(t*SR); x=tick(); e=min(n,k+len(x)); out[k:e]+=x[:e-k]; step=max(0.035,step*0.93); t+=step
    return out
def typing(d,cps=14):
    n=int(d*SR); out=np.zeros(n); t=0.0
    while t<d-0.04:
        k=int(t*SR); x=tick()*rng.uniform(0.4,0.8); e=min(n,k+len(x)); out[k:e]+=x[:e-k]; t+=1/cps*rng.uniform(0.75,1.25)
    return out
def sweep(up=True,d=0.6):
    n=int(d*SR); t=np.arange(n)/SR; f=(250+1100*(t/d)**1.5) if up else (1350-1100*(t/d)**0.7)
    x=np.sin(2*np.pi*np.cumsum(f)/SR)*0.6+bp_noise(n,500 if up else 2500,2500 if up else 500,0.4)*0.4; return x*np.sin(np.pi*np.linspace(0,1,n))
def sparkle():
    n=int(0.9*SR); out=np.zeros(n)
    for i in range(9):
        f=2000*2**(i/6); b=bell(f,0.35)*0.4; k=int(i*0.06*SR); e=min(n,k+len(b)); out[k:e]+=b[:e-k]
    return out
def blip(f=1320,d=0.09):
    n=int(d*SR); t=np.arange(n)/SR; return (np.sin(2*np.pi*f*t)+0.3*np.sin(2*np.pi*2*f*t))*env(n,0.002,d/3.2)
def coin():
    out=np.zeros(int(0.45*SR))
    for i,f in enumerate([1976,2637]):
        b=bell(f,0.3,0.07)*(0.8 if i==0 else 1); k=int(i*0.055*SR); out[k:k+len(b)]+=b
    return out
def ping(f):
    out=np.zeros(int(0.9*SR)); b=bell(f,0.5,0.12)
    for i,g in enumerate([1,0.35,0.12]): k=int(i*0.13*SR); out[k:k+len(b)]+=b*g
    return out
def buzz(d=0.3):
    n=int(d*SR); t=np.arange(n)/SR; x=np.sign(np.sin(2*np.pi*92*t))*0.6+np.sign(np.sin(2*np.pi*138*t))*0.4
    x=lp(x,1400); g=((t<d*0.42)|(t>d*0.58)).astype(float); return x*g*np.minimum(1,np.minimum(t/0.006,(d-t)/0.03))
def powerdown(d=0.8):
    n=int(d*SR); t=np.arange(n)/SR; f=520*np.exp(-t*4.2)+38; ph=2*np.pi*np.cumsum(f)/SR
    x=np.sin(ph)+0.4*np.sin(2*ph)+0.2*np.sin(3*ph); x=lp(x,2200)
    return np.tanh(x*1.2)*np.minimum(1,t/0.01)*np.exp(-t*2.2)*np.minimum(1,(d-t)/0.05)
def zap():
    n=int(0.07*SR); t=np.arange(n)/SR; x=np.sign(np.sin(2*np.pi*100*t))*0.5+rng.standard_normal(n)*0.5
    return lp(x,3000)*env(n,0.001,0.02)
def riser(d):
    n=int(d*SR); t=np.arange(n)/SR; x=bp_noise(n,300,5000,0.4)*0.7; f=180+700*(t/d)**2; x=x+0.35*np.sin(2*np.pi*np.cumsum(f)/SR)
    return x*(t/d)**2.2*np.minimum(1,(d-t)/0.02)

DUR=35.84
mix=np.zeros(int(DUR*SR)+SR)
def put(x,t,g):
    k=int(max(0,t)*SR); e=min(len(mix),k+len(x)); mix[k:e]+=x[:e-k]*g
db=lambda v:10**(v/20)
S=[4.42,8.0,15.0,17.75,23.0,26.08,30.85]
for s in S: put(whoosh(0.45),s-0.22,db(-15))
SERV=[0.9,2.6,4.0,5.4,6.9,8.6,10.2,11.9,13.5,15.4,17.0,18.8,20.6,22.6,23.8,25.2,26.6,27.3,27.9,28.5,29.0,29.5,30.0,30.5,31.1,31.9,32.8,33.7,34.6]
for s in SERV: put(coin(),s+0.55,db(-25))
# 1 gancho
put(whoosh(0.3),0.0,db(-18)); put(impact(),0.03,db(-13)); put(impact(),1.03,db(-14)); put(pop(),1.05,db(-18)); put(pop(600),1.22,db(-18))
for i,s in enumerate([2.15,2.45,2.72,2.96,3.17,3.36,3.53,3.68,3.8]): put(blip(700 if i%2 else 930,0.07),s,db(-16))
put(impact(True),3.93,db(-8)); put(powerdown(0.7),3.96,db(-16))
# 2 promesa
put(pop(),4.66,db(-15)); put(pop(600),4.84,db(-15)); put(blip(660),5.0,db(-18)); put(impact(),5.17,db(-13))
put(whoosh(0.3),5.66,db(-19)); put(impact(),6.3,db(-13))
put(pop(),6.96,db(-14))
for s in [7.07,7.24,7.41]: put(tick(),s,db(-13))
put(whoosh(0.35,False),7.5,db(-20)); put(pop(700),7.64,db(-18))
# 3 reseñas
put(typing(1.15),8.62,db(-17)); put(pop(),10.3,db(-15)); put(ticker(0.6),11.67,db(-17)); put(ding(),12.32,db(-15)); put(sparkle(),12.42,db(-22))
put(pop(600),13.2,db(-15)); put(ticker(0.25),14.2,db(-18)); put(buzz(),14.48,db(-16)); put(whoosh(0.4,False),14.8,db(-19))
# 4 bucle
put(impact(),15.16,db(-13)); put(pop(),15.6,db(-19)); put(impact(True),16.45,db(-9)); put(riser(1.2),16.55,db(-17))
# 5 google maps
put(blip(990),17.55,db(-18)); put(pop(),18.05,db(-16)); put(clunk(),18.87,db(-16)); put(impact(True),19.19,db(-8)); put(clunk(),19.2,db(-12))
put(blip(520),19.32,db(-17)); put(blip(700),19.42,db(-17)); put(doorbell(),20.25,db(-14)); put(whoosh(0.4,False),21.03,db(-19))
put(sweep(False,0.6),21.65,db(-18)); put(buzz(),22.1,db(-15)); put(ding(),22.38,db(-19))
# 6 bucle
put(impact(),23.17,db(-13)); put(impact(),23.76,db(-12)); put(impact(True),25.22,db(-9)); put(riser(0.82),25.26,db(-17))
# 7 anuncio
put(pop(),26.16,db(-15)); put(pop(700),26.33,db(-17)); put(kaching(),26.94,db(-13)); put(impact(),26.94,db(-13))
for i in range(6): put(ping(880*2**(i/6)),28.92+i*0.27,db(-19))
put(whoosh(0.4,False),30.7,db(-20))
# 8 cierre
put(impact(),30.97,db(-13)); put(pop(),31.57,db(-14)); put(pop(430),32.52,db(-14))
for s in [32.56,32.7,32.84]: put(zap(),s,db(-17))
put(powerdown(0.9),33.0,db(-12)); put(impact(),33.0,db(-13)); put(clunk(),33.27,db(-16))
put(whoosh(0.35),33.42,db(-18))
for k in range(5): put(tick(),33.86+k*0.085,db(-14))
put(pop(800),34.4,db(-14)); put(whoosh(0.25),34.38,db(-20)); put(blip(1500),34.56,db(-17)); put(ding(),34.76,db(-14)); put(sparkle(),35.02,db(-21))
mix=mix[:int(DUR*SR)]; s=(np.clip(mix,-1,1)*32767).astype(np.int16)
w=wave.open('sfx.wav','wb'); w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes(s.tobytes()); w.close(); print('sfx ok',round(float(np.abs(mix).max()),3))
