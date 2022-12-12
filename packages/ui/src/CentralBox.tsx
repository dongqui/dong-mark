import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

interface Props {}

export default function CentralBox({ children }: PropsWithChildren<Props>) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      {children}
    </div>
  );
}
