import { useState } from 'react';

import { List, Maybe, RowBox } from 'ui';
import { Collection } from 'common-types';
import { isDefined } from 'common-helpers';
import Link from 'next/link';

import { usePutCollectionsMutaion, useDraggedCollectionId, useCollectionsQuery } from 'hooks';
interface Props {
  collection: Collection;
}

export default function CollectionList({ collection }: Props) {
  const { data: collections } = useCollectionsQuery();
  const [isExpanded, setIsExpanded] = useState(false);
  const { mutate } = usePutCollectionsMutaion();
  const [draggedCollectionId, setDraggedCollectionId] = useDraggedCollectionId();

  const handleClickFolder = () => {
    setIsExpanded(!isExpanded);
  };

  const handleDrop = () => {
    if (draggedCollectionId) {
      mutate({ id: draggedCollectionId, parentId: collection.id });
    }
  };

  const handleDrag = () => {
    setDraggedCollectionId(collection.id);
  };

  const handeDragEnd = () => {
    setDraggedCollectionId(null);
  };

  const children = collection.childrenIds.map((childId) => collections?.find((c) => c.id === childId)).filter(isDefined);

  return (
    <>
      <List.Row key={collection.id} draggable onDrop={handleDrop} onClick={handleClickFolder} onDragStart={handleDrag} onDragEnd={handeDragEnd}>
        <Link href={`/collections/${collection.id}`}>
          <a>
            <RowBox left={collection.id} right={'hey'} />
          </a>
        </Link>
      </List.Row>

      <Maybe test={isExpanded}>
        {children?.map((child) => (
          <CollectionList key={child.id} collection={child} />
        ))}
      </Maybe>
    </>
  );
}
