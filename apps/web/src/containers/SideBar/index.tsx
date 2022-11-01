import { FolderIcon } from 'ui';
import Link from 'next/link';
import { css } from '@emotion/react';

import { colors, List } from 'ui';

export default function SideBar() {
  return (
    <aside
      css={css`
        border-right: 1px solid ${colors.outline};
        width: 300px;
      `}
    >
      <nav>
        <List>
          <List.LinkRow left={'hey'} right={'hi'} href="/hi" />
        </List>
        <List>
          <List.Header>Collections</List.Header>
        </List>
      </nav>
    </aside>
  );
}
