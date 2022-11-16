import { useMutation, useQueryClient } from 'react-query';

import { Collection } from 'common-types';

import { putCollections } from 'api';

export default function usePutCollectionsMutaion() {
  const queryClient = useQueryClient();
  return useMutation<Collection, Error, Partial<Pick<Collection, 'id' | 'name' | 'parentId'>>>('collections', (data) => putCollections(data), {
    onSuccess() {
      queryClient.invalidateQueries('collections');
    },
  });
}
