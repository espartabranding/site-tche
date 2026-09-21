# -*- coding: utf-8 -*-
"""Processa os arquivos de _entrada/ e gera os assets do site.

  _entrada/logo.png  -> remove o fundo verde (chroma key) -> assets/img/logo.png
  _entrada/hero.jpg  -> recorta e otimiza                 -> assets/img/hero.jpg

Uso:  uv run --with pillow python ferramentas/assets.py
"""
from PIL import Image, ImageFilter
import os, sys

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ENT = os.path.join(RAIZ, "_entrada")
IMG = os.path.join(RAIZ, "assets", "img")


def achar(*nomes):
    for n in nomes:
        p = os.path.join(ENT, n)
        if os.path.exists(p):
            return p
    return None


def tirar_verde(src, dst, tam=1000):
    """Remove fundo chroma-key verde preservando as bordas do logo."""
    im = Image.open(src).convert("RGBA")
    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            # verde dominante = fundo
            if g > 90 and g > r * 1.45 and g > b * 1.45:
                px[x, y] = (r, g, b, 0)
            elif g > r * 1.12 and g > b * 1.12:
                # franja: tira o excesso de verde e suaviza o alfa
                m = max(r, b)
                px[x, y] = (r, m, b, int(a * 0.75))

    # recorta na área útil e reamostra
    bbox = im.getbbox()
    if bbox:
        im = im.crop(bbox)
    lado = max(im.size)
    quad = Image.new("RGBA", (lado, lado), (0, 0, 0, 0))
    quad.paste(im, ((lado - im.width) // 2, (lado - im.height) // 2))
    quad = quad.resize((tam, tam), Image.LANCZOS)
    quad.save(dst, "PNG", optimize=True)
    print("logo  ->", dst, quad.size)


def preparar_hero(src, dst, largura=2400, proporcao=3.6):
    """Alarga a foto para o formato do hero estendendo o fundo dos dois lados
    (espelhado e desfocado), de modo que o frango apareça inteiro e centralizado."""
    im = Image.open(src).convert("RGB")
    if im.width != largura:
        im = im.resize((largura, round(im.height * largura / im.width)), Image.LANCZOS)

    alvo = round(im.height * proporcao)
    if alvo <= im.width:
        im.save(dst, "JPEG", quality=88, optimize=True, progressive=True)
        print("hero  ->", dst, im.size)
        return

    lado = (alvo - im.width) // 2
    amostra = min(im.width // 3, max(lado, 260))

    esq = im.crop((0, 0, amostra, im.height)).transpose(Image.FLIP_LEFT_RIGHT)
    esq = esq.resize((lado, im.height), Image.LANCZOS).filter(ImageFilter.GaussianBlur(30))

    dir_ = im.crop((im.width - amostra, 0, im.width, im.height)).transpose(Image.FLIP_LEFT_RIGHT)
    dir_ = dir_.resize((alvo - im.width - lado, im.height), Image.LANCZOS).filter(ImageFilter.GaussianBlur(30))

    tela = Image.new("RGB", (alvo, im.height))
    tela.paste(esq, (0, 0))
    tela.paste(dir_, (lado + im.width, 0))

    # a foto entra com as laterais esmaecidas, para a emenda não aparecer
    fade = 170
    linha = [min(255, int(255 * x / fade)) for x in range(fade)]
    linha += [255] * (im.width - 2 * fade)
    linha += linha[:fade][::-1]
    mask = Image.new("L", (im.width, 1))
    mask.putdata(linha)
    tela.paste(im, (lado, 0), mask.resize((im.width, im.height)))

    tela.save(dst, "JPEG", quality=88, optimize=True, progressive=True)
    print("hero  ->", dst, tela.size)


if __name__ == "__main__":
    logo = achar("logo.png", "logo.jpg", "logo.jpeg", "logo.webp")
    hero = achar("hero.jpg", "hero.png", "hero.jpeg", "hero.webp")
    if not logo and not hero:
        print("Nada em _entrada/. Salve logo.png e/ou hero.jpg nessa pasta.")
        sys.exit(1)
    if logo:
        tirar_verde(logo, os.path.join(IMG, "logo.png"))
    if hero:
        preparar_hero(hero, os.path.join(IMG, "hero.jpg"))
