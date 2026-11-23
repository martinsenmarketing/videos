# Bases instrumentales sintetizadas (gratis): info / sorpresa / resultado
import numpy as np
def _n(m): return 440*2**((m-69)/12)
def _tone(f,d,SR,kind='pad'):
    t=np.arange(int(d*SR))/SR
    if kind=='pad':
        x=sum(np.sin(2*np.pi*f*k*t*(1+0.002*k))/k**1.6 for k in range(1,6))
        a=np.minimum(1,t/0.4)*np.minimum(1,(d-t)/0.5)
    elif kind=='pluck':
        x=np.sin(2*np.pi*f*t)+0.3*np.sin(2*np.pi*2*f*t); a=np.exp(-t*7)*np.minimum(1,t/0.005)
    elif kind=='bass':
        x=np.sin(2*np.pi*f*t)+0.2*np.sin(2*np.pi*2*f*t); a=np.exp(-t*2.5)*np.minimum(1,t/0.01)
    elif kind=='kick':
        ph=2*np.pi*np.cumsum(50+90*np.exp(-t*30))/SR; x=np.sin(ph); a=np.exp(-t*9)
    elif kind=='hat':
        x=np.random.randn(len(t)); x=np.diff(x,prepend=0); a=np.exp(-t*60)
    return x*a
def _add(buf,x,t0,SR,g):
    k=int(t0*SR);e=min(len(buf),k+len(x))
    if k<len(buf): buf[k:e]+=x[:e-k]*g
def bed(kind,dur,SR):
    b=np.zeros(int(dur*SR)+SR); bpm={'info':100,'sorpresa':120,'resultado':96}[kind]; beat=60/bpm
    if kind=='info':
        prog=[[57,60,64,67],[53,57,60,64],[55,59,62,67],[57,60,64,69]]
        for i,t0 in enumerate(np.arange(0,dur,beat*4)):
            ch=prog[i%4]
            for m in ch: _add(b,_tone(_n(m),beat*4+0.5,SR),t0,SR,0.10)
            _add(b,_tone(_n(ch[0]-24),beat*2,SR,'bass'),t0,SR,0.35)
            for j in range(8): _add(b,_tone(_n(ch[j%4]+12),0.4,SR,'pluck'),t0+j*beat/2,SR,0.10)
            for j in range(4): _add(b,_tone(0,0.05,SR,'hat'),t0+j*beat+beat/2,SR,0.04)
    elif kind=='sorpresa':
        for t0 in np.arange(0,dur,beat*4):
            for m in [45,46,52]: _add(b,_tone(_n(m),beat*4+0.5,SR),t0,SR,0.12)
            for j in range(4): _add(b,_tone(0,0.4,SR,'kick'),t0+j*beat,SR,0.45)
            for j in range(8): _add(b,_tone(_n(69 if j%2 else 70),0.25,SR,'pluck'),t0+j*beat/2,SR,0.08)
            for j in range(8): _add(b,_tone(0,0.04,SR,'hat'),t0+j*beat/2,SR,0.05)
    else:
        prog=[[60,64,67,72],[55,59,62,67],[57,60,64,69],[53,57,60,65]]
        for i,t0 in enumerate(np.arange(0,dur,beat*4)):
            ch=prog[i%4]
            for m in ch: _add(b,_tone(_n(m),beat*4+0.5,SR),t0,SR,0.11)
            _add(b,_tone(_n(ch[0]-24),beat*3,SR,'bass'),t0,SR,0.35)
            for j in range(8): _add(b,_tone(_n(ch[(j*2)%4]+12),0.5,SR,'pluck'),t0+j*beat/2,SR,0.11)
            for j in range(4): _add(b,_tone(0,0.4,SR,'kick'),t0+j*beat,SR,0.25)
    return b
def musica(segs,DUR,SR,gain_db=-24):
    out=np.zeros(int(DUR*SR)+SR); X=0.35
    for k,(a,bb,kind) in enumerate(segs):
        x=bed(kind,bb-a+2*X,SR); n=len(x); t=np.arange(n)/SR
        env=np.minimum(1,t/X)*np.clip((bb-a+X-t)/X+1,0,1)
        if k==len(segs)-1: env=np.minimum(1,t/X)*np.clip((DUR-a-t)/1.2,0,1)
        _add(out,x*env,max(0,a-X),SR,1)
    out/=max(1e-9,np.max(np.abs(out)))
    return out*10**(gain_db/20)
