import { List } from 'ui';

import { usePostCollectionsMutaion, useCollectionsQuery } from 'hooks';

import CollectionList from './CollectionList';

export default function Collection() {
  // const { data } = useCollectionsQuery();
  const { mutate } = usePostCollectionsMutaion();

  function handleClickAdd() {
    mutate({ name: 'test' });
  }

  return (
    <List>
      <button onClick={handleClickAdd}>add</button>
      <List.Header>Collections</List.Header>
      {[1, 2, 3].map((d) => (
        <List.LinkRow
          key={d}
          left={'hey'}
          right={'hi'}
          href="/hi"
          draggable
          onDrop={() => {
            console.log('dd');
          }}
        />
      ))}
    </List>
  );
}
