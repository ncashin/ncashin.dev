// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ncashin.dev',
  vite: {
    plugins: [tailwindcss()]
  }
});