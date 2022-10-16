import { ReactNode, ComponentProps } from 'react';

import Text from './Text';

interface Props {
  top: string | ReactNode;
  topProps?: ComponentProps<typeof Text>;
  bottom: string | ReactNode;
  bottomProps?: ComponentProps<typeof Text>;
}

function TextColumn({ top, topProps, bottom, bottomProps }: Props) {
  return (
    <div css={{ display: 'flex', flexDirection: 'column' }}>
      <Text {...topProps}>{top}</Text>
      <Text {...bottomProps}>{bottom}</Text>
    </div>
  );
}

export default TextColumn;
