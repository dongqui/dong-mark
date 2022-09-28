import { SideBar } from 'containers';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex">
      <SideBar />
      <main className="flex-1 bg-neutral-800">{children}</main>
    </div>
  );
}
