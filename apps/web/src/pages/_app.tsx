import type { AppProps } from 'next/app';
import { css } from '@emotion/react';
import { colors } from 'ui';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      css={css`
        background-color: ${colors.darkBG};
        color: ${colors.contentBase};
        height: 100vh;
      `}
    >
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
