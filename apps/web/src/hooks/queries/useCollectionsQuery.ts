import { useQuery } from 'react-query';

import { getCollections } from 'api';

export default function useCollectionsQuery() {
  return useQuery(['collections'], () => getCollections(), {
    select(collections) {
      return collections.map((collection) => ({
        ...collection,
        children: collections.filter((c) => c.parentId === collection.id),
      }));
    },
  });
}
