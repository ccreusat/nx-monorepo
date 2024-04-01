/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/editor',

  plugins: [
    react(),
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsConfigFilePath: path.join(__dirname, 'tsconfig.lib.json'),
      skipDiagnostics: true,
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: '../../dist/libs/react/editor',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.ts',
      name: 'editor',
      fileName: 'index',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@ccreusat-monorepo/icons',
        '@ccreusat-monorepo/ui-library',
        '@tiptap/react',
        'react-i18next',
        '@ccreusat-monorepo/multimedia',
        'clsx',
        '@tiptap/starter-kit',
        '@tiptap-pro/extension-mathematics',
        '@ccreusat-monorepo/client',
        '@tiptap/extension-text-align',
        '@tiptap/extension-text-style',
        '@tiptap/extension-typography',
        '@tiptap/extension-underline',
        '@tiptap/extension-superscript',
        '@tiptap/extension-table',
        '@tiptap/extension-table-row',
        'emoji-picker-react',
        '@ccreusat-monorepo/tiptap-extension-attachment',
        '@ccreusat-monorepo/tiptap-extension-alert',
        '@tiptap/extension-color',
        '@tiptap/extension-focus',
        '@tiptap/extension-font-family',
        '@tiptap/extension-subscript',
        '@tiptap/extension-table-header',
        '@ccreusat-monorepo/tiptap-extension-image',
        '@ccreusat-monorepo/tiptap-extension-audio',
        '@ccreusat-monorepo/tiptap-extension-linker',
        '@ccreusat-monorepo/tiptap-extension-video',
        '@ccreusat-monorepo/tiptap-extension-hyperlink',
        '@ccreusat-monorepo/tiptap-extension-font-size',
        '@ccreusat-monorepo/tiptap-extension-heading',
        '@ccreusat-monorepo/tiptap-extension-highlight',
        '@ccreusat-monorepo/tiptap-extension-iframe',
        '@ccreusat-monorepo/tiptap-extension-table-cell',
        '@ccreusat-monorepo/tiptap-extension-speech-recognition',
        '@ccreusat-monorepo/tiptap-extension-speech-synthesis',
      ],
    },
  },

  test: {
    globals: true,
    cache: {
      dir: '../../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../../coverage/editor',
      provider: 'v8',
    },
  },
});
