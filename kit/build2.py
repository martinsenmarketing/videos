# Uso: python3 build2.py carpeta DUR
import sys,json
d,dur=sys.argv[1],sys.argv[2]
L=open('/home/claude/invisible/base.html').read().split('\n');R=lambda a,b:'\n'.join(L[a-1:b])
sc=open(d+'/scenes.js').read().replace('__WORDS__',open(d+'/words.json').read()).replace('__DUR__',dur)
h='\n'.join([R(1,50),R(283,288),open('/home/claude/avatar/avatar2.js').read(),open('/home/claude/comun.js').read(),sc,open(d+'/cola.js' if False else '/home/claude/cola.js').read()])
h=h.replace('__CAPS__',open(d+'/caps.json').read()).replace('__ENV__',open(d+'/env.json').read())
open(d+'/escenas.html','w').write(h);print('ok')
