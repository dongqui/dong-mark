import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useSelectedCollectionId } from 'hooks';

function useSelectCollectionIdFromURL() {
  const router = useRouter();
  const [_, setSelectedCollectionId] = useSelectedCollectionId();

  useEffect(() => {
    const collectionId = router.asPath.split('/')[2];
    setSelectedCollectionId(collectionId);
  }, [router.asPath, setSelectedCollectionId]);
}

export default useSelectCollectionIdFromURL;
