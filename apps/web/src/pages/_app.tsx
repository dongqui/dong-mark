import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { ReactQueryDevtools } from 'react-query/devtools';

import { AppPropsWithLayout } from 'types';
import { GlobalLayout } from 'components';

import '../styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen />
      <RecoilRoot>
        <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
