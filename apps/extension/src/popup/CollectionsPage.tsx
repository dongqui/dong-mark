import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

import type { Collection } from 'common-types';

import { getCollections } from '../api';

export default function CollectionsPage() {
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    async function fetchCollections() {
      const collections = await getCollections();
      setCollections(collections);
    }

    fetchCollections();
  }, []);

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
            <li key={collection.id}>{collection.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
