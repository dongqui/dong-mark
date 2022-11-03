import { useRef, ReactNode, InputHTMLAttributes, forwardRef, ForwardedRef } from 'react';
import { css } from '@emotion/react';

import { colors } from '../constants';

interface Props extends Pick<InputHTMLAttributes<HTMLInputElement>, 'defaultValue' | 'value' | 'type' | 'placeholder' | 'name'> {
  prefix?: ReactNode;
  postfix?: ReactNode;
  onChange?: React.ChangeEventHandler;
  width?: string | number;
}

function TextInput({ prefix, postfix, onChange, width = '100%', ...rest }: Props, inputRef: ForwardedRef<HTMLInputElement>) {
  function handleClickWrapper() {
    if (inputRef !== null && typeof inputRef !== 'function') {
      inputRef?.current?.focus();
    }
  }

  return (
    <label
      css={css`
        display: flex;
        align-items: center;
        gap: 8px;
        border-radius: 8px;
        width: ${width};
        background-color: ${colors.darkBGElevated};
        padding: 8px 12px;
        font-size: 16px;
        height: 48px;
      `}
      onClick={handleClickWrapper}
    >
      {prefix}
      <input
        css={css`
          outline: none;
          border: none;
          background-color: transparent;
          color: ${colors.contentBase};
          width: 100%;
        `}
        ref={inputRef}
        onChange={onChange}
        {...rest}
      />
      {postfix}
    </label>
  );
}

export default forwardRef(TextInput);
