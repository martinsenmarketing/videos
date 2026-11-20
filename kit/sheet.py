import sys
from PIL import Image
name=sys.argv[1]; ts=sys.argv[2:]
ims=[Image.open(f"f_{('%g'%float(t)).replace('.','_')}.png").convert('RGB').resize((360,640)) for t in ts]
cols=4; rows=(len(ims)+cols-1)//cols
sheet=Image.new('RGB',(360*cols,640*rows))
for i,im in enumerate(ims): sheet.paste(im,((i%cols)*360,(i//cols)*640))
sheet.save(name,quality=85)
