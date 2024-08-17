import sitemap from '@astrojs/sitemap';

export default sitemap({
  changefreq: 'yearly',
  priority: 0.9,
  lastmod: new Date(),
  i18n: {
    defaultLocale: 'cn',
    locales: {
      cn: 'zh-CN',
      en: 'en-GB',
    },
  },
  serialize(item) {
    if (/exclude-from-sitemap/.test(item.url)) {
      return undefined;
    }
    if (/your-special-page/.test(item.url)) {
      item.changefreq = 'daily';
      item.lastmod = new Date();
      item.priority = 0.8;
    }
    return item;
  },
});
