// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import node from '@astrojs/node';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ncashin.dev',
  integrations: [mdx(), sitemap(), tailwind()],
  output: 'server',

  adapter: node({
    mode: 'standalone',
  }),
});