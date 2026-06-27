# Decisões em Aberto — Registro Consolidado

> Reúne, em um só lugar, todas as questões em aberto levantadas no detalhamento dos 8 pilares, no [plano da plataforma](plataforma/01-plano-arquitetura.md) e no [mapa de consolidação](mapa-de-consolidacao.md).
> Para cada decisão há uma **recomendação**, um **responsável sugerido** e as **dependências**.
> As recomendações são pontos de partida para a discussão entre sócios — não decisões tomadas.
> Versão 0.1.

**Responsáveis (referência):** Fábio = metodologia/consultoria · Paulo = tecnologia/produto · Cyro = mercado/comercial · Erick = comunicação/marca · **Sócios** = decisão coletiva.

---

## Decisões fundamentais (decidir primeiro — destravam as demais)

Estas três decisões são pré-requisito para várias outras. Recomenda-se resolvê-las antes de avançar.

### D1 · "Visione" é a empresa, o produto/plataforma, ou ambos?
- **Onde aparece:** Pilares 1, 3, 6; mapa de consolidação. **Bloqueia:** marca, comunicação, naming da plataforma, contratos.
- **Tensão:** o briefing de marca trata Visione como a *plataforma SaaS*; os documentos de negócio o tratam como o *ecossistema inteiro*.
- **Recomendação:** adotar **Visione como marca-mãe do ecossistema** (empresa/ecossistema), com a plataforma como "Plataforma Visione". Marca única reduz custo de construção de autoridade e evita confundir o mercado.
- **Responsável:** Sócios (lidera Erick).

### D2 · A rede de entrega: consultores internos ou credenciados?
- **Onde aparece:** Pilares 4, 5; visão de longo prazo. **Bloqueia:** escala, certificação, modelo de receita da consultoria/educação, proteção de PI.
- **Recomendação:** começar **100% interno** nos primeiros pilotos (garantir qualidade e amadurecer o playbook) e desenhar o **programa de credenciamento como fase 2**, dependente de a metodologia estar documentada e a certificação existir.
- **Responsável:** Fábio (metodologia/certificação) + Sócios (modelo).

### D3 · Propriedade dos dados dos clientes e do modelo (PI + LGPD)
- **Onde aparece:** Pilares 1, 3, 8. **Bloqueia:** base de casos, benchmarking, contratos de cliente, credenciamento.
- **Recomendação:** definir desde já, em contrato, que dados de clientes podem ser **agregados e anonimizados** para benchmarks/casos; proteger o modelo via **marca registrada + licença de uso + cláusulas de confidencialidade** com credenciados. Tratar LGPD como requisito desde o MVP da plataforma.
- **Responsável:** Sócios + apoio jurídico.

---

## Tema A — Identidade, marca e posicionamento

| ID | Questão | Recomendação | Resp. |
|----|---------|--------------|-------|
| A1 | Visione = empresa/produto/ambos? | Ver **D1** (marca-mãe do ecossistema) | Sócios/Erick |
| A2 | Quanto do método é público (atração) vs proprietário? | Publicar **conceitos e o "porquê"** (6 dimensões, premissa) para gerar autoridade; manter **fórmulas, instrumentos e playbooks** restritos a clientes/licenciados | Erick + Fábio |
| A3 | Comunidade: gratuita ou paga, e onde vive? | **Camada gratuita** para atração (topo de funil) + **camada premium** paga integrada à oferta; começar simples (ex.: newsletter + grupo) antes de plataforma própria | Erick |
| A4 | Cadência e orçamento de comunicação | Definir um **mínimo viável** (1 canal âncora — ex. podcast/newsletter) antes de escalar; orçamento atrelado ao caixa dos primeiros contratos | Erick/Sócios |

---

## Tema B — Modelo de negócio e receita

| ID | Questão | Recomendação | Resp. |
|----|---------|--------------|-------|
| B1 | A auditoria é função ou produto vendável? | **Ambos:** função dentro do modelo (governança) **e** oferta avulsa ("Auditoria Periódica") para empresas maduras | Fábio |
| B2 | Frameworks setoriais: vendidos à parte ou embutidos? | **Embutidos** na implantação/licenciamento no início (diferencial), avaliar venda avulsa quando houver catálogo maduro | Sócios |
| B3 | Educação: gratuita vs paga; B2B vs B2C | **Freemium:** conteúdo introdutório gratuito (atração) + **certificações e trilhas pagas**; foco inicial **B2B** (clientes e consultores) | Fábio/Erick |
| B4 | Jogos: licença por campeonato, turma ou incluído? | Usar como **atração/imersão incluída** em programas no início; cobrar por **campeonato corporativo** quando virar produto | Paulo/Cyro |
| B5 | Consultoria: projeto fechado, retainer ou por resultado? | **Implantação por projeto** (fases 90/180/365) + **retainer mensal** de acompanhamento; "por resultado" só quando houver baseline confiável | Cyro/Fábio |
| B6 | Monetização modular da plataforma | **Sim** — usar `CompanyModule` como mecanismo de planos/cobrança por módulo | Paulo |

---

## Tema C — Go-to-market e priorização

| ID | Questão | Recomendação | Resp. |
|----|---------|--------------|-------|
| C1 | Quais 2–3 segmentos atacar primeiro? | Priorizar onde os sócios **já têm rede e casos** e o ticket justifica; o Agro já tem ativo (jogo Banana Chain) — forte candidato | Cyro/Sócios |
| C2 | Portfólio de jogos além do Banana Chain (Agro)? | **Não expandir** até validar o primeiro; reaproveitar o motor para o 2º segmento priorizado | Paulo |
| C3 | Sequência de lançamento dos pilares | Seguir os **próximos passos** já definidos: governança → societário → conteúdo/comunidade → consultoria → MVP plataforma → frameworks → pilotos | Sócios |

---

## Tema D — Metodologia e governança do conhecimento

| ID | Questão | Recomendação | Resp. |
|----|---------|--------------|-------|
| D-met1 | "Modelo de Consciência" (6 dimensões) é a espinha dorsal oficial? | **Sim** — adotá-lo como estrutura canônica do Modelo Geral; é o ativo mais diferenciado e já está documentado | Fábio |
| D-met2 | Governança do modelo: quem aprova mudanças e com que cadência? | Definir um **dono do modelo** (Fábio) + **revisão periódica** (ex.: trimestral) alimentada pela Base de Casos | Fábio |
| D-met3 | Governança dos frameworks setoriais (manutenção/versão) | Cada framework tem um **curador responsável**; versionar junto ao modelo | Fábio |
| D-met4 | Profundidade mínima de um framework "pronto para vender" | Definir checklist mínimo (processos-chave + indicadores + checklists + 1 caso) | Fábio |
| D-met5 | Certificação de consultores: critérios, exame, validade | Desenhar trilha + exame + recertificação; **pré-requisito do credenciamento (D2)** | Fábio |
| D-met6 | Quem documenta os casos e com que padrão? | Padrão único de caso (já definido no Pilar 8) + curadoria com cadência; **automatizar a partir da plataforma** o máximo possível | Fábio/Paulo |

---

## Tema E — Plataforma (técnicas)

| ID | Questão | Recomendação | Resp. |
|----|---------|--------------|-------|
| E1 | Multi-tenant: schema único vs schema-por-tenant | **Schema único** com `companyId` (padrão já validado no visiometrics-v2) | Paulo |
| E2 | "UGB" = entidade própria ou reuso de `Equipe`? | **Reusar/renomear `Equipe`** como UGB para não duplicar conceito | Paulo |
| E3 | Escopo do MVP (Fase 1) é o corte certo? | **Sim** — UGBs + indicadores/metas/dados + processos + planos de ação + dashboards básicos; suficiente para o 1º piloto | Paulo |
| E4 | Bloqueadores de produção herdados do visiometrics-v2 | O repo novo **nasce com** RBAC, isolamento de tenant, segredos e LGPD resolvidos | Paulo |
| E5 | Jogos: módulo da plataforma ou app separado com SSO? | **App separado** (já existe `visiongame`) que **compartilha login/SSO**; integra certificações | Paulo |
| E6 | Educação: LMS próprio ou ferramenta de mercado? | Começar com **ferramenta de mercado integrada**; avaliar módulo próprio quando o volume justificar | Paulo/Fábio |

---

## Tema F — As 10 questões estratégicas originais (Visione v1.0)

Continuam válidas e em grande parte endereçadas acima; mapeamento:

| Questão original | Decisão relacionada |
|------------------|---------------------|
| 1. Qual o produto principal? | C3 / B-geral (definir âncora: plataforma + implantação) |
| 2. Modelo licenciável sem consultoria? | A2 / B2 |
| 3. Plataforma usável sem consultoria? | E3 (pequenas empresas: Modelo + Plataforma) |
| 4. Auditoria obrigatória? | B1 |
| 5. Quem pode implantar? | **D2** |
| 6. Haverá consultores credenciados? | **D2** |
| 7. Como certificar consultores? | D-met5 |
| 8. Como o modelo evolui sem perder essência? | D-met2 |
| 9. Como proteger a PI? | **D3** |
| 10. Como manter qualidade ao crescer? | D2 + D-met5 + E4 |

---

## Como usar este documento

1. Numa reunião de sócios, **decidir primeiro D1, D2 e D3** (destravam o resto).
2. Para cada decisão restante, registrar a escolha (aceitar a recomendação ou ajustar) e a data.
3. Decisões que viram definitivas devem ser **movidas para os documentos dos respectivos pilares** e marcadas como ✅ DECIDIDO (como já foi feito com a Opção C da plataforma).
