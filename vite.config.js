import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',

  build: {
    outDir: 'dist',
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
    host: '0.0.0.0',
    port: 4173,

    // Same allowlist for `vite preview`, in case the preview proxies the built build
    allowedHosts: ['mh1wxgi4qz.c40.airoapp.ai'],
  },
})