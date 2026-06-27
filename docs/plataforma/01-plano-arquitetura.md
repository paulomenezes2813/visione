# Plataforma Visione — Plano de Arquitetura

> Pilar 3 do ecossistema (ver [Mapa de Consolidação](../mapa-de-consolidacao.md)). Domínio do sócio **Paulo** (tecnologia & produto).
> Status: **proposta inicial para discussão.** Versão 0.1.

---

## 1. Papel da Plataforma no ecossistema

A Plataforma é o **backbone digital** que dá escala aos demais pilares. Ela não substitui pessoas — organiza, registra e dá visibilidade. Ela é o ambiente **compartilhado entre clientes e consultores**.

| Pilar | Como a Plataforma o serve |
|-------|----------------------------|
| 1. Modelo Geral de Gestão | Materializa o modelo: estrutura organizacional, UGBs, indicadores, processos, rituais, governança. |
| 2. Frameworks Setoriais | Templates por segmento (indicadores/processos/checklists pré-configurados) aplicáveis a uma empresa. |
| 4. Consultoria | Ferramenta de trabalho do consultor: diagnóstico, implantação, acompanhamento, planos de ação. |
| (Auditoria — função) | Módulo de auditoria de gestão e maturidade, relatórios e planos. |
| 8. Base de Casos | Histórico organizacional vira insumo de benchmarking e casos. |

Os pilares **5 (Educação)**, **6 (Comunicação)** e **7 (Jogos)** ficam, a princípio, **fora** do escopo da plataforma central (são produtos/sistemas próprios — LMS, site/conteúdo, simuladores como o `visiongame`), mas integram-se a ela (SSO, certificações, links).

---

## 2. Decisão estratégica nº 1 — Construir do zero vs. evoluir o `visiometrics-v2`

> **Esta é a decisão que define todo o resto. Recomendação abaixo, mas é sua chamada.**

O `visiometrics-v2` (NestJS + Prisma + Postgres + React/Vite/Tailwind) **já implementa ~60 módulos** que são quase um espelho dos conceitos do modelo de gestão: `companies`/`company-modules`/`members` (multi-tenant modular), `equipes`, `indicadores`, `processos`, `acoes-melhoria`, `pdis`, `auditoria-gestao`, `maturidade-*`, `certificacoes`, `treinamentos`, além do suite 5S.

**Opções:**

| Opção | Prós | Contras |
|-------|------|---------|
| **A. Evoluir o visiometrics-v2** como base da Plataforma Visione | Aproveita ~60 módulos prontos, multi-tenant, auth, storage e deploy já funcionando; MVP em semanas | Carrega legado/dívida; conceitos específicos do VisioMetrics (5S, Vizo) podem não casar 1:1 com o modelo Visione; renomeação/refactor |
| **B. Projeto novo (`empresadegestao`)** adotando o PADRÃO, **portando** módulos do visiometrics conforme necessário | Domínio limpo alinhado ao modelo canônico; só traz o que serve | Reescreve muita coisa que já existe; MVP mais lento |
| **C. Híbrido** — novo repo, **copiar/adaptar** os módulos-núcleo (auth, companies, indicadores, processos, equipes, auditoria, maturidade) e descartar o resto | Equilíbrio: base sólida sem o legado irrelevante | Esforço inicial de curadoria do que portar |

**Recomendação: Opção C.** Começar `empresadegestao` limpo sobre o PADRÃO, portando os módulos-núcleo já validados do visiometrics-v2 e deixando de fora o que é específico daquele produto. Mantém o domínio alinhado ao modelo Visione sem jogar fora trabalho comprovado.

> ✅ **DECIDIDO (2026-06-27): Opção C — Híbrido.** Repo novo `empresadegestao` sobre o PADRÃO, portando apenas os módulos-núcleo validados do visiometrics-v2 (auth, companies, módulos, indicadores, processos, equipes/UGB, auditoria, maturidade) e descartando o específico do VisioMetrics (5S, Vizo, etc.). O `visiometrics-v2` permanece **somente leitura** (fonte de referência para copiar/adaptar).

---

## 3. Stack (conforme `PADRAO_ARQUITETURA_DESENVOLVIMENTO.md`)

| Camada | Tecnologia |
|--------|------------|
| API | Node + TypeScript + **NestJS 10** |
| ORM / DB | **Prisma 5 + PostgreSQL** |
| Auth | JWT (passport-jwt) + refresh tokens, bcrypt |
| Validação | class-validator / class-transformer + `ValidationPipe` global |
| Web | **React 18 + Vite 6 + TypeScript + Tailwind 3** |
| Dados remotos | **TanStack Query + Axios** (instância única) |
| Forms | react-hook-form + zod |
| UI | Radix UI + design system (shadcn-style), recharts, sonner |
| Storage | **MinIO/S3** (`@aws-sdk/client-s3`), docker-compose local |
| Jobs (opcional) | BullMQ + Redis (importações, relatórios, benchmarking) |
| Deploy | **Railway** (`railway.json` por subpasta) |

Monorepo: `backend/` + `frontend/` + `docs/`, módulos por domínio (`module/controller/service/dto`), prefixo global `/api`.

---

## 4. Modelo de domínio (núcleo)

Entidades centrais e como mapeiam ao modelo de gestão. (✅ = já existe no visiometrics-v2 e pode ser portado.)

### Multi-tenant & acesso
- **Company** ✅ — empresa cliente (tenant).
- **Module / CompanyModule** ✅ — habilitação modular por empresa (monetização por módulo).
- **User / Member / RefreshToken** ✅ — usuários e vínculo usuário↔empresa↔papel.
- **Papéis:** SuperAdmin (Visione) · Consultor · Auditor · Gestor (cliente) · Colaborador (cliente).

### Estrutura organizacional
- **UGB** (Unidade Gerencial Básica) — *conceito-chave do modelo; mapear sobre `Equipe`* ✅. Hierarquia organizacional (área → UGB).
- **Papel / Cargo** dentro da UGB.

### Gestão por indicadores
- **Indicador** ✅, **VinculoIndicador** ✅ (indicador ↔ UGB/responsável), **Meta**, **RegistroDado** ✅ (séries históricas/realizado).

### Processos & padrões
- **Processo** ✅, **DocumentoProcesso** ✅, **VinculoProcessoEquipe** ✅.

### Execução & melhoria
- **PlanoAcao / AcaoMelhoria** ✅ (PDCA), **PDI / AcaoPDI** ✅ (desenvolvimento de pessoas).
- **Reunião / Fórum de Gestão** — *novo* (agenda, pauta, atas, encaminhamentos ligados a ações/indicadores).

### Auditoria & maturidade
- **AuditoriaGestao** ✅, **ConfiguracaoMatrizMaturidade / SnapshotMatrizMaturidade / PlanoAcaoMaturidade** ✅.

### Frameworks setoriais (Pilar 2)
- **Framework / Template setorial** — *novo*: pacote de indicadores/processos/checklists pré-configurados aplicável a uma Company por segmento.

### Base de casos & histórico (Pilar 8)
- **Histórico organizacional** (event/audit log) ✅ `AuditLog` — base para casos e benchmarking.

---

## 5. Mapa de módulos da Plataforma (alvo)

```
empresadegestao/backend/src/
├── auth/                 ✅ portar
├── companies/            ✅ portar (tenant)
├── modules/ + company-modules/  ✅ portar (habilitação modular)
├── users/ + members/     ✅ portar
├── org/                  ⟳ UGBs/estrutura (a partir de equipes)
├── indicadores/          ✅ portar  (+ metas, registros-dado)
├── processos/            ✅ portar  (+ documentos-processo)
├── planos-acao/          ✅ portar  (acoes-melhoria / PDCA)
├── pdi/                  ✅ portar
├── reunioes/             ➕ novo    (fóruns de gestão, atas)
├── auditoria/            ✅ portar  (auditoria-gestao)
├── maturidade/           ✅ portar
├── frameworks/           ➕ novo    (templates setoriais)
├── dashboards/           ⟳ agregações/visões
├── casos/                ➕ novo    (base de casos, fase 2)
├── storage/              ✅ portar  (MinIO/S3)
└── common/ + prisma/ + config/  ✅ base
```
Legenda: ✅ portar do visiometrics-v2 · ⟳ adaptar/renomear · ➕ construir novo.

---

## 6. Roadmap por fases (alinhado aos "Próximos Passos")

### Fase 0 — Fundação (scaffold)
Monorepo, PADRÃO aplicado, auth + multi-tenant (Company/Module/User/Member), design system base, deploy Railway + Postgres + MinIO. *Decidir Opção A/B/C antes.*

### Fase 1 — MVP "Implantação do Modelo" (núcleo de valor)
Estrutura organizacional (UGBs) · Indicadores + metas + registro de dados · Processos + documentos · Planos de ação (PDCA) · Dashboards básicos.
> Entrega o suficiente para um **projeto-piloto de consultoria** registrar a gestão de um cliente.

### Fase 2 — Acompanhamento & rituais
Reuniões/fóruns de gestão (pauta/ata/encaminhamentos) · PDI · alertas/notificações · histórico organizacional.

### Fase 3 — Auditoria & maturidade
Módulo de auditoria de gestão · matriz de maturidade · relatórios independentes + planos de ação.

### Fase 4 — Escala
Frameworks setoriais (templates) · benchmarking entre empresas · base de casos · integrações (Educação/SSO, Jogos, Comunicação).

---

## 7. Decisões em aberto (precisam de você)

1. **Opção A / B / C** da seção 2 (define todo o resto).
2. **"Visione" é a empresa, o produto ou ambos?** Afeta nomes de domínio/branding na plataforma.
3. **Multi-tenant:** schema único com `companyId` (como o visiometrics) ou schema-por-tenant? *Recomendo schema único.*
4. **Monetização modular:** confirmar que `CompanyModule` será o mecanismo de planos/cobrança por módulo.
5. **"UGB" = `Equipe`?** Confirmar se reusamos o conceito de Equipe ou criamos entidade UGB própria.
6. Escopo do MVP: a Fase 1 acima é o corte certo para o primeiro piloto?

---

## 8. Próximo passo sugerido

Após você decidir a **Opção A/B/C** e validar o corte do MVP (Fase 1), eu posso:
- gerar o **scaffold** do monorepo (backend NestJS + frontend Vite) já com auth + multi-tenant, ou
- detalhar o **schema Prisma** do núcleo (Company, Module, User/Member, UGB, Indicador, Meta, RegistroDado, Processo, PlanoAcao) antes de escrever código.
