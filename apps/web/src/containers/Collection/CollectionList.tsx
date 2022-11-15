import { useState } from 'react';

import { List } from 'ui';
import { Collection } from 'common-types';

import { usePutCollectionsMutaion } from 'hooks';
interface Props {
  collection: Collection;
}

export default function CollectionList({ collection }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { mutate } = usePutCollectionsMutaion();

  function handleClickFolder() {
    setIsExpanded(!isExpanded);
  }

  const handleDrop = (collection: Collection) => () => {
    mutate({ id: collection.id, parentId: 'nYhO8CvVkaXcunryMj70' });
  };

  return (
    <>
      <List.LinkRow key={collection.id} left={'hey'} right={collection.name} href="/hi" draggable onDrop={handleDrop(collection)} />

      {collection.children.map((child) => (
        <CollectionList key={child.id} collection={child} />
      ))}
    </>
  );
}
