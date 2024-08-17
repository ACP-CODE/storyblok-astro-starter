import { defineConfig } from 'astro/config';
import { env, vite } from './config';

import { storyblok, sitemap, robots } from './config/integrations';

// https://astro.build/config
export default defineConfig({
  site: env.SITE_URL,
  //
  scopedStyleStrategy: 'attribute',
  build: {
    inlineStylesheets: 'never',
    assets: 'assets',
    format: 'file'
    // assetsPrefix: env.SITE_URL,
  },
  compressHTML: import.meta.env.PROD,
  //
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN', 'en']
  },
  //
  vite: vite,
  //
  // ...(await import('./config/ssr/vercel/hybrid')).default,
  //
  integrations: [storyblok, sitemap, robots],
});
