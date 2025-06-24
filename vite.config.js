import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          motion: ['framer-motion'],
          ui: ['swiper', 'react-icons'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'esbuild',
    // Enable source maps for debugging
    sourcemap: false,
    // Optimize for production
    target: 'esnext',
  },
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.VITE_PORT) || 6464,
    cors: true,
    allowedHosts: 'all',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
    // Hot reload settings for Docker
    watch: {
      usePolling: true,
      interval: 1000,
    },
    hmr: {
      host: '0.0.0.0',
      port: parseInt(process.env.VITE_PORT) || 6464,
    },
    // Ensure external access
    strictPort: false,
    origin: '*'
  }
})
