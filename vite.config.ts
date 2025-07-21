import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite';


// https://vite.dev/config/
export default defineConfig({
  root: './packages/frontend',
  optimizeDeps: {
    exclude: ['js-big-decimal'],
  },
  plugins: [react()],
});
