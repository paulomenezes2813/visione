# Pilar 7 — Jogos de Empresas

> Versão 0.1.

---

## 1. Em uma frase

Os Jogos de Empresas são **simuladores de gestão** que permitem aos gestores praticar decisões em um ambiente seguro — aprendendo pela experiência, não só pela teoria.

---

## 2. Papel no ecossistema

Acelera o aprendizado e cria **engajamento e diferenciação**. É uma porta de entrada de marca (atrai e encanta), um produto educacional por si só, e um reforço prático do modelo: o gestor *sente* na simulação as consequências das decisões que o modelo prega.

---

## 3. Escopo / o que inclui

- **simuladores por segmento** (ex.: Agro, Hotelaria, Restaurantes, Logística, Indústria, Saúde);
- **competições/campeonatos** entre equipes;
- **mecânica de rodadas** com decisões e consequências;
- **debrief pedagógico** (ligar a experiência do jogo aos conceitos do modelo).

---

## 4. Como funciona

Referência concreta já em desenvolvimento: **Banana Chain** (repo `visiongame`) — jogo da cadeia produtiva da bananicultura.

- equipes gerenciam uma fazenda por **12 rodadas (3 anos contábeis)**, decidindo sobre campo, pessoas, mercado e finanças;
- cada escolha reverbera na qualidade da fruta, no mercado e na saúde do negócio;
- o **motor de cálculo roda no servidor** — ninguém vê as fórmulas, só as consequências;
- a competição acontece em **campeonatos**, com **equipes** de empresas disputando desempenho;
- plataforma **multi-tenant** com 3 papéis: superadmin (operador) · admin da empresa · jogador.

```text
Campeonato (evento)
  └── Empresa → Organização → Equipe → Jogadores (1 líder)
                                   └── Partida (a equipe joga; o líder fecha a rodada)
```

Stack alinhada ao padrão do time (NestJS + Prisma + Postgres + React/Vite/Tailwind), o que facilita integração futura com a Plataforma.

---

## 5. Entregáveis e produtos

- **jogos avulsos** (licença por campeonato/turma);
- **campeonatos corporativos** (empresas inscrevem equipes);
- **módulo de imersão** dentro de programas de educação/consultoria;
- **eventos de marca** (campeonatos abertos como atração).

---

## 6. Conexões

- **Pilar 1 (Modelo):** o jogo materializa, na prática, os conceitos do modelo.
- **Pilar 2 (Frameworks):** cada segmento pode ter seu jogo (espelhando o framework setorial).
- **Pilar 5 (Educação):** o jogo é uma metodologia de ensino experiencial.
- **Pilar 6 (Comunicação):** campeonatos geram engajamento e conteúdo de marca.
- **Pilar 3 (Plataforma):** stack compatível permite integrar autenticação, turmas e certificações.

---

## 7. Métricas de sucesso

- nº de jogadores e equipes participantes;
- nº de campeonatos realizados;
- ganho de aprendizado medido (pré/pós);
- conversão de participantes do jogo em leads de consultoria/plataforma;
- receita de jogos/campeonatos.

---

## 8. Questões em aberto

1. **Portfólio:** quantos/quais jogos priorizar além do Banana Chain (Agro)?
2. **Integração:** o jogo vira módulo da Plataforma Visione ou produto/app separado que compartilha login?
3. **Modelo de receita:** licença por campeonato, por turma, ou incluído em pacotes de educação?
4. **Reaproveitamento de motor:** quanto da engine do Banana Chain serve de base para novos segmentos?
