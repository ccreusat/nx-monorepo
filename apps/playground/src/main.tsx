/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { StrictMode } from 'react';

import { OdeClientProvider } from '@ccreusat-monorepo/ui-library';
import { ThemeProvider } from '@ccreusat-monorepo/ui-library';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ERROR_CODE } from '@ccreusat-monorepo/client';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes';

import './i18n';
import '../../../dist/libs/bootstrap/index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  import('@axe-core/react').then((axe) => {
    axe.default(React, root, 1000);
  });
}

/* if (process.env.NODE_ENV !== "production") {
  import("edifice-bootstrap/dist/index.css");
} */

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      if (typeof error === 'string') {
        if (error === ERROR_CODE.NOT_LOGGED_IN)
          window.location.replace('/auth/login');
      }
    },
  }),
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <OdeClientProvider
        params={{
          app: 'blog',
        }}
      >
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </OdeClientProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
