# Uso: python3 elegir2.py carpeta_tomas frases.txt salida.wav
import sys, glob, os, re, difflib, json, numpy as np, librosa, soundfile as sf
from pywhispercpp.model import Model
D, TXT, OUT = sys.argv[1:4]
L = [l.strip() for l in open(TXT, encoding='utf-8').read().strip().split('\n')[1:] if l.strip()]
m = Model('/home/claude/asr/ggml-base.bin', language='es', print_progress=False, print_realtime=False,
          max_len=1, split_on_word=True, token_timestamps=True)
num = {'cien':'100','cincuenta y seis':'56','veintisiete':'27','dos de noviembre':'2 de noviembre','tres trucos':'3 trucos','uno':'1','dos':'2','y tres':'y 3'}
import unicodedata
def norm(s):
    s = ''.join(c for c in unicodedata.normalize('NFD', s.lower().replace('ñ','\x01')) if unicodedata.category(c)!='Mn').replace('\x01','ñ')
    s = s.replace('blak fraidey','black friday')
    s = re.sub(r'[^\wáéíóúñü% ]',' ',s)
    s = ' '.join(s.split())
    for k,v in num.items(): s = re.sub(r'\b'+k+r'\b', v, s)
    return s.replace(' por ciento','%').replace('% ','% ').split()
SR = 24000; res = {}; pick = []
for i, line in enumerate(L, 1):
    cands = []
    for f in sorted(glob.glob(f'{D}/{i:02d}_*.wav')):
        y, _ = librosa.load(f, sr=SR); y16 = librosa.resample(y, orig_sr=SR, target_sr=16000)
        segs = [s for s in m.transcribe(y16, initial_prompt='Black Friday') if s.text.strip()]
        words = [(s.t0/100, s.t1/100, s.text.strip()) for s in segs]
        hyp = ' '.join(w[2] for w in words)
        acc = difflib.SequenceMatcher(None, norm(line), norm(hyp)).ratio()
        a, b = (words[0][0], words[-1][1]) if words else (0, len(y)/SR)
        # energía en ventanas de 20 ms
        hop = int(0.02*SR); rms = librosa.feature.rms(y=y, frame_length=hop*2, hop_length=hop)[0]
        db = 20*np.log10(rms+1e-9); t = np.arange(len(db))*0.02
        # ruido fuera de las palabras (antes del inicio o tras el final), y huecos internos largos con sonido
        fuera = ((t < a-0.15) | (t > b+0.35)) & (db > -38)
        ruido = fuera.sum()*0.02
        y_t, _ = librosa.effects.trim(y, top_db=38)
        f0, _, _ = librosa.pyin(y_t, fmin=70, fmax=400, sr=SR, frame_length=2048)
        f0 = f0[~np.isnan(f0)]; st = float(np.std(12*np.log2(f0/np.median(f0)))) if len(f0) else 0
        dur = len(y_t)/SR; rate = len(norm(line))/max(dur,0.1)
        score = acc*10 - ruido*4 + min(st,7)*0.25 - abs(rate-2.9)*0.6
        cands.append((score, f, dict(acc=round(acc,2), ruido=round(ruido,2), tono=round(st,1), pal_s=round(rate,2), hyp=hyp)))
        print(os.path.basename(f), round(score,2), cands[-1][2], flush=True)
    best = max(cands)
    pick.append(best[1]); res[i] = [(os.path.basename(c[1]), round(c[0],2), c[2]) for c in cands]
json.dump(res, open(OUT+'.json','w'), ensure_ascii=False, indent=1)
print('ELEGIDAS', [os.path.basename(p) for p in pick])
# montaje: recorte por energía + fundidos, pausas según puntuación final
out = [np.zeros(int(0.08*SR))]
for f, line in zip(pick, L):
    y, _ = librosa.load(f, sr=SR)
    iv = librosa.effects.split(y, top_db=36, frame_length=1024, hop_length=256)
    iv = [x for x in iv if (x[1]-x[0]) > 0.06*SR]   # quita chasquidos sueltos
    y = y[max(0,iv[0][0]-int(0.03*SR)):min(len(y),iv[-1][1]+int(0.06*SR))]
    # comprime pausas internas largas (comas, puntos dentro de la frase)
    iv = librosa.effects.split(y, top_db=38, frame_length=1024, hop_length=256)
    parts=[];mx=int(0.17*SR)
    for k,(a0,a1) in enumerate(iv):
        parts.append(y[a0:a1])
        if k<len(iv)-1:
            g=y[a1:iv[k+1][0]]
            if len(g)>mx: g=np.concatenate([g[:mx//2],g[-mx//2:]])
            parts.append(g)
    y=np.concatenate(parts)
    fd = int(0.015*SR); y[:fd] *= np.linspace(0,1,fd); y[-fd:] *= np.linspace(1,0,fd)
    p = 0.26 if line.endswith('?') else 0.16
    out += [y, np.zeros(int(p*SR))]
sf.write(OUT, np.concatenate(out), SR)
print('dur', sum(len(x) for x in out)/SR)
