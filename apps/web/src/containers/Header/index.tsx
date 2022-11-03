import { TextInput, SearchIcon, TextStack, RowBox, UserIcon, colors } from 'ui';
import { css } from '@emotion/react';

export default function Header() {
  return (
    <header
      css={css`
        height: 110px;
        display: flex;
        border-bottom: 1px solid ${colors.outline};
      `}
    >
      <div
        css={css`
          width: 300px;
          border-right: 1px solid ${colors.outline};
          padding: 30px;
        `}
      >
        <RowBox left={<UserIcon />} right={<TextStack top="dongqui9" bottom="dongqui9@gmail.com" bottomProps={{ color: 'contentMedium', fontSize: 's' }} />} gap={10} />
      </div>
      <div
        css={css`
          padding: 30px;
        `}
      >
        <TextInput prefix={SearchIcon()} placeholder="검색" />
      </div>
    </header>
  );
}
