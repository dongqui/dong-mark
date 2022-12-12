import { List } from 'ui';

import CollectionList from './CollectionList';
import { usePostCollectionsMutaion, useCollectionsQuery } from 'hooks';

export default function Collection() {
  const { data: collections } = useCollectionsQuery();
  const { mutate } = usePostCollectionsMutaion();

  function handleClickAdd() {
    mutate({ name: 'test' });
  }

  const rootCollections = collections?.filter((c) => !c.parentId);

  return (
    <List>
      <button onClick={handleClickAdd}>add</button>
      <List.Header>Collections</List.Header>
      {rootCollections?.map((collection) => (
        <CollectionList key={collection.id} collection={collection} />
      ))}
    </List>
  );
}
