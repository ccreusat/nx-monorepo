# Edifice Frontend

Monorepo with frontend librairies

## Prerequisites

- `pnpm: >= 8`
- `node: >= 18 | 20`

## Getting Started

`pnpm install`

### Storybook

`pnpm nx run docs:storybook`

### Build

All libs:

`pnpm nx run-many -t build`

One lib:

`pnpm nx build client`

### Test

All libs:

`pnpm nx run-many -t test`

One lib:

`pnpm nx test client`

### Lint

All libs:

`pnpm nx run-many -t lint`

One lib:

`pnpm nx lint client`

### Lint Fix

All libs:

`pnpm nx run-many -t lint --fix`

One lib:

`pnpm nx lint client --fix`

### Prettier

`pnpm nx format`
