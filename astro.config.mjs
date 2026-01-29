import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  integrations: [], // Leave this array empty or for other integrations
  vite: {
    plugins: [tailwind()],
  },
});