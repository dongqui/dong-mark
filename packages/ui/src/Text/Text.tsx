import { PropsWithChildren, Fragment } from 'react';
import { css } from '@emotion/react';

import { colors, fontSizes } from '../constants';

interface Props {
  stringToJSX?: boolean;
  as?: keyof JSX.IntrinsicElements;
  color?: keyof typeof colors;
  fontSize?: keyof typeof fontSizes;
  fontWeight?: 'regular' | 'medium' | 'semibold' | 'bold';
}

function Text({ stringToJSX, children, as: Component = 'span', color = 'contentBase', fontSize = 'm', fontWeight = 'medium' }: PropsWithChildren<Props>) {
  return (
    <Component
      css={css`
        color: ${colors[color]};
        font-size: ${fontSizes[fontSize]};
        font-weight: ${fontWeight};
      `}
    >
      {stringToJSX === true && typeof children === 'string' ? convertNewLineToJSX(children) : children}
    </Component>
  );
}

function convertNewLineToJSX(str: string) {
  return str.split('\n').map((line, index) => (
    <Fragment key={index}>
      {index > 0 ? <br /> : ''}
      {line}
    </Fragment>
  ));
}

export default Text;
