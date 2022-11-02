import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

interface Props {}

export default function PopupLayout({ children }: PropsWithChildren<Props>) {
  return (
    <div
      css={css`
        padding: 32px;
        border-radius: 8px;
        width: 600px;
        overflow: auto;
      `}
    >
      {children}
    </div>
  );
}
