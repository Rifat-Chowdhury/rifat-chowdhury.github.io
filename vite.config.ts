import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Rifat-Chowdhury.github.io/',  // Use your repo name here
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
