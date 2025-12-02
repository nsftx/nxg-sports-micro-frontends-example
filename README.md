# nxg-sports-micro-frontends-example

This repository provides examples of how to use the nxg-sports micro-frontends in different frameworks: Next.js, Svelte, Vue, and Vanilla JS. Each framework is implemented as a separate app under the `apps/` directory, demonstrating integration and shared code usage via the `packages/shared` package.

## Project Structure

- `apps/`
  - `nextjs/`: Next.js application
  - `svelte/`: SvelteKit application
  - `vanilla/`: Vanilla JS application
  - `vue/`: Vue.js application
- `packages/shared/`: Shared code and constants used by all apps

## Micro-Frontends Integration

Each app demonstrates how to:

- Integrate with a shared package (`packages/shared`) for internal use only (not published to npm). This package provides common code and constants for easier development and code sharing across micro-frontends.
- Implement a sportsbook feature as a micro-frontend
- Use framework-specific routing and layouts

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) (used for monorepo management)

### Install Dependencies

Run the following command from the root of the repository:

```sh
pnpm install
```

This will install dependencies for all apps and shared packages.

---

## Framework Setup Guides

### Next.js (`apps/nextjs`)

1. Navigate to the Next.js app:
   ```sh
   cd apps/nextjs
   ```
2. Start the development server:
   ```sh
   pnpm dev
   ```
3. Access the app at [http://localhost:3000](http://localhost:3000)

### SvelteKit (`apps/svelte`)

1. Navigate to the Svelte app:
   ```sh
   cd apps/svelte
   ```
2. Start the development server:
   ```sh
   pnpm dev
   ```
3. Access the app at [http://localhost:5173](http://localhost:5173)

### Vue.js (`apps/vue`)

1. Navigate to the Vue app:
   ```sh
   cd apps/vue
   ```
2. Start the development server:
   ```sh
   pnpm dev
   ```
3. Access the app at [http://localhost:5173](http://localhost:5173)

### Vanilla JS (`apps/vanilla`)

1. Navigate to the Vanilla JS app:
   ```sh
   cd apps/vanilla
   ```
2. Open `index.html` directly in your browser, or use a simple static server:
   ```sh
   pnpm serve
   ```

---

## Shared Package (`packages/shared`)

Contains code and constants used by all micro-frontends. Import shared modules in each app as needed.
