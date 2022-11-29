import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useRouter } from 'next/router';

import { useSelectedCollectionId } from 'hooks';
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
        <HandleInitialData />
        <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

function HandleInitialData() {
  const router = useRouter();
  const [_, setSelectedCollectionId] = useSelectedCollectionId();

  useEffect(() => {
    const collectionId = router.asPath.split('/')[2];
    setSelectedCollectionId(collectionId);
  }, [router.asPath, setSelectedCollectionId]);

  return <></>;
}

export default MyApp;
