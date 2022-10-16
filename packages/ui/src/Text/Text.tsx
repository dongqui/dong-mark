import { PropsWithChildren, Fragment } from 'react';

interface Props {
  stringToJSX?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

function Text({ stringToJSX, children, as: Component = 'span' }: PropsWithChildren<Props>) {
  return <Component>{stringToJSX === true && typeof children === 'string' ? convertNewLineToJSX(children) : children}</Component>;
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
