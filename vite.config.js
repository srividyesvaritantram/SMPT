import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Production hosts (GoDaddy/Hostinger Node or container runtimes) usually
// provide the port through PORT. Fall back to Vite's default preview port.
const previewPort = Number(process.env.PORT) || 4173

export default defineConfig({
  // Only one React plugin instance. Do not add react-refresh, Babel
  // react-refresh plugins, or @vitejs/plugin-react-swc alongside this one:
  // duplicated transforms can inject development Fast Refresh code.
  plugins: [react()],
  base: '/',

  build: {
    outDir: 'dist',
    // Always produce a clean, production-only bundle.
    emptyOutDir: true,
    sourcemap: false,
  },

  server: {
    host: '0.0.0.0',
    port: 5173,

    // Hostinger preview domain (explicit allowlist; localhost is always allowed)
    allowedHosts: ['mh1wxgi4qz.c40.airoapp.ai'],

    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },

  preview: {
    // `npm start` serves the *built* app from dist/ — never the Vite dev server.
    host: '0.0.0.0',
    port: previewPort,
    strictPort: true,
    // The production domain is not known at build time, so do not reject it.
    allowedHosts: true,
  },
})
