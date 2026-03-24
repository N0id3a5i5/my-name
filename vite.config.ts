import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  // Required for pdfjs-dist worker to be copied into build output
  optimizeDeps: {
    exclude: ['pdfjs-dist'],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
    // Copy the pdf.js worker so it is reachable at runtime
    assetsInlineLimit: 0,
  },
  worker: {
    format: 'es',
  },
});
