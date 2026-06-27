# Visione

Ecossistema integrado de gestão empresarial.

🌐 **No ar:** https://paulomenezes2813.github.io/visione/ · Repositório: https://github.com/paulomenezes2813/visione · Deploy via GitHub Pages (branch `main`, raiz).

O Visione não é apenas um software nem apenas uma consultoria. É um **ecossistema de gestão** onde quatro pilares — Modelo de Gestão, Consultoria, Auditoria e Plataforma — atuam de forma complementar para gerar melhoria contínua nas organizações.

Este repositório (`empresadegestao`) contém o **site institucional do Visione** (HTML + CSS puro) e a documentação estratégica do negócio.

## O site

Site institucional em HTML + CSS puro (sem build), hospedável em qualquer lugar (GitHub Pages, Netlify). Abrir [`index.html`](index.html) no navegador.

| Arquivo | Conteúdo |
|---------|----------|
| [`index.html`](index.html) | Home / landing (hero, premissa, valor, ecossistema, para quem, time, contato) |
| [`o-modelo.html`](o-modelo.html) | O modelo — as 6 dimensões da consciência, sequência e instrumentos |
| [`ecossistema.html`](ecossistema.html) | Os 8 pilares detalhados (âncoras `#pilar-1` … `#pilar-8`) |
| [`contato.html`](contato.html) | Formulário de contato (ver nota de configuração abaixo) |
| [`styles.css`](styles.css) | Estilo compartilhado (marca, responsivo, animações) |
| [`site.js`](site.js) | Animações de scroll-reveal (progressive enhancement) |
| [`favicon.svg`](favicon.svg) | Ícone (metáfora de lente/olhar) |

### Configurar o formulário de contato

O formulário em `contato.html` está pronto, mas precisa de um destino para os envios (site estático não envia e-mail sozinho). Opções sem backend:

- **Formspree** (funciona em qualquer host): crie um formulário grátis em formspree.io e troque `SEU_FORM_ID` no atributo `action` do `<form>` pelo ID gerado.
- **Netlify Forms** (se hospedar na Netlify): adicione `data-netlify="true"` ao `<form>` e remova o `action` do Formspree.

Enquanto não configurado, o e-mail `contato@visione.com.br` (também placeholder) fica disponível na lateral da página.

## Documentação

- [**Como Será o Negócio**](docs/o-negocio.md) — documento-síntese que explica o negócio de ponta a ponta; **comece por aqui**
- [Desenho do Negócio (visual)](docs/desenho-do-negocio.html) — versão de uma página para apresentar/exportar (abrir no navegador; imprimir → salvar como PDF)
- [Mapa de Consolidação](docs/mapa-de-consolidacao.md) — reconcilia os três artefatos (textos v0.1/v1.0 + imagem "Desenho do Negócio")
- [Decisões em Aberto](docs/decisoes-em-aberto.md) — registro consolidado de todas as questões pendentes, com recomendação para cada
- [Pauta de Decisões (visual)](docs/decisoes-pauta.html) — uma página para imprimir e preencher na reunião de sócios (abrir no navegador; imprimir → salvar como PDF)
- [Documento Estratégico — Empresa de Inteligência em Gestão Empresarial](docs/documento-estrategico-empresa.md) — visão ampla da empresa: propósito, 8 pilares, fluxo de conhecimento, possíveis sócios e visão de longo prazo (v0.1)
- [Arquitetura Estratégica do Ecossistema Visione](docs/arquitetura-estrategica.md) — recorte do produto Visione: 4 pilares, produtos, jornadas e questões estratégicas (v1.0)
- `image.png` — "Desenho do Negócio": síntese visual em 8 pilares com fontes de receita, time fundador e jornada do cliente

### Detalhamento dos pilares

- [Os 8 Pilares — índice e template](docs/pilares/README.md) — todos detalhados ✅
  - [1 — Modelo Geral de Gestão](docs/pilares/01-modelo-geral-de-gestao.md) · [2 — Frameworks Setoriais](docs/pilares/02-frameworks-setoriais.md) · [3 — Plataforma](docs/pilares/03-plataforma.md) · [4 — Consultoria](docs/pilares/04-consultoria.md)
  - [5 — Educação](docs/pilares/05-educacao.md) · [6 — Comunicação](docs/pilares/06-comunicacao.md) · [7 — Jogos de Empresas](docs/pilares/07-jogos-de-empresas.md) · [8 — Base de Casos](docs/pilares/08-base-de-casos.md)

### Plataforma (Pilar 3)

- [Plano de Arquitetura da Plataforma](docs/plataforma/01-plano-arquitetura.md) — stack, decisão build-vs-fork, modelo de domínio, mapa de módulos e roadmap por fases (v0.1)

> **Modelo canônico:** 8 pilares (texto v0.1 + imagem). O documento Visione v1.0 (4 pilares) é um recorte anterior cujos pilares são subconjunto dos 8 — ver mapa de consolidação.

## Os quatro pilares

| Pilar | Papel | Pergunta que responde |
|-------|-------|------------------------|
| **Modelo de Gestão** | Ativo intelectual: filosofia, princípios, processos, padrões | Como uma empresa deve funcionar? |
| **Consultoria** | Transforma o modelo em realidade | Como implantar? |
| **Auditoria** | Verifica aderência e maturidade | Estamos seguindo o modelo? |
| **Plataforma** | Ambiente digital que dá escala | Como registrar e acompanhar tudo? |
