import json,sys
F=json.loads(sys.argv[1]); c=json.load(open('caps.json'))
for x in c:
    for a,b in F.items(): x['s']=x['s'].replace(a,b)
json.dump(c,open('caps.json','w'),ensure_ascii=False); print([x['s'] for x in c])
