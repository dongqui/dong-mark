import { LiHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { css } from '@emotion/react';

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

interface RowProps extends Pick<LiHTMLAttributes<HTMLLIElement>, 'draggable' | 'onDrop' | 'onDragStart' | 'onDragEnd' | 'onDragOver' | 'onClick'> {
  className?: string;
  isLink?: boolean;
}

function Row({ children, className, ...rest }: PropsWithChildren<RowProps>) {
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
      {children}
    </li>
  );
}

List.Row = Row;
List.Header = Header;

export default List;
