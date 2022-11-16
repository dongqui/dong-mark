import { LiHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';

import Text from '../Text/Text';
interface Props {
  className?: string;
}

const List = ({ className, children }: PropsWithChildren<Props>) => {
  return (
    <ul
      className={className}
      css={css`
        display: flex;
        flex-direction: column;
        list-style: none;
        margin: 0;
        padding: 0;
      `}
    >
      {children}
    </ul>
  );
};

interface HeaderProps {
  className?: string;
  children?: string;
}

function Header({ className, children }: HeaderProps) {
  return (
    <li
      className={className}
      css={css`
        display: flex;
        justify-content: space-between;
        padding: 0px 24px;
      `}
    >
      <Text fontSize="l" fontWeight="semibold">
        {children}
      </Text>
    </li>
  );
}

interface LinkRowProps extends Pick<LiHTMLAttributes<HTMLLIElement>, 'draggable' | 'onDrop' | 'onDragStart' | 'onDragEnd' | 'onDragOver' | 'onClick'> {
  className?: string;
  left?: ReactNode;
  right?: ReactNode;
  href: string;
}

function LinkRow({ className, left, right, href, ...rest }: LinkRowProps) {
  return (
    <li
      className={className}
      css={css`
        cursor: pointer;
        padding: 15px 24px;
        :hover {
          background-color: red;
        }
      `}
      onDragOver={(e) => e.preventDefault()}
      {...rest}
    >
      <Link href={href}>
        <a
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
          `}
        >
          <div>{left}</div>
          <div>{right}</div>
        </a>
      </Link>
    </li>
  );
}

List.LinkRow = LinkRow;
List.Header = Header;

export default List;
