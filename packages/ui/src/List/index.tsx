import { PropsWithChildren, ReactNode } from 'react';

interface Props {
  className?: string;
}

function List({ className, children }: PropsWithChildren<Props>) {
  return <ul className={className}>{children}</ul>;
}

interface ListRowProps {
  className?: string;
  left: ReactNode;
  right: ReactNode;
}

function Row({ className, left, right }: ListRowProps) {
  return (
    <li className={`${className} flex cursor-pointer items-center justify-between hover:bg-neutral-800`}>
      {left}
      {right}
    </li>
  );
}

List.Row = Row;
export default List;
