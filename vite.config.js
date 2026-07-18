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
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor';
            }
            if (id.includes('@mui') || id.includes('@emotion')) {
              return 'ui';
            }
            if (id.includes('framer-motion') || id.includes('gsap')) {
              return 'motion';
            }
          }
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
