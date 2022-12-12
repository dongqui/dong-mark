import { css } from '@emotion/react';
import { FormHTMLAttributes } from 'react';

interface Props extends FormHTMLAttributes<HTMLFormElement> {}

export default function Form({ ...rest }: Props) {
  return (
    <form
      css={css`
        width: 100%;
      `}
      {...rest}
    ></form>
  );
}
