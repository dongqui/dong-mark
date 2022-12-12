import { PropsWithChildren, ButtonHTMLAttributes } from 'react';
import { css } from '@emotion/react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, ...rest }: PropsWithChildren<Props>) {
  return (
    <button
      css={css`
        cursor: pointer;
        border: 0;
        outline: none;
        border-radius: 6px;
        transition: background-color 0.25s, color 0.25s;
        padding: 15px 16px;
        width: 100%;
      `}
      {...rest}
    >
      {children}
    </button>
  );
}
