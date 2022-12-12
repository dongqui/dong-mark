import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

import { colors } from 'ui';

export default function GlobalLayout({ children }: PropsWithChildren) {
  return (
    <div
      css={css`
        background-color: ${colors.darkBG};
        color: ${colors.contentBase};
        height: 100vh;
      `}
    >
      {children}
    </div>
  );
}
