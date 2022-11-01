import { TextInput, UserIcon, Button, Spacing, Form, CentralBox } from 'ui';
import { useForm } from 'react-hooks';

import { CentralLayout } from 'containers';

export default function SignUpPage() {
  const { register, errors, handleSubmit } = useForm();

  const handleSubmitCallback = () => {};
  return (
    <CentralLayout>
      <CentralBox>
        <UserIcon width={150} height={150} />
      </CentralBox>

      <Form onSubmit={handleSubmit(handleSubmitCallback)}>
        <TextInput placeHolder="이메일 주소" {...register('email', {})} />
        <TextInput placeHolder="비밀번호" {...register('password', {})} />
        <TextInput placeHolder="비밀번호 확인" {...register('confirmPassword', {})} />

        <Button type="submit">Sign up</Button>
      </Form>
    </CentralLayout>
  );
}
