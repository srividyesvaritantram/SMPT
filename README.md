# Sri Mahavidyesvari — Frontend

React + Vite frontend for the Sri Mahavidyesvari web application.

## Setup

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server (http://localhost:5173) |
| `npm run build` | Build for production (also runs the production-output guard) |
| `npm run preview` | Preview production build (http://localhost:4173) |
| `npm start` | Production entrypoint — serves the built `dist/` app |

## Deployment

Always deploy the generated `dist/` folder, never the project root or the dev
server. `npm start` runs `vite preview`, which serves the production build; it
must therefore be preceded by `npm run build`.

`npm run build` automatically runs `scripts/verify-build.mjs`, which fails if
React Fast Refresh/HMR code (`$RefreshReg$`, `$RefreshSig$`, `@react-refresh`),
raw `/src/` entrypoints, or missing hashed bundles are found in `dist/`.

## Tech Stack

- React 19
- Vite 8
- React Router DOM — client-side routing
- Zustand — state management
- TanStack Query — server state / data fetching
- MUI (Material UI) — component library
- Framer Motion + GSAP — animations
- Axios — HTTP client
- React Hook Form — form handling
- Swiper — carousels
