# Pilar 3 — Plataforma

> Versão 0.1. Detalhamento técnico aprofundado em [Plano de Arquitetura da Plataforma](../plataforma/01-plano-arquitetura.md).

---

## 1. Em uma frase

A Plataforma é o **ambiente digital** onde o modelo ganha escala — organiza a estrutura, os indicadores, os planos e a execução, e é usada **tanto pelos clientes quanto pelos consultores**.

---

## 2. Papel no ecossistema

É o **backbone digital** do negócio. Não substitui pessoas: amplia a capacidade delas e garante que o modelo seja executado com consistência, registrado e mensurável. Quanto maior a empresa, maior o valor da plataforma.

É também a principal fonte de **receita recorrente** (SaaS) e o que torna o negócio escalável — porque transforma conhecimento (que dependeria de pessoas) em software (que roda sozinho).

---

## 3. Escopo / o que inclui

- cadastro da **estrutura organizacional** e **UGBs**;
- **indicadores, metas e registro de dados**;
- **processos e documentos**;
- **planos de ação (PDCA)**;
- **reuniões e fóruns** de gestão (pauta, ata, encaminhamentos);
- **PDI** e desenvolvimento de pessoas;
- **auditoria de gestão** e **matriz de maturidade**;
- **dashboards, alertas e benchmarking**;
- **histórico organizacional** (base para casos);
- **gestão da implantação** (acompanhamento do roteiro pela consultoria).

---

## 4. Como funciona

A Plataforma é **multi-tenant e modular**: uma instância serve muitas empresas, e cada empresa habilita os módulos contratados.

```text
Visione (SaaS)
  └── Empresa cliente (tenant)
        ├── módulos habilitados (indicadores, auditoria, maturidade, …)
        ├── UGBs / equipes  →  pessoas e papéis
        ├── indicadores → metas → registros de dado → dashboards
        ├── processos → documentos → planos de ação
        └── auditorias → maturidade → planos de melhoria
  Consultor → acessa empresas que atende
  Auditor   → acessa o módulo de auditoria
```

**Stack** (padrão do time): NestJS + Prisma + PostgreSQL no backend; React + Vite + Tailwind + TanStack Query no frontend; armazenamento S3/MinIO; deploy Railway.

**Abordagem de construção (decidida):** Opção C — repo novo `empresadegestao` sobre o padrão de arquitetura, **portando os módulos-núcleo já validados** do `visiometrics-v2` (auth, multi-tenant, indicadores, processos, equipes/UGB, auditoria, maturidade) e construindo o que falta (reuniões, frameworks, base de casos).

---

## 5. Entregáveis e produtos

- **Licenciamento SaaS** (mensalidade por empresa, possivelmente por módulo/uso);
- **Assinatura de suporte e sucesso do cliente**;
- **Ambiente de trabalho do consultor** (ferramenta interna que também sustenta a Consultoria);
- **Dashboards e benchmarking** como diferencial de retenção.

---

## 6. Conexões

- **Pilar 1 (Modelo):** a plataforma é a materialização operacional do modelo — cada módulo corresponde a um instrumento.
- **Pilar 2 (Frameworks):** hospeda e aplica os templates setoriais.
- **Pilar 4 (Consultoria):** é a ferramenta de trabalho do consultor e onde a implantação é acompanhada.
- **Pilar 8 (Base de Casos):** o histórico organizacional registrado na plataforma é a matéria-prima dos casos e benchmarks.

---

## 7. Métricas de sucesso

- empresas ativas (tenants) e usuários ativos;
- receita recorrente (MRR) e churn;
- adoção real por módulo (uso, não só contratação);
- dados lançados na cadência (indicadores em dia, auditorias realizadas);
- NPS de clientes e de consultores.

---

## 8. Questões em aberto

1. **Multi-tenant:** schema único com `companyId` (recomendado) vs schema-por-tenant.
2. **Monetização modular:** confirmar `CompanyModule` como mecanismo de planos/cobrança.
3. **"UGB" = entidade própria ou reuso de `Equipe`?**
4. **Escopo do MVP** (Fase 1 do plano de arquitetura) é o corte certo para o primeiro piloto?
5. **Segurança/produção:** o `visiometrics-v2` tem bloqueadores conhecidos (RBAC, isolamento de tenant, segredos) — o repo novo deve nascer com isso resolvido.
