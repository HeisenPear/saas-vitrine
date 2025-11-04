// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://renaissance-web.fr',
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    imageService: true,
    imagesConfig: {
      domains: ['images.unsplash.com'],
      sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    }
  }),
  image: {
    domains: ['images.unsplash.com'],
  },
  compressHTML: true,
  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Custom configuration for different page types
      customPages: [
        'https://renaissance-web.fr/',
        'https://renaissance-web.fr/services',
        'https://renaissance-web.fr/tarifs',
        'https://renaissance-web.fr/contact',
        'https://renaissance-web.fr/a-propos',
        'https://renaissance-web.fr/realisations',
        'https://renaissance-web.fr/blog'
      ],
      filter: (page) => {
        // Exclude pages you don't want in the sitemap
        return !page.includes('/admin') && !page.includes('/draft');
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});