import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base: './'` keeps the build portable: it works at a domain root, on a
// GitHub Pages project path (/yu-portfolio/), or on Vercel/Cloudflare.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
});
