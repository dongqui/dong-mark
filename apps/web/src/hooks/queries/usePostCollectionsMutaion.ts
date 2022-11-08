import { useMutation } from 'react-query';

import { Collection } from 'common-types';

import { postCollections } from 'api';

interface Params {
  name: string;
}

export default function useCollectionsMutaion() {
  return useMutation<Collection, Error, Params>('collections', ({ name }) => postCollections({ name, parentId: null }));
}
