import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { ReactQueryDevtools } from 'react-query/devtools';

import { GlobalLayout } from 'containers';

import '../styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen />
      <RecoilRoot>
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
