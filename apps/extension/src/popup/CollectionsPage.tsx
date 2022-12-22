import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

import type { Collection } from 'common-types';

import { getCollections } from '../api';
import { useBookmarkFormDataAtom, usePageAtom } from '../hooks';

export default function CollectionsPage() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [bookmarkFormData, setBookmarkFormData] = useBookmarkFormDataAtom();
  const [_, setPage] = usePageAtom();

  useEffect(() => {
    async function fetchCollections() {
      const collections = await getCollections();
      setCollections(collections);
    }

    fetchCollections();
  }, []);

  const handleClickItem = (collectionId: string, collectionName: string) => () => {
    if (!bookmarkFormData) return;

    setBookmarkFormData({
      ...bookmarkFormData,
      parentId: collectionId,
      collectionName,
    });
    setPage('form');
  };

  return (
    <div
      css={css`
        width: 420px;
        height: 600px;
      `}
    >
      <header> - 컬렉션 선택</header>
      <div>
        <button>+</button>
        <ul>
          {collections.map((collection) => (
            <li key={collection.id} onClick={handleClickItem(collection.id, collection.name)}>
              {collection.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
