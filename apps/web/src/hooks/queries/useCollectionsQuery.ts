import { useQuery } from 'react-query';

import { Collection } from 'common-types';

import { getCollections } from 'api';

export default function useCollectionsQuery(parentId: string = '0') {
  return useQuery(['collections', parentId], () => getCollections(parentId));
}
