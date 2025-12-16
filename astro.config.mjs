// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ncashin.dev',
  integrations: [sitemap(), tailwind()],
  output: 'server',

  adapter: node({
    mode: 'standalone',
  }),
});