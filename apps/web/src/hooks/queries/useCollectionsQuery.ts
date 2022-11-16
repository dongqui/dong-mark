import { useQuery } from 'react-query';

import { getCollections } from 'api';

export default function useCollectionsQuery() {
  return useQuery(['collections'], () => getCollections(), {
    staleTime: Infinity,
  });
}
