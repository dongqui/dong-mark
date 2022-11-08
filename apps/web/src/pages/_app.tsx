import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

import { GlobalLayout } from 'containers';

import '../styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </QueryClientProvider>
  );
}

export default MyApp;
