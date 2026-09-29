"""Genera las páginas para COMPARTIR cada libro de la Biblioteca de Autor.

Por cada libro del arreglo BOOKS de libros.html crea:
  biblioteca/<id>/share.jpg    tarjeta 1200x630 (formato que piden WhatsApp/Facebook/X)
  biblioteca/<id>/index.html   página con las etiquetas og:* de ESE libro; a la
                               persona la manda de inmediato a /libros#libro-<id>

Por qué existe: el botón "Lo recomiendo" comparte https://.../biblioteca/<id>/.
Si compartiera /libros, la vista previa en WhatsApp sería la genérica de la
página, sin la portada ni la sinopsis del libro que se está recomendando.

Correr después de agregar un libro o de cambiar su título/sinopsis/portada:
    python tools/build-share-libros.py
Requiere Pillow, node (para leer BOOKS tal cual) y las fuentes Georgia/Segoe UI de Windows.
"""
import html
import json
import os
import re
import subprocess

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = 'https://trikles-cursos.web.app'
FONTS = r'C:\Windows\Fonts'


def load_books():
    src = open(os.path.join(ROOT, 'libros.html'), encoding='utf-8').read()
    m = re.search(r'const BOOKS = (\[.*?\n  \]);', src, re.S)
    js = 'const BOOKS = ' + m.group(1) + ';process.stdout.write(JSON.stringify(BOOKS));'
    out = subprocess.run(['node', '-e', js], capture_output=True, check=True)
    return json.loads(out.stdout.decode('utf-8'))


def font(name, size):
    return ImageFont.truetype(os.path.join(FONTS, name), size)


def wrap(draw, text, fnt, width):
    lines, cur = [], ''
    for w in text.split():
        t = (cur + ' ' + w).strip()
        if draw.textlength(t, font=fnt) <= width:
            cur = t
        else:
            lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def card(b, out):
    W, H = 1200, 630
    img = Image.new('RGB', (W, H), (12, 10, 9))
    # resplandor naranja arriba a la derecha (la estética de /libros)
    glow = Image.new('RGB', (W, H), (12, 10, 9))
    ImageDraw.Draw(glow).ellipse((700, -380, 1500, 300), fill=(120, 42, 16))
    img = Image.blend(img, glow.filter(ImageFilter.GaussianBlur(120)), 0.9)
    d = ImageDraw.Draw(img)

    cov = Image.open(os.path.join(ROOT, b['cover'])).convert('RGB')
    ch = 510
    cw = round(cov.width * ch / cov.height)
    cov = cov.resize((cw, ch), Image.LANCZOS)
    x0, y0 = 70, (H - ch) // 2
    shadow = Image.new('RGBA', (cw + 80, ch + 80), (0, 0, 0, 0))
    ImageDraw.Draw(shadow).rectangle((40, 50, cw + 40, ch + 50), fill=(0, 0, 0, 190))
    img.paste(shadow.filter(ImageFilter.GaussianBlur(18)), (x0 - 40, y0 - 40), shadow.filter(ImageFilter.GaussianBlur(18)))
    img.paste(cov, (x0, y0))

    tx = x0 + cw + 60
    tw = W - tx - 60
    y = 110
    d.text((tx, y), b['genre'].upper(), font=font('segoeuib.ttf', 22), fill=(240, 117, 74))
    y += 48
    tf = font('georgiab.ttf', 58)
    for ln in wrap(d, b['title'], tf, tw)[:3]:
        d.text((tx, y), ln, font=tf, fill=(243, 238, 228))
        y += 68
    if b.get('subtitle'):
        sf = font('georgiai.ttf', 27)
        for ln in wrap(d, b['subtitle'], sf, tw)[:3]:
            d.text((tx, y + 4), ln, font=sf, fill=(185, 172, 153))
            y += 36
    y += 28
    d.text((tx, y), 'Germán Solís Muñoz', font=font('segoeuib.ttf', 26), fill=(217, 160, 102))
    pie = f"${b['price']} MXN · primeras páginas gratis" if b.get('price') else 'Léelo gratis en línea'
    d.text((tx, H - 92), pie, font=font('seguisb.ttf', 24), fill=(243, 238, 228))
    d.text((tx, H - 58), 'TRIKLES · Biblioteca de Autor', font=font('segoeui.ttf', 20), fill=(138, 127, 111))
    img.save(out, quality=88)


PAGE = '''<!DOCTYPE html>
<html lang="es-MX">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Generado por tools/build-share-libros.py: no editar a mano -->
<title>{title} · Germán Solís Muñoz</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="{target}">
<meta property="og:type" content="book">
<meta property="og:site_name" content="TRIKLES · Biblioteca de Autor">
<meta property="og:title" content="{title} · Germán Solís Muñoz">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{image}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="es_MX">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{title} · Germán Solís Muñoz">
<meta name="twitter:description" content="{desc}">
<meta name="twitter:image" content="{image}">
<meta http-equiv="refresh" content="0; url={target}">
<style>
  :root {{ color-scheme: dark; }}
  body {{ margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center;
    background: #0c0a09; color: #f3eee4; font-family: Georgia, serif; text-align: center; padding: 16px; }}
  a {{ color: #d9a066; }}
</style>
<script>location.replace({target_js});</script>
</head>
<body>
  <p>Abriendo <em>{title}</em>… <br><br><a href="{target}">Si no se abre, toca aquí</a>.</p>
</body>
</html>
'''


def desc_of(b):
    t = b['synopsis']
    if len(t) > 190:
        t = t[:190].rsplit(' ', 1)[0].rstrip(',;:') + '…'
    return t


def main():
    for b in load_books():
        folder = os.path.join(ROOT, 'biblioteca', b['id'])
        card(b, os.path.join(folder, 'share.jpg'))
        target = f"{SITE}/libros#libro-{b['id']}"
        page = PAGE.format(
            title=html.escape(b['title']),
            desc=html.escape(desc_of(b)),
            url=f"{SITE}/biblioteca/{b['id']}/",
            image=f"{SITE}/biblioteca/{b['id']}/share.jpg",
            target=target,
            target_js=json.dumps(target),
        )
        open(os.path.join(folder, 'index.html'), 'w', encoding='utf-8').write(page)
        print('ok', b['id'])


if __name__ == '__main__':
    main()
