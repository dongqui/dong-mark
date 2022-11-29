interface Props {
  size: number;
  direction?: 'w' | 'h';
}

export default function Spacing({ size, direction = 'h' }: Props) {
  const space = direction === 'h' ? { height: size } : { width: size };
  return (
    <div
      style={{
        flex: 'none',
        ...space,
      }}
    />
  );
}
