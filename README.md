# nxg-sports-micro-frontends-example

This repository provides examples of how to use the nxg-sports micro-frontends in different frameworks: Next.js, Svelte, Vue, and Vanilla JS. Each framework is implemented as a separate app under the `apps/` directory, demonstrating integration and shared code usage via the `packages/shared` package.

## Quick Start

### 1. Install Dependencies

```sh
pnpm install
```

### 2. Configure

Edit `packages/shared/constants.js` with your values (obtain from official NSoft documentation):

```javascript
export const TENANT_ID = "your-tenant-id";
export const ENVIRONMENT = "staging"; // or "production"
export const MICRO_FRONTEND_URL = "<url-from-documentation>";
export const IGNITE_SDK_URL = "<url-from-documentation>";
```

### 3. Run an App

```sh
pnpm dev:vue       # Start Vue app
pnpm dev:svelte    # Start SvelteKit app
pnpm dev:vanilla   # Start Vanilla JS app
pnpm dev:nextjs    # Start Next.js app
```

All apps run at [http://localhost:5173](http://localhost:5173) by default.

> **Note:** Only run one app at a time to avoid port conflicts.

## Project Structure

- `apps/`
  - `nextjs/`: Next.js application
  - `svelte/`: SvelteKit application
  - `vanilla/`: Vanilla JS application
  - `vue/`: Vue.js application
- `packages/shared/`: Shared code and constants used by all apps

## Configuration

All configuration is centralized in `packages/shared/constants.js`:

| Variable             | Description                             |
| -------------------- | --------------------------------------- |
| `TENANT_ID`          | Your unique tenant ID provided by NSoft |
| `ENVIRONMENT`        | "staging", "production"                 |
| `IGNITE_SDK_URL`     | URL for the Ignite SDK script           |
| `MICRO_FRONTEND_URL` | URL for micro-frontend components       |

## Shared Package (`packages/shared`)

Contains code and constants used by all micro-frontends. Import shared modules in each app as needed.
