import { collection } from 'lib/firebase';
import { useMutation, useQueryClient } from 'react-query';

import { Collection } from 'common-types';

import { postCollections } from 'api';

interface Params {
  name: string;
}

export default function useCollectionsMutaion() {
  const queryClient = useQueryClient();
  return useMutation<Collection, Error, Params>('collections', ({ name }) => postCollections({ name, parentId: null }), {
    onSuccess() {
      queryClient.invalidateQueries('collections');
    },
  });
}
