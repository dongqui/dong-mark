import { useRef, ReactNode } from 'react';
import { css } from '@emotion/react';

import { colors } from '../constants';

interface Props {
  prefix?: ReactNode;
  postfix?: ReactNode;
  placeHolder?: string;
  onChange?: React.ChangeEventHandler;
  width?: string | number;
}

function TextInput({ prefix, postfix, placeHolder, onChange, width = '100%' }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClickWrapper() {
    inputRef?.current?.focus();
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
        `}
        ref={inputRef}
        placeholder={placeHolder}
        onChange={onChange}
      />
      {postfix}
    </label>
  );
}

export default TextInput;
