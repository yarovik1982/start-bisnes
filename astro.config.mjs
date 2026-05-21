// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/postcss';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

const site = process.env.URL ?? process.env.DEPLOY_URL ?? 'https://www.example.com';

export default defineConfig({
  output: 'static',
  site,
  integrations: [sitemap(), robotsTxt()],

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Oswald',
      cssVariable: '--font-display',
      weights: ['400', '600', '700'],
      styles: ['normal'],
      subsets: ['latin', 'cyrillic'],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-body',
      weights: ['400', '500', '700'],
      styles: ['normal'],
      subsets: ['latin', 'cyrillic'],
    },
  ],

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
