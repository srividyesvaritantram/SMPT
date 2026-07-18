import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Ensures assets are referenced from the root — required for Hostinger shared hosting
  base: '/',

  build: {
    // Output directory (GitHub Actions will upload this to Hostinger public_html)
    outDir: 'dist',

    // Generate smaller, cache-friendly chunks
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@mui/material', '@emotion/react', '@emotion/styled'],
          motion: ['framer-motion', 'gsap'],
        },
      },
    },
  },

  server: {
    port: 5173,
    // Proxy API calls to local Spring Boot during development
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
})
