import { useRef, ReactNode } from 'react';

interface Props {
  prefix?: ReactNode;
  postfix?: ReactNode;
  placeHolder?: string;
  onChange?: React.ChangeEventHandler;
  width?: string | number;
}

function Input({ prefix, postfix, placeHolder, onChange, width }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClickWrapper() {
    inputRef?.current?.focus();
  }
  return (
    <div className={`flex w-full items-center gap-2 rounded-lg bg-zinc-900 p-2 text-slate-100`} onClick={handleClickWrapper}>
      {prefix}
      <input className="w-full border-none bg-transparent outline-none" ref={inputRef} placeholder={placeHolder} onChange={onChange} />
      {postfix}
    </div>
  );
}

export default Input;
