import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'node:url';

// Pure SSG only — no hybrid or server output (see .cursorrules)
export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
  site: process.env.SITE_URL || 'https://example.com',
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
});
