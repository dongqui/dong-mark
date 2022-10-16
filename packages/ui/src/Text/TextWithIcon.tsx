import { ReactNode, PropsWithChildren } from 'react';

interface Props {
  icon: ReactNode;
}

function TextWithIcon({ icon, children }: PropsWithChildren<Props>) {
  return (
    <div className="flex w-auto items-center gap-2">
      {icon}
      <span>{children}</span>
    </div>
  );
}

export default TextWithIcon;
