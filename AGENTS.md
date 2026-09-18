# EvoluApp — Agent Instructions

Before making an engineering decision, read in this order:

## 1. Polaris Decision Framework

1. [Polaris README](framework/README.md)
2. [Engineering Knowledge Flow](framework/engineering-knowledge-flow.md)
3. [Decision Framework](framework/decision-framework/README.md)
4. [Human and Agent Authority](framework/decision-framework/human-and-agent-authority.md)
5. [Readiness Gates](framework/decision-framework/readiness-gates.md)

## 2. Project knowledge

Read in genealogical order; each layer is authoritative over the layers that follow it.

1. [Project docs](docs/README.md)
2. `docs/domain/` — business knowledge independent of product and technology
3. `docs/product/` — observable behaviour promised by the product
4. `docs/platform/` — platform capabilities and guarantees
5. `docs/architecture/` — structural decisions and ADRs
6. `docs/implementation-planning/` — incremental strategy and work packages
7. `docs/engineering-contract/` — project-specific implementation agreements

## Authority rules

- Do not make domain, product, architecture, or implementation decisions without tracing authority through the framework.
- Do not fill gaps in a prior layer silently. Surface missing knowledge for human deliberation.
- Do not promote experimental content or unvalidated hypotheses as decisions.
- Treat the existing PWA and its design-system audit as reference evidence, not as the approved RPG product specification.

## Project conventions

- Primary language: TypeScript.
- Runtime: Node.js 22 or newer.
- Monorepo tool: pnpm workspaces.
- Current application: `apps/pwa`.
- Shared modules belong in `packages/` when their reuse is established.
- Validate the PWA with `pnpm build:pwa` and `pnpm lint:pwa`.
- Update Polaris with `git submodule update --remote framework`.
