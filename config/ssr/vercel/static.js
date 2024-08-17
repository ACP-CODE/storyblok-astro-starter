import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    // maxDuration: 8,
    // //
    // isr: {
    //   // 在首次请求时缓存所有页面，并保存 1 天
    //   expiration: 60 * 60 * 24,
    // }
  }),
});
