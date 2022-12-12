import { css } from '@emotion/react';
import { useEffect } from 'react';

import { TextInput, UserIcon, Button, Text } from 'ui';

export default function SignInPage() {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100vh;
      `}
    >
      <div>
        <UserIcon width={150} height={150} />
      </div>

      <form
        css={css`
          width: 30%;
          margin-top: 24px;
        `}
      >
        <TextInput />
        <TextInput />
        <Button>Login</Button>
      </form>

      <Text>Or continue with</Text>
      <div></div>
    </div>
  );
}
