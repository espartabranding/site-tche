# Tchê Assados e Sabores — site

Site estático (HTML + CSS + JS, sem build) para venda de frango assado, porções e combos,
com montagem de pedido e envio pelo WhatsApp.

## Estrutura

```
index.html                  página única
assets/css/style.css        estilo
assets/js/main.js           cardápio, pedido e integrações
assets/img/                 imagens tratadas (produtos, posters, hero, logo)
ferramentas/assets.py       gera logo.png (remove fundo verde) e hero.jpg
_entrada/                   coloque aqui os arquivos originais
```

## Editar preços, itens e contato

Tudo fica no topo de `assets/js/main.js`:

- `CONFIG` — número do WhatsApp, horário e endereço do rodapé.
- `PRODUTOS` — nome, preço, descrição, foto e categoria de cada item.
  - `cat`: `combo` | `assado` | `porcao` (define o filtro do cardápio)
  - `destaque: true` — o item também aparece na seção "Combo Família"
  - `extra: true` — o item é sugerido dentro do carrinho ("Acrescente ao pedido")
- `DUVIDAS` — perguntas frequentes.

## Trocar logotipo e foto do hero

1. Salve os originais em `_entrada/` como `logo.png` e `hero.jpg`
   (o logo pode estar com fundo verde — o script remove).
2. Rode:

```
uv run --with pillow python ferramentas/assets.py
```

## Rodar localmente

```
python -m http.server 8000
```

E abra <http://localhost:8000>.

## Publicar

É um site estático: sobe em qualquer hospedagem (Netlify, Vercel, GitHub Pages,
Hostinger) arrastando a pasta inteira.
