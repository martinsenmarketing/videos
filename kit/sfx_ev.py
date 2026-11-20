import json,unicodedata,re,numpy as np,wave,sys
exec(open('/home/claude/cafe/v2/sfx.py').read().split('DUR=35.84')[0])
W=json.load(open('words.json'))
def nrm(s): return re.sub(r'[^a-zñ0-9]','',''.join(c for c in unicodedata.normalize('NFD',s.lower()) if unicodedata.category(c)!='Mn'))
def WT(w,after=0):
    for x in W:
        if x['t0']>=after-0.01 and nrm(x['w']).startswith(nrm(w)): return x['t0']
    return None
DUR=float(sys.argv[1])
mix=np.zeros(int(DUR*SR)+SR)
def put(x,t,g):
    if t is None: return
    k=int(max(0,t)*SR); e=min(len(mix),k+len(x)); mix[k:e]+=x[:e-k]*g
db=lambda v:10**(v/20)
