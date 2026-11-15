import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://rohitgulia.github.io/personalwebsite/ on GitHub Pages.
export default defineConfig({
  base: '/personalwebsite/',
  plugins: [react()],
});
