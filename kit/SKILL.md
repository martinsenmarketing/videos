# Reels diarios de @martinsenmarketing — instrucciones completas
(Copia de la habilidad reels-martinsen; si la habilidad está instalada, úsala.)

## Objetivo y reglas fijas
- Meta: viralidad → seguidores que se quedan por valor útil → autoridad → negocios que escriben para contratar Google Ads, Meta Ads o SEO. Objetivo: 5.000 €/mes. Medir alcance/compartidos Y negocios que escriben.
- 3 reels al día (lunes a sábado; domingo descanso): 15:30 trucos de compra/psicología del consumidor (portada AMARILLA #FFD166) · 19:30 serie (ahora "Black Friday por dentro", BF3 sábado 21, BF4 lunes 23 "vender más en Black Friday sin bajar precios") (portada ROJA #E5484D) · 21:30 para negocios (portada AZUL #2F6FE4).
- CONSULTAR a Nahuel cualquier cambio de guion, voz o animación explicando el porqué ANTES de aplicarlo. Aprobado por Nahuel (20 nov): (1) escribir 4 ganchos por guion y elegir el mejor antes de la voz; (2) si hay un número real e impactante (dato o visitas propias), ponerlo gigante en el fotograma 0, nunca inventado; (3) en la versión TikTok, la portada como primer fotograma (1 fotograma, 1/30 s) para que TikTok la tome como portada; la de Instagram sigue igual.
- Guion: 8 piezas (gancho, qué se llevan, cuerpo 1, bucle, cuerpo 2, bucle, cuerpo 3, CTA). Gancho = pregunta al espectador o afirmación chocante, nunca "¿Sabías que…?". CTA "envíaselo a alguien que…" hacia s12-15 unido a bucle. Una línea por frase, números en letra, inglés fonético ("Blak Fráidey"), evitar "publican" y "mándaselo a quien". Fuentes reales, nunca inventar datos, no nombrar marcas concretas. Cada vídeo de negocios lleva palabra clave de comentario (p. ej. FICHA).
- Edición: zoom in/out, golpes y efectos, SIN música ni ambiente, voz sin acelerar, gancho en fotograma 0, avatar abajo-izq, subtítulos y≈1470.
- Portadas: color sólido por franja, 1-4 palabras gigantes, objeto que cuente el giro, avatar con cara de SORPRESA, todo centrado.

## Puesta en marcha
git clone https://github.com/martinsenmarketing/videos /home/claude/videos && bash /home/claude/videos/kit/setup.sh. Leer kit/aprendizajes.md. Ejemplos en kit/ejemplos/leche y kit/ejemplos/maps. Voz ya elegida de BF3 en kit/pendiente/bf3. list_triggers antes de programar.

## Voz (Mac de Nahuel)
device_bash en ~/mnt/Movies/voz. Escribir pendiente/<nombre>.txt con 1ª línea `ref=ref_capcut_bf1.wav exag=0.55 cfg=0.5 modo=frases tomas=2` y una frase por línea; salida en salida/<nombre>/LL_T.wav (~20 s/toma). Traer con device_stage_files (/mnt/user-data/uploads/Movies/voz/...). `python3 /home/claude/elegir2.py tomas frases.txt voz_sel.wav`.

## Vídeo
assets.py voz_sel.wav "claves" → fixcaps.py → scenes.js (copiar ejemplo, tiempos con WT) → build2.py . DUR → una hoja de fotogramas (shots.js + sheet.py) → render.js DUR → sfx.py DUR (copiar sfx_ev.py) → mezclar.sh DUR Nombre.mp4 → portada con kit/portadas.

## Publicar
- Repo: AAAA-MM-DD_slug.mp4/.jpg, commit con -c user.name=martinsenmarketing -c user.email=noreply@github.com y git -c push.negotiate=true push. URL raw.githubusercontent.com/martinsenmarketing/videos/main/<archivo>.
- Instagram: send_later a la hora (Europe/Madrid) → Windsor instagram cuenta 17841450530063450: execute_action create_video_post {video_url, cover_url, share_to_feed:true, caption} y create_comment {media_id, message}; avisar a Nahuel para fijar el comentario.
- TikTok (+2 min): media_upload (Higgsfield) → curl PUT con -H "If-None-Match: *" → media_confirm type video → tiktok_prepare_publish connector_id 130e7335-7de8-4d5c-9c2a-0f89f4c53df4, DIRECT_POST, VIDEO, title = TODO el texto (≤150 caracteres: gancho + motivo para enviar + 3-4 hashtags; el campo description no sale en vídeos). Nahuel confirma en la tarjeta (no se puede publicar sin él). Darle el texto del comentario para TikTok (no hay herramienta para comentar). Recomendar: público, comentarios/dúos/stitch sí, contenido comercial no, IA sí.

## Analizar
A las 24 h: Windsor get_data instagram media_views, media_reach, media_reel_avg_watch_time, media_reel_skip_rate, media_saved, media_shares (sin reposts). TikTok: herramientas higgsfield si permiten métricas. Objetivo: skip <35 %, tiempo medio >50 %, compartidos al alza. Anotar en kit/aprendizajes.md (push) y aplicar al guion siguiente. Lunes: revisión semanal.

## Ahorro de uso
Tandas, sesiones cortas, una revisión visual por vídeo, no rediscutir reglas fijas.
