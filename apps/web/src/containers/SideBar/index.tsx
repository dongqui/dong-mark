import { FolderIcon, List, Divider } from 'ui';

export default function SideBar() {
  return (
    <aside className="h-screen w-80 bg-stone-900">
      <header className="p-3">
        {/* TextWithIcon */}
        <div className="flex items-center justify-between">
          <FolderIcon />
          <span className="ml-2">Dongqui9</span>
        </div>
      </header>
      <nav>
        <List>
          <List.Row
            className="px-4 py-1"
            right={<span className="mr-2 text-zinc-500">3</span>}
            left={
              <div className="flex items-center justify-between">
                <FolderIcon />
                <span className="ml-2">모든 북마크</span>
              </div>
            }
          />
          <List.Row
            className="px-4 py-1"
            right={<span className="mr-2 text-zinc-500">3</span>}
            left={
              <div className="flex items-center justify-between">
                <FolderIcon />
                <span className="ml-2">미분류</span>
              </div>
            }
          />
          <List.Row
            className="px-4 py-1"
            right={<span className="mr-2 text-zinc-500">3</span>}
            left={
              <div className="flex items-center justify-between">
                <FolderIcon />
                <span className="ml-2">휴지통</span>
              </div>
            }
          />
        </List>

        <Divider />

        <h3 className="px-4 py-3">태그</h3>

        <ul>
          <li className="flex cursor-pointer items-center justify-between px-4 py-1 hover:bg-neutral-800">
            <div className="flex items-center justify-between">
              <FolderIcon />
              <span className="ml-2">Dev</span>
            </div>
            <span className="mr-2 text-zinc-500">3</span>
          </li>
          <li className="flex cursor-pointer items-center justify-between px-4 py-1 hover:bg-neutral-800">
            <div className="flex items-center justify-between">
              <FolderIcon />
              <span className="ml-2">Design</span>
            </div>
            <span className="mr-2 text-zinc-500">3</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
