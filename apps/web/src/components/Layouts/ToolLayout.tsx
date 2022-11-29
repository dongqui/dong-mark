import { SideBar, Header } from 'containers';
import { css } from '@emotion/react';
interface Props {
  children: React.ReactNode;
}

export default function ToolLayout({ children }: Props) {
  return (
    <>
      <Header />
      <div
        css={css`
          height: 100%;
          display: flex;
        `}
      >
        <SideBar />
        <main>{children}</main>
      </div>
    </>
  );
}
