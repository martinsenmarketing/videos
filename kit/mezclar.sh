# Uso: mezclar.sh DUR salida.mp4  (en la carpeta del vídeo: voz.m4a sfx.wav video_mudo.mp4)
DUR=$1; OUT=$2
ffmpeg -v error -y -i voz.m4a -i sfx.wav -filter_complex "[0:a]aresample=48000,apad=whole_dur=$DUR[v];[1:a]aresample=48000,volume=-1dB,pan=stereo|c0=c0|c1=c0[s];[v][s]amix=inputs=2:normalize=0:duration=first,atrim=0:$DUR[m]" -map "[m]" -c:a pcm_f32le mezcla.wav
J=$(ffmpeg -hide_banner -i mezcla.wav -af loudnorm=I=-14:TP=-1:LRA=11:print_format=json -f null - 2>&1 | sed -n '/^{/,/^}/p')
read i tp lra th off <<< $(echo "$J" | python3 -c "import json,sys;d=json.load(sys.stdin);print(d['input_i'],d['input_tp'],d['input_lra'],d['input_thresh'],d['target_offset'])")
ffmpeg -v error -y -i video_mudo.mp4 -i mezcla.wav -af "loudnorm=I=-14:TP=-1:LRA=11:measured_I=$i:measured_TP=$tp:measured_LRA=$lra:measured_thresh=$th:offset=$off:linear=true,aresample=48000" -c:v copy -c:a aac -b:a 192k -movflags +faststart -shortest $OUT
ffmpeg -hide_banner -i $OUT -af ebur128 -f null - 2>&1 | grep -A1 "Integrated" | tail -1
