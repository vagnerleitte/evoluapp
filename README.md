# EVOLUA

Monorepo do EVOLUA, organizado para separar aplicações e módulos reutilizáveis.

## Estrutura

- `apps/pwa` — protótipo web responsivo extraído do material de referência.
- `packages` — espaço reservado para pacotes compartilhados, como domínio, UI, validações e integrações.

## Ambiente e comandos

Use Node.js 22 ou superior e pnpm 10 ou superior. Para ativar o pnpm via Corepack:

```sh
corepack enable
corepack install
```

```sh
pnpm install --frozen-lockfile
pnpm dev:pwa
pnpm build:pwa
pnpm lint:pwa
```

O protótipo atual permanece um PWA. A implementação React Native será planejada após a validação funcional e a estimativa no Polaris.
