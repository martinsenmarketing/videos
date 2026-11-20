#!/bin/bash
# Restaura el kit de vídeos en /home/claude (rutas que esperan los scripts). Uso: bash /home/claude/videos/kit/setup.sh
set -e
K=/home/claude/videos/kit
mkdir -p /home/claude/asr /home/claude/avatar /home/claude/invisible /home/claude/cafe/v2 /home/claude/cafe/kit /home/claude/motion
[ -f /home/claude/asr/ggml-base.bin ] || cat $K/asr/ggml-base.bin.part_* > /home/claude/asr/ggml-base.bin
cp $K/base.html /home/claude/invisible/base.html
cp $K/avatar2.js /home/claude/avatar/avatar2.js
cp $K/sfx_lib.py /home/claude/cafe/v2/sfx.py
cp $K/recortar.py /home/claude/cafe/kit/recortar.py
cp $K/comun.js $K/cola.js $K/build2.py $K/assets.py $K/elegir2.py $K/mezclar.sh $K/fixcaps.py /home/claude/
(cd /home/claude/motion && [ -d node_modules/@fontsource/inter ] || (npm init -y >/dev/null && npm i -s @fontsource/inter @fontsource/jetbrains-mono))
(cd /home/claude/cafe/kit && [ -d node_modules/@fontsource/anton ] || (npm init -y >/dev/null && npm i -s @fontsource/anton @fontsource/montserrat))
python3 -c "import pywhispercpp, librosa, soundfile" 2>/dev/null || pip install -q --break-system-packages pywhispercpp librosa soundfile
ls /opt/node22/lib/node_modules/playwright >/dev/null 2>&1 || npm i -g playwright
echo "kit listo"
