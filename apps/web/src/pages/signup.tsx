import { TextInput, UserIcon, Button, Spacing, Form, CentralBox } from 'ui';

import { CentralLayout } from 'containers';

export default function SignUpPage() {
  const handleSubmitCallback = () => {};
  return (
    <CentralLayout>
      <CentralBox>
        <UserIcon width={150} height={150} />
      </CentralBox>

      <Form>
        <TextInput placeholder="이메일 주소" />
        <TextInput placeholder="비밀번호" />
        <TextInput placeholder="비밀번호 확인" />

        <Button type="submit">Sign up</Button>
      </Form>
    </CentralLayout>
  );
}
