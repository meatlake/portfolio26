# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager: **pnpm** (lockfile: `pnpm-lock.yaml`).

- `pnpm dev` — Vite dev server with HMR
- `pnpm build` — runs `type-check` and `build-only` in parallel via `npm-run-all2`
- `pnpm type-check` — `vue-tsc --build` (incremental; `.tsbuildinfo` is written to `node_modules/.tmp/`)
- `pnpm build-only` — Vite build without type-check
- `pnpm preview` — preview production build
- `pnpm lint` — runs lint steps in series: `lint:oxlint` then `lint:eslint` (both with `--fix`)
- `pnpm format` — Prettier on `src/`

The lint pipeline order matters: oxlint runs first as a fast pre-pass, and ESLint then runs with `eslint-plugin-oxlint` configured to skip rules already covered by oxlint (see [eslint.config.ts](eslint.config.ts)).

## Architecture

Vue 3 SPA scaffolded from `create-vue`. Stack: Vue 3 + TypeScript + Vite + Pinia + Vue Router 5.

- Entry: [src/main.ts](src/main.ts) wires Pinia and the router into the root [App.vue](src/App.vue), mounted at `#app`.
- Router: [src/router/index.ts](src/router/index.ts) uses `createWebHistory(import.meta.env.BASE_URL)`. **Routes array is currently empty** — add routes here as views are introduced.
- Stores: Pinia stores live in [src/stores/](src/stores/) using the **composition-API `defineStore` form** (setup function returning refs/computeds), as in [src/stores/counter.ts](src/stores/counter.ts).
- Path alias: `@/*` → `./src/*` (configured in both [vite.config.ts](vite.config.ts) and [tsconfig.app.json](tsconfig.app.json)).

Note: The project is a fresh scaffold — `App.vue` is a placeholder, the router has no routes, and only a sample counter store exists. Treat early work as building out the initial structure, not modifying established patterns.

## TypeScript

- Config is split: [tsconfig.app.json](tsconfig.app.json) (app code, extends `@vue/tsconfig/tsconfig.dom.json`) and [tsconfig.node.json](tsconfig.node.json) (Vite/tooling). The root [tsconfig.json](tsconfig.json) is just project references.
- `noUncheckedIndexedAccess` is **enabled** — array/object index access yields `T | undefined` and must be narrowed.
- TypeScript version is `~6.0.0` (paired with `vue-tsc ^3.2.6`).

## Conventions

- Prettier: no semicolons, single quotes, `printWidth: 100` ([.prettierrc.json](.prettierrc.json)).
- Node engine: `^20.19.0 || >=22.12.0` ([package.json](package.json)).
- ESM-only project (`"type": "module"`).
