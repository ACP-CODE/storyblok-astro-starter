const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
    // remove `unused` CSS
    purgecss({
      content: [
        './src/**/*.astro',
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/*.ts',
        './src/**/*.tsx',
      ],
      safelist: {
        standard: [/^some-regex-to-keep-classes$/], // 根据需要保留的类进行调整
      },
    }),
  ],
};