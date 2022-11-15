import { List } from 'ui';

import CollectionList from './CollectionList';
import { usePostCollectionsMutaion, useCollectionsQuery } from 'hooks';

export default function Collection() {
  const { data: collections } = useCollectionsQuery();
  const { mutate } = usePostCollectionsMutaion();

  function handleClickAdd() {
    mutate({ name: 'test' });
  }

  return (
    <List>
      <button onClick={handleClickAdd}>add</button>
      <List.Header>Collections</List.Header>
      {collections?.map((collection) => (
        <CollectionList key={collection.id} collection={collection} />
      ))}
    </List>
  );
}
