import { useMutation } from 'react-query';

import { Collection } from 'common-types';

import { putCollections } from 'api';

export default function usePutCollectionsMutaion() {
  return useMutation<Collection, Error, Partial<Pick<Collection, 'id' | 'name' | 'parentId'>>>('collections', (data) => putCollections(data));
}
