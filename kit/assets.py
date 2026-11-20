# Uso (en la carpeta del vídeo): python3 assets.py voz.wav "prompt"  -> voz.m4a, words.json, caps.json, env.json, DUR
import sys, subprocess, json, re, numpy as np, soundfile as sf, librosa
src=sys.argv[1]; prompt=sys.argv[2] if len(sys.argv)>2 else ''
J=subprocess.run(['ffmpeg','-hide_banner','-i',src,'-af','loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json','-f','null','-'],capture_output=True,text=True).stderr
d=json.loads(J[J.rfind('{'):J.rfind('}')+1])
af=f"loudnorm=I=-16:TP=-1.5:LRA=11:measured_I={d['input_i']}:measured_TP={d['input_tp']}:measured_LRA={d['input_lra']}:measured_thresh={d['input_thresh']}:offset={d['target_offset']}:linear=true"
subprocess.run(['ffmpeg','-v','error','-y','-i',src,'-af',af,'-ar','48000','-c:a','aac','-b:a','192k','voz.m4a'],check=True)
subprocess.run(['ffmpeg','-v','error','-y','-i','voz.m4a','-ac','1','-ar','16000','voz16.wav'],check=True)
from pywhispercpp.model import Model
m=Model('/home/claude/asr/ggml-base.bin',language='es',print_progress=False,print_realtime=False,max_len=1,split_on_word=True,token_timestamps=True)
W=[{'w':s.text.strip(),'t0':s.t0/100,'t1':s.t1/100} for s in m.transcribe('voz16.wav',initial_prompt=prompt) if s.text.strip()]
json.dump(W,open('words.json','w'),ensure_ascii=False)
caps=[];cur=[]
for w in W:
    cur.append(w)
    if len(cur)==3 or re.search(r'[.,:;?!]$',w['w']):
        caps.append({'s':' '.join(x['w'] for x in cur).upper().strip('.,;'),'t0':cur[0]['t0'],'t1':cur[-1]['t1']});cur=[]
if cur: caps.append({'s':' '.join(x['w'] for x in cur).upper(),'t0':cur[0]['t0'],'t1':cur[-1]['t1']})
for i in range(len(caps)-1):
    if caps[i+1]['t0']-caps[i]['t1']<0.35: caps[i]['t1']=caps[i+1]['t0']
for c in caps: c['s']=re.sub(r'[¿?¡!"«»]','',c['s']).replace('  ',' ').strip(' .,')
json.dump(caps,open('caps.json','w'),ensure_ascii=False)
y,sr=librosa.load('voz16.wav',sr=16000);hop=sr//30
r=np.array([np.sqrt(np.mean(y[i:i+hop]**2)) for i in range(0,len(y),hop)]);r=np.clip(r/np.percentile(r,95),0,1)
json.dump([round(float(x),3) for x in r],open('env.json','w'))
print('DUR',round(len(y)/sr+0.4,2))
for c in caps: print(f"{c['t0']:6.2f} {c['s']}")
