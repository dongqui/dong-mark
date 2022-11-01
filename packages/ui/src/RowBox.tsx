import { ReactNode, PropsWithChildren } from 'react';
import { css } from '@emotion/react';

interface Props {
  left: ReactNode;
  right: ReactNode;
  gap?: number;
}

function RowBox({ left, right, gap = 0 }: PropsWithChildren<Props>) {
  return (
    <div
      css={css`
        display: flex;
        gap: ${gap}px;
        align-items: center;
      `}
    >
      {left}
      {right}
    </div>
  );
}

export default RowBox;
