import { useState } from 'react';
import { css } from '@emotion/react';

import { List, Maybe, RowBox } from 'ui';
import { Collection } from 'common-types';
import { isDefined } from 'common-helpers';
import Link from 'next/link';

import { usePutCollectionsMutaion, useDraggedCollectionId, useCollectionsQuery } from 'hooks';
interface Props {
  collection: Collection;
}

export default function CollectionList({ collection }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [draggedCollectionId, setDraggedCollectionId] = useDraggedCollectionId();
  const { data: collections } = useCollectionsQuery();
  const { mutate } = usePutCollectionsMutaion();

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
          <a
            css={css`
              display: block;
              width: 100%;
              height: 100%;
              padding: 15px 24px;
            `}
          >
            <RowBox left={collection.name} right={'hey'} />
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
