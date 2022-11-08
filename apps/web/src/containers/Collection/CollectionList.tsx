import { css } from '@emotion/react';
import { useState } from 'react';

import { List } from 'ui';

import { useCollectionsQuery } from 'hooks';

interface Props {
  parentId: string;
  depth: number;
}

export default function CollectionList({ parentId, depth }: Props) {
  const { data } = useCollectionsQuery(parentId);
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClickFolder() {
    setIsExpanded(!isExpanded);
  }

  return <></>;
}
