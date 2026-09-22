import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'node:url';

// Pure SSG only — no hybrid or server output (see .cursorrules)
export default defineConfig({
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [tailwind(), sitemap()],
  site: process.env.SITE_URL || 'https://example.com',
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
});
