import sys, subprocess, re, json, numpy as np, wave
src,out=sys.argv[1],sys.argv[2]; especiales=json.loads(sys.argv[3]) if len(sys.argv)>3 else []
log=subprocess.run(['ffmpeg','-hide_banner','-i',src,'-af','silencedetect=noise=-35dB:d=0.25','-f','null','-'],capture_output=True,text=True).stderr
st=[float(x) for x in re.findall(r'silence_start: ([\d.]+)',log)]; en=[float(x) for x in re.findall(r'silence_end: ([\d.]+)',log)]
w=wave.open(src); sr=w.getframerate(); ch=w.getnchannels(); a=np.frombuffer(w.readframes(w.getnframes()),dtype=np.int16).reshape(-1,ch).astype(np.float32); w.close()
dur=len(a)/sr; sil=list(zip(st,en+[dur]*(len(st)-len(en))))
def objetivo(s,e):
    d=e-s
    if s<0.01: return 0.12
    if e>dur-0.01: return 0.35
    for ts,p in especiales:
        if abs(s-ts)<0.3: return p
    if d>0.8: return 0.25
    if d>0.4: return 0.32
    return d
keep=[];cur=0.0
for s,e in sil:
    t=objetivo(s,e)
    if e-s>t+0.02:
        if s<0.01: cur=e-t; continue
        keep.append((cur,s+t/2)); cur=e-t/2
keep.append((cur,dur)); f=int(0.006*sr); parts=[]
for x0,x1 in keep:
    seg=a[int(x0*sr):int(x1*sr)].copy()
    if len(seg)>2*f: r=np.linspace(0,1,f)[:,None]; seg[:f]*=r; seg[-f:]*=r[::-1]
    if len(seg): parts.append(seg)
o=np.concatenate(parts).clip(-32768,32767).astype(np.int16)
w=wave.open(out,'wb'); w.setnchannels(ch); w.setsampwidth(2); w.setframerate(sr); w.writeframes(o.tobytes()); w.close()
print(f'antes {dur:.2f}s  despues {len(o)/sr:.2f}s')
