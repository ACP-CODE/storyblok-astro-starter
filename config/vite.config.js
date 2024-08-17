import { defineConfig } from 'vite';

import glsl from 'vite-plugin-glsl';

export default defineConfig({
  server: {
    https: {
      key: 'config/__https/localhost-key.pem',
      cert: 'config/__https/localhost.pem',
    },
  },
  // 解决 `storyblok` 在 `development` 模式下的 bug
  optimizeDeps: { exclude: ['@mapbox/node-pre-gyp', 'fsevents'] },
  //
  build: {
    rollupOptions: {
      // https://cn.rollupjs.org/configuration-options/#output-assetfilenames
      output: {
        entryFileNames: 'assets/js/[name].[hash].js',
        assetFileNames: 'assets/[ext]/main.[hash:5][extname]',
        manualChunks: (id) => {
          const match = id.match(/node_modules\/([^/]+)/);
          if (match) {
            const packageName = match[1];
            if (id.includes('@astrojs')) {
              return;
            } else {
              return `js/${packageName}`;
            }
          }
        },
      },
    },
  },
  //
  plugins: [
    /**
     * Import, inline (and compress) GLSL shader files
     * https://www.npmjs.com/package/vite-plugin-glsl
     * Default Options
     */
    glsl({
      include: [
        // Glob pattern, or array of glob patterns to import
        '**/*.glsl',
        '**/*.wgsl',
        '**/*.vert',
        '**/*.frag',
        '**/*.vs',
        '**/*.fs',
      ],
      exclude: undefined, // Glob pattern, or array of glob patterns to ignore
      warnDuplicatedImports: true, // Warn if the same chunk was imported multiple times
      defaultExtension: 'glsl', // Shader suffix when no extension is specified
      compress: true, // Compress output shader code, default `false`
      watch: true, // Recompile shader on change
      root: '/', // Directory for root imports
    }),
  ],
});
