import { PropsWithChildren, ReactNode } from 'react';
import { css } from '@emotion/react';

interface Props {
  className?: string;
}

const List = ({ className, children }: PropsWithChildren<Props>) => {
  return (
    <ul
      className={className}
      css={css`
        padding: 0 24px;
        display: flex;
        flex-direction: column;
        > li:not(:first-of-type) {
          margin-top: 15px;
        }
      `}
    >
      {children}
    </ul>
  );
};

interface RowProps {
  className?: string;
  left: ReactNode;
  right: ReactNode;
}

function Row({ className, left, right }: RowProps) {
  return (
    <li
      className={className}
      css={css`
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        :hover {
          background-color: red;
        }
      `}
    >
      {left}
      {right}
    </li>
  );
}

List.Row = Row;
export default List;
