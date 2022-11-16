import { PropsWithChildren } from 'react';

interface Props {
  test: any;
}

export default function Maybe({ children, test }: PropsWithChildren<Props>) {
  return <>{test ? children : null}</>;
}
