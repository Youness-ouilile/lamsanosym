import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    cors: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': [
            'react',
            'react-dom',
          ],
          'icons': [
            'lucide-react',
          ],
        },
      },
    },
  },
  preview: {
    port: 4173,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'lucide-react',
    ],
  },
})
