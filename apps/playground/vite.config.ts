/// <reference types='vitest' />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
export default ({ mode }: { mode: string }) => {
  // Checking environement files
  const envFile = loadEnv(mode, process.cwd());
  const envs = { ...process.env, ...envFile };
  const hasEnvFile = Object.keys(envFile).length;

  // Proxy variables
  const headers = {
    cookie: `oneSessionId=${envs.VITE_ONE_SESSION_ID};authenticated=true; XSRF-TOKEN=${envs.VITE_XSRF_TOKEN}`,
  };
  const resHeaders = hasEnvFile
    ? {
        'set-cookie': [
          `oneSessionId=${envs.VITE_ONE_SESSION_ID}`,
          `XSRF-TOKEN=${envs.VITE_XSRF_TOKEN}`,
        ],
        'Cache-Control': 'public, max-age=300',
      }
    : {};

  const proxyObj = hasEnvFile
    ? {
        target: envs.VITE_RECETTE,
        changeOrigin: true,
        headers,
      }
    : {
        target: 'http://localhost:8090',
        changeOrigin: false,
      };

  const proxy = {
    '/applications-list': proxyObj,
    '/resources-applications': proxyObj,
    '/conf/public': proxyObj,
    '^/(?=help-1d|help-2d)': proxyObj,
    '^/(?=assets)': proxyObj,
    '^/(?=theme|locale|i18n|skin)': proxyObj,
    '^/(?=auth|appregistry|cas|userbook|directory|communication|conversation|portal|session|timeline|workspace|infra)':
      proxyObj,
    '/blog': proxyObj,
    '/explorer': proxyObj,
    '/mindmap': proxyObj,
    '/pocediteur': proxyObj,
    '/video': proxyObj,
    // needed for linker (behaviours)
    '/actualites/linker/infos': proxyObj,
    '/collaborativewall/list/all': proxyObj,
    '/community/listallpages': proxyObj,
    '/exercizer/subjects-scheduled': proxyObj,
    '/formulaire/forms/linker': proxyObj,
    '/forum/categories': proxyObj,
    '/homeworks/list': proxyObj,
    '/magneto/boards/editable': proxyObj,
    '/mindmap/list/all': proxyObj,
    '/pages/list/all': proxyObj,
    '/poll/list/all': proxyObj,
    '/scrapbook/list/all': proxyObj,
    '/timelinegenerator/timelines': proxyObj,
    '/wiki/listallpages': proxyObj,
  };

  const base = mode === 'production' ? '/tiptap' : '';

  return defineConfig({
    base,
    root: __dirname,
    cacheDir: '../../node_modules/.vite/apps/playground',

    server: {
      port: 4200,
      proxy,
      headers: resHeaders,
      host: 'localhost',
    },

    preview: {
      port: 4300,
      proxy,
      headers: resHeaders,
      host: 'localhost',
    },

    plugins: [react(), nxViteTsPaths()],

    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },

    build: {
      outDir: '../../dist/apps/playground',
      assetsDir: 'public',
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },

    test: {
      globals: true,
      cache: {
        dir: '../../node_modules/.vitest',
      },
      environment: 'jsdom',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

      reporters: ['default'],
      coverage: {
        reportsDirectory: '../../coverage/apps/playground',
        provider: 'v8',
      },
    },
  });
};
