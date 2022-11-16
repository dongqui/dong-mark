import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

interface Props {}

export default function CentralLayout({ children }: PropsWithChildren<Props>) {
  return (
    <div
      css={css`
        max-width: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        height: auto;
        display: flex;
        justify-content: center;
      `}
    >
      <div
        css={css`
          width: 50%;
        `}
      >
        {children}
      </div>
    </div>
  );
}
