import { FolderIcon } from 'ui';
import { css } from '@emotion/react';

import { colors } from 'ui';

import { Collection } from 'containers';

export default function SideBar() {
  return (
    <aside
      css={css`
        flex-shrink: 0;
        border-right: 1px solid ${colors.outline};
        width: 300px;
      `}
    >
      <nav>
        <Collection />
      </nav>
    </aside>
  );
}
