/* =========================================================
   TCHÊ ASSADOS E SABORES
   ---------------------------------------------------------
   >>> EDITE AQUI: contato e informações do rodapé.
   ========================================================= */
const CONFIG = {
  whatsapp: '5551984528139',           // DDI + DDD + número, só dígitos
  telefoneExibicao: '(51) 98452-8139',
  horario: 'Horários e disponibilidade do dia: consulte pelo WhatsApp.',
  endereco: '',                        // ex.: 'Rua Exemplo, 123 — Bairro, Cidade/RS'
  saudacao: 'Olá! Vim pelo site e quero fazer um pedido 😋'
};

/* ---------------------------------------------------------
   CARDÁPIO
   cat: 'combo' | 'assado' | 'porcao'
   destaque: true  -> aparece também na seção Combo Família
   extra: true     -> sugerido dentro do carrinho ("adicione ao pedido")
   --------------------------------------------------------- */
const PRODUTOS = [
  {
    id: 'combo-temperada',
    nome: 'Combo Família — Maionese Temperada',
    curto: 'Combo Família (maionese temperada)',
    cat: 'combo',
    preco: 84,
    de: 88,                            // 55 (frango) + 23 (maionese) + 10 (polenta)
    kicker: 'O combo completo',
    variante: 'com maionese temperada',
    img: 'assets/img/produtos/combo-temperada.jpg',
    poster: 'assets/img/posters/combo-temperada.jpg',
    desc: 'Frango assado inteiro, maionese temperada caseira e uma porção de polenta frita. A refeição completa pra mesa da família.',
    inclui: [
      ['1 Frango assado inteiro', 'Suculento, bem temperado e sempre quente!'],
      ['1 Maionese temperada', 'Cremosa, saborosa e feita com muito amor!'],
      ['1 Porção de polenta frita', 'Crocante por fora, macia por dentro!']
    ],
    tags: ['Serve a família', 'Mais completo'],
    flag: 'Economize R$ 4,00',
    flagGold: true,
    selo: ['Suculento', '3 em 1', 'Completo'],
    destaque: true
  },
  {
    id: 'combo-tradicional',
    nome: 'Combo Família — Maionese Tradicional',
    curto: 'Combo Família (maionese tradicional)',
    cat: 'combo',
    preco: 80,
    kicker: 'O queridinho da casa',
    variante: 'com maionese tradicional',
    img: 'assets/img/produtos/combo-tradicional.jpg',
    poster: 'assets/img/posters/combo-tradicional.jpg',
    desc: 'A mesma fartura, com a nossa maionese tradicional cremosa. Frango inteiro, maionese e porção de polenta frita.',
    inclui: [
      ['1 Frango assado inteiro', 'Suculento, bem temperado e sempre quente!'],
      ['1 Maionese tradicional', 'Cremosa, saborosa e feita com amor!'],
      ['1 Porção de polenta frita', 'Crocante por fora, macia por dentro!']
    ],
    tags: ['Serve a família', 'Melhor preço'],
    flag: 'Mais pedido',
    selo: ['Clássico', 'Nº 1', 'Mais pedido'],
    destaque: true
  },
  {
    id: 'frango-inteiro',
    nome: 'Frango Assado Inteiro',
    curto: 'Frango assado inteiro',
    cat: 'assado',
    preco: 55,
    img: 'assets/img/produtos/frango-inteiro.jpg',
    poster: 'assets/img/posters/frango-inteiro.jpg',
    desc: 'Tempero especial da casa, assado lentamente e cheio de sabor. Ideal para reunir a família.',
    tags: ['Assado na hora', 'Suculento']
  },
  {
    id: 'meio-frango',
    nome: 'Meio Frango Assado',
    curto: 'Meio frango assado',
    cat: 'assado',
    preco: 35,
    img: 'assets/img/produtos/meio-frango.jpg',
    poster: 'assets/img/posters/meio-frango.jpg',
    desc: 'A mesma qualidade e o mesmo sabor do nosso frango inteiro, na medida certa para a refeição do dia a dia.',
    tags: ['Na medida certa', 'Dia a dia'],
    extra: true
  },
  {
    id: 'maionese',
    nome: 'Maionese Temperada Caseira',
    curto: 'Maionese temperada (500g)',
    cat: 'porcao',
    preco: 23,
    peso: '500g',
    img: 'assets/img/produtos/maionese.jpg',
    poster: 'assets/img/posters/maionese.jpg',
    desc: 'Feita com ingredientes selecionados e temperos especiais que deixam tudo ainda mais saboroso. Somente por encomenda.',
    tags: ['Por encomenda', 'Receita especial'],
    extra: true
  },
  {
    id: 'polenta',
    nome: 'Polenta Frita',
    curto: 'Porção de polenta frita (150g)',
    cat: 'porcao',
    preco: 10,
    peso: '150g',
    img: 'assets/img/produtos/polenta.jpg',
    poster: 'assets/img/posters/polenta.jpg',
    desc: 'Sequinha por fora, macia por dentro. Mais sabor para as suas refeições, feita com muito amor em cada detalhe.',
    tags: ['Crocante', 'Sempre fresquinha'],
    extra: true
  }
];

const DUVIDAS = [
  ['O que vem no Combo Família?',
   'Um frango assado inteiro, uma maionese (temperada ou tradicional, você escolhe) e uma porção de polenta frita. E você pode acrescentar porções extras ao pedido antes de enviar.'],
  ['Posso pedir só uma porção avulsa?',
   'Pode! Polenta frita, maionese e meio frango são vendidos separadamente. Adicione quantas porções quiser no cardápio e envie tudo junto pelo WhatsApp.'],
  ['Preciso encomendar com antecedência?',
   'A maionese temperada é feita <b>somente por encomenda</b>, então peça com antecedência. Para os assados, chame no WhatsApp e confirmamos a disponibilidade do dia.'],
  ['Qual a diferença entre a maionese temperada e a tradicional?',
   'A temperada leva temperos especiais e legumes picadinhos — mais sabor e mais cor. A tradicional é a clássica cremosa, suave, que combina com qualquer assado.'],
  ['Vocês entregam ou é só retirada?',
   'Trabalhamos com retirada e também com entrega combinada. Monte o pedido aqui pelo site, escolha a opção <b>Entrega</b> e confirmamos a área e o prazo pelo WhatsApp.'],
  ['Dá para pedir em quantidade maior, para festa ou evento?',
   'Dá sim! Monte o pedido com as quantidades que precisa e escreva a data e o horário nas observações — organizamos a produção com antecedência.']
];

/* =========================================================
   utilitários
   ========================================================= */
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const brl = n => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const precoHTML = n => {
  const [i, d] = n.toFixed(2).split('.');
  return `<span class="cifra">R$</span>${i}<span class="cent">,${d}</span>`;
};
const byId = id => PRODUTOS.find(p => p.id === id);
const zapLink = texto => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;

/* =========================================================
   combos — layout editorial
   ========================================================= */
function renderCombos() {
  $('[data-combos]').innerHTML = PRODUTOS.filter(p => p.destaque).map(p => `
    <article class="combo rv">
      <div class="combo__media">
        <div class="combo__frame">
          ${p.flag ? `<span class="flag ${p.flagGold ? 'flag--gold' : ''}">${p.flag}</span>` : ''}
          <img src="${p.img}" alt="${p.nome}" loading="lazy">
        </div>
        ${p.selo ? `<div class="combo__seal"><small>${p.selo[0]}</small><b>${p.selo[1]}</b><i>${p.selo[2]}</i></div>` : ''}
      </div>

      <div class="combo__info">
        <p class="combo__kicker">${p.kicker}</p>
        <h3 class="combo__name">Combo Família</h3>
        <p class="combo__var">${p.variante}</p>
        <p class="combo__desc">${p.desc}</p>
        <ul class="inc">
          ${p.inclui.map(([t, s]) => `
            <li><svg class="i"><use href="#i-check"/></svg><span><b>${t}</b><small>${s}</small></span></li>
          `).join('')}
        </ul>
        <div class="combo__foot">
          <div class="price">
            ${p.de ? `<s>${brl(p.de)} nos itens avulsos</s>` : ''}
            <strong>${precoHTML(p.preco)}</strong>
            ${p.de ? `<em>Você economiza ${brl(p.de - p.preco)}</em>` : '<em>Refeição completa</em>'}
          </div>
          <div data-slot-combo="${p.id}"></div>
        </div>
      </div>
    </article>
  `).join('');
  PRODUTOS.filter(p => p.destaque).forEach(p => pintaSlot(p.id));
}

/* =========================================================
   cardápio
   ========================================================= */
function renderMenu() {
  $('[data-menu]').innerHTML = PRODUTOS.map((p, idx) => `
    <article class="card rv" data-cat="${p.cat}" data-card="${p.id}" style="transition-delay:${(idx % 3) * 80}ms">
      <div class="card__img">
        ${p.peso ? `<span class="card__peso">${p.peso}</span>` : ''}
        <img src="${p.img}" alt="${p.nome}" loading="lazy">
      </div>
      <div class="card__body">
        <h3 class="card__name">${p.nome}</h3>
        <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <p class="card__desc">${p.desc}</p>
        <div class="card__foot">
          <div class="card__price">${precoHTML(p.preco)}</div>
          <div data-slot="${p.id}"></div>
        </div>
      </div>
    </article>
  `).join('');
  PRODUTOS.forEach(p => pintaSlot(p.id));
}

/* desenha o botão "Adicionar" ou o seletor de quantidade */
function pintaSlot(id) {
  const q = cart[id] || 0;
  const menu = q
    ? `<div class="qty">
         <button data-dec="${id}" aria-label="Diminuir">−</button>
         <b>${q}</b>
         <button data-inc="${id}" aria-label="Aumentar">+</button>
       </div>`
    : `<button class="add" data-add="${id}"><svg class="i"><use href="#i-plus"/></svg> Adicionar</button>`;

  const slot = $(`[data-slot="${id}"]`);
  if (slot) slot.innerHTML = menu;

  const combo = $(`[data-slot-combo="${id}"]`);
  if (combo) combo.innerHTML = q
    ? `<div class="qty">
         <button data-dec="${id}" aria-label="Diminuir">−</button>
         <b>${q}</b>
         <button data-inc="${id}" aria-label="Aumentar">+</button>
       </div>`
    : `<button class="btn btn--gold btn--lg" data-add="${id}"><svg class="i"><use href="#i-bag"/></svg> Adicionar ao pedido</button>`;

  const card = $(`[data-card="${id}"]`);
  if (card) card.classList.toggle('is-on', q > 0);
}

/* =========================================================
   galeria + dúvidas
   ========================================================= */
function renderGaleria() {
  $('[data-gallery]').innerHTML = PRODUTOS.map((p, i) => `
    <button class="rv" data-lb-open="${i}" style="transition-delay:${(i % 4) * 70}ms">
      <img src="${p.poster}" alt="${p.nome}" loading="lazy">
    </button>
  `).join('');
}

function renderFaq() {
  $('[data-faq]').innerHTML = DUVIDAS.map(([q, a]) => `
    <details class="rv"><summary>${q}</summary><p>${a}</p></details>
  `).join('');
}

/* =========================================================
   pedido
   ========================================================= */
const LS = 'tche:pedido';
let cart = {};
try { cart = JSON.parse(localStorage.getItem(LS)) || {}; } catch (e) { cart = {}; }

const salva = () => { try { localStorage.setItem(LS, JSON.stringify(cart)); } catch (e) {} };

const itens = () => Object.entries(cart)
  .filter(([id, q]) => q > 0 && byId(id))
  .map(([id, q]) => ({ p: byId(id), q }));

const total = () => itens().reduce((s, { p, q }) => s + p.preco * q, 0);
const qtdTotal = () => itens().reduce((s, i) => s + i.q, 0);

function setQtd(id, q) {
  q = Math.max(0, Math.min(99, q));
  if (q) cart[id] = q; else delete cart[id];
  salva();
  pintaSlot(id);
  pintaCarrinho();
}

/* ---- carrinho + barra fixa ---- */
function pintaCarrinho() {
  const lista = itens();
  const n = qtdTotal();

  const badge = $('[data-cart-count]');
  badge.textContent = n;
  badge.hidden = !n;

  $('[data-cart-total]').textContent = brl(total());
  $('[data-cart-form]').hidden = !n;
  $('[data-cart-foot]').hidden = !n;

  // barra fixa de resumo
  const bar = $('[data-orderbar]');
  bar.classList.toggle('is-up', n > 0);
  $('.fab').classList.toggle('is-down', n > 0);
  $('[data-ob-count]').textContent = n;
  $('[data-ob-label]').textContent = n === 1 ? '1 item no pedido' : `${n} itens no pedido`;
  $('[data-ob-list]').textContent = lista.map(({ p, q }) => `${q}× ${p.curto || p.nome}`).join(' · ');
  $('[data-ob-total]').textContent = brl(total());

  $('[data-cart-body]').innerHTML = n
    ? lista.map(({ p, q }) => `
        <div class="ci">
          <img src="${p.img}" alt="">
          <div>
            <p class="ci__n">${p.curto || p.nome}</p>
            <p class="ci__p">${brl(p.preco * q)}</p>
            <button class="ci__rm" data-rm="${p.id}">remover</button>
          </div>
          <div class="qty">
            <button data-dec="${p.id}" aria-label="Diminuir">−</button>
            <b>${q}</b>
            <button data-inc="${p.id}" aria-label="Aumentar">+</button>
          </div>
        </div>`).join('') + upsellHTML()
    : `<div class="empty">
         <strong>Seu pedido está vazio</strong>
         <p>Escolha um combo, um assado ou uma porção — você pode ir acrescentando quantos itens quiser.</p>
         <a class="btn btn--gold" href="#cardapio" data-close-cart>Ver cardápio</a>
       </div>`;
}

/* sugestões para acrescentar ao pedido */
function upsellHTML() {
  const faltam = PRODUTOS.filter(p => p.extra && !cart[p.id]);
  if (!faltam.length) return '';
  return `
    <div class="upsell">
      <h4><svg class="i"><use href="#i-plus"/></svg> Acrescente ao pedido</h4>
      <p>Porções individuais que combinam com o que você escolheu.</p>
      <div class="upsell__list">
        ${faltam.map(p => `
          <button class="up" data-add="${p.id}">
            <img src="${p.img}" alt="">
            <span>
              <span class="up__n">${p.curto || p.nome}</span>
              <span class="up__p">${brl(p.preco)}</span>
            </span>
            <span class="up__b"><svg class="i"><use href="#i-plus"/></svg></span>
          </button>`).join('')}
      </div>
    </div>`;
}

/* ---- drawer ---- */
const drawer = () => $('[data-drawer]');
function abreCarrinho() {
  const d = drawer();
  d.hidden = false;
  requestAnimationFrame(() => d.classList.add('is-open'));
  document.body.classList.add('is-locked');
}
function fechaCarrinho() {
  const d = drawer();
  d.classList.remove('is-open');
  document.body.classList.remove('is-locked');
  setTimeout(() => { d.hidden = true; }, 380);
}

/* ---- mensagem do WhatsApp ---- */
function montaMensagem() {
  const f = $('[data-cart-form]');
  const nome = f.nome.value.trim();
  const modo = f.modo.value;
  const end  = f.endereco.value.trim();
  const obs  = f.obs.value.trim();

  const l = ['*PEDIDO — TCHÊ ASSADOS E SABORES*', ''];
  itens().forEach(({ p, q }) => l.push(`• ${q}x ${p.curto || p.nome} — ${brl(p.preco * q)}`));
  l.push('', `*Total: ${brl(total())}*`, '');
  if (nome) l.push(`Nome: ${nome}`);
  l.push(`Modalidade: ${modo}`);
  if (modo === 'Entrega' && end) l.push(`Endereço: ${end}`);
  if (obs) l.push(`Observações: ${obs}`);
  l.push('', 'Pedido enviado pelo site 🔥');
  return l.join('\n');
}

/* =========================================================
   toast
   ========================================================= */
let toastT;
function toast(msg) {
  const t = $('[data-toast]');
  t.innerHTML = `<svg class="i"><use href="#i-check"/></svg> ${msg}`;
  t.hidden = false;
  requestAnimationFrame(() => t.classList.add('is-on'));
  clearTimeout(toastT);
  toastT = setTimeout(() => {
    t.classList.remove('is-on');
    setTimeout(() => { t.hidden = true; }, 320);
  }, 2200);
}

/* =========================================================
   lightbox
   ========================================================= */
let lbIdx = 0;
const lbEl = () => $('[data-lb]');
function abreLb(i) {
  lbIdx = (i + PRODUTOS.length) % PRODUTOS.length;
  const p = PRODUTOS[lbIdx];
  const img = $('[data-lb-img]');
  img.src = p.poster;
  img.alt = p.nome;
  const el = lbEl();
  el.hidden = false;
  requestAnimationFrame(() => el.classList.add('is-open'));
  document.body.classList.add('is-locked');
}
function fechaLb() {
  const el = lbEl();
  el.classList.remove('is-open');
  document.body.classList.remove('is-locked');
  setTimeout(() => { el.hidden = true; }, 320);
}

/* =========================================================
   boot
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  renderCombos();
  renderMenu();
  renderGaleria();
  renderFaq();
  pintaCarrinho();

  /* contato */
  $$('[data-zap]').forEach(a => { a.href = zapLink(CONFIG.saudacao); a.target = '_blank'; a.rel = 'noopener'; });
  $$('[data-horario]').forEach(el => { el.textContent = CONFIG.horario; });
  $$('[data-endereco]').forEach(el => { CONFIG.endereco ? el.textContent = CONFIG.endereco : el.remove(); });
  $('[data-ano]').textContent = new Date().getFullYear();
  const menor = Math.min(...PRODUTOS.map(p => p.preco));
  $('[data-menor-preco]').textContent = 'R$ ' + menor;

  /* header + menu mobile + fab */
  const hd = $('.hd');
  const nav = $('#nav');
  const burger = $('[data-burger]');

  const onScroll = () => {
    hd.classList.toggle('is-stuck', window.scrollY > 24);
    document.documentElement.style.setProperty('--navtop', hd.getBoundingClientRect().bottom + 'px');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  burger.addEventListener('click', () => {
    const on = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', on);
  });
  nav.addEventListener('click', e => {
    if (e.target.tagName === 'A') { nav.classList.remove('is-open'); burger.setAttribute('aria-expanded', false); }
  });

  /* link ativo */
  const secs = ['combos', 'cardapio', 'como', 'sobre', 'duvidas']
    .map(id => document.getElementById(id)).filter(Boolean);
  const spy = new IntersectionObserver(es => {
    es.forEach(e => {
      if (!e.isIntersecting) return;
      $$('.nav a').forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + e.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  secs.forEach(s => spy.observe(s));

  /* reveal */
  const rv = new IntersectionObserver((es, o) => {
    es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); o.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: .04 });
  $$('.rv, .sec__hd, .steps li, .about__txt, .about__img, .note').forEach(el => {
    el.classList.add('rv'); rv.observe(el);
  });

  /* filtros */
  $('[data-filters]').addEventListener('click', e => {
    const b = e.target.closest('[data-filter]');
    if (!b) return;
    $$('.chip').forEach(c => c.classList.toggle('is-on', c === b));
    const f = b.dataset.filter;
    $$('.card').forEach(c => c.classList.toggle('is-hidden', f !== 'todos' && c.dataset.cat !== f));
  });

  /* ações */
  document.addEventListener('click', e => {
    const add = e.target.closest('[data-add]');
    if (add) {
      const id = add.dataset.add;
      setQtd(id, (cart[id] || 0) + 1);
      toast(`${byId(id).curto || byId(id).nome} no pedido`);
      return;
    }
    const inc = e.target.closest('[data-inc]');
    if (inc) return setQtd(inc.dataset.inc, (cart[inc.dataset.inc] || 0) + 1);

    const dec = e.target.closest('[data-dec]');
    if (dec) return setQtd(dec.dataset.dec, (cart[dec.dataset.dec] || 0) - 1);

    const rm = e.target.closest('[data-rm]');
    if (rm) return setQtd(rm.dataset.rm, 0);

    if (e.target.closest('[data-open-cart]')) return abreCarrinho();
    if (e.target.closest('[data-close-cart]')) return fechaCarrinho();

    const g = e.target.closest('[data-lb-open]');
    if (g) return abreLb(+g.dataset.lbOpen);
    if (e.target.closest('[data-lb-close]') || e.target === lbEl()) return fechaLb();
    if (e.target.closest('[data-lb-prev]')) return abreLb(lbIdx - 1);
    if (e.target.closest('[data-lb-next]')) return abreLb(lbIdx + 1);

    if (e.target.closest('[data-clear]')) {
      cart = {}; salva();
      PRODUTOS.forEach(p => pintaSlot(p.id));
      pintaCarrinho();
      return;
    }

    if (e.target.closest('[data-send]')) {
      if (!itens().length) return;
      window.open(zapLink(montaMensagem()), '_blank', 'noopener');
    }
  });

  /* entrega revela o endereço */
  const form = $('[data-cart-form]');
  form.addEventListener('change', () => {
    $('[data-endereco-field]').hidden = form.modo.value !== 'Entrega';
  });

  /* teclado */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (!lbEl().hidden) fechaLb();
      else if (!drawer().hidden) fechaCarrinho();
    }
    if (!lbEl().hidden) {
      if (e.key === 'ArrowLeft') abreLb(lbIdx - 1);
      if (e.key === 'ArrowRight') abreLb(lbIdx + 1);
    }
  });

  /* SEO — dados estruturados */
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Tchê Assados e Sabores',
    servesCuisine: 'Assados, Frango assado, Comida caseira',
    telephone: '+' + CONFIG.whatsapp,
    image: 'assets/img/og.jpg',
    priceRange: 'R$ 10 - R$ 84',
    hasMenu: {
      '@type': 'Menu',
      hasMenuSection: [{
        '@type': 'MenuSection',
        name: 'Cardápio',
        hasMenuItem: PRODUTOS.map(p => ({
          '@type': 'MenuItem',
          name: p.nome,
          description: p.desc,
          offers: { '@type': 'Offer', price: p.preco.toFixed(2), priceCurrency: 'BRL' }
        }))
      }]
    }
  };
  const s = document.createElement('script');
  s.type = 'application/ld+json';
  s.textContent = JSON.stringify(ld);
  document.head.appendChild(s);
});
