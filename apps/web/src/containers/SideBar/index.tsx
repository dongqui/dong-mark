import { FolderIcon, TextWithIcon } from 'ui';
import Link from 'next/link';

export default function SideBar() {
  return (
    <aside className="h-screen w-80 bg-stone-900">
      <header className="p-3">
        <TextWithIcon icon={FolderIcon()}>Dongqui9</TextWithIcon>
      </header>
      <nav>
        <ul>
          <li>
            <Link href="/test">
              <div className="flex cursor-pointer items-center justify-between px-4 py-1 hover:bg-neutral-800">
                <div className="flex items-center justify-between">
                  <FolderIcon />
                  <span className="ml-2">모든 북마크</span>
                </div>
                <span className="mr-2 text-zinc-500">3</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/test">
              <div className="flex cursor-pointer items-center justify-between px-4 py-1 hover:bg-neutral-800">
                <div className="flex items-center justify-between">
                  <FolderIcon />
                  <span className="ml-2">미분류</span>
                </div>
                <span className="mr-2 text-zinc-500">3</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/test">
              <div className="flex cursor-pointer items-center justify-between px-4 py-1 hover:bg-neutral-800">
                <div className="flex items-center justify-between">
                  <FolderIcon />
                  <span className="ml-2">휴지통</span>
                </div>
                <span className="mr-2 text-zinc-500">3</span>
              </div>
            </Link>
          </li>
        </ul>
        <div className="h-px bg-neutral-700" />

        <h3 className="px-2 py-1">컬렉션</h3>
        <ul>
          <li>
            <Link href="/test">
              <div className="flex cursor-pointer items-center justify-between px-4 py-1 hover:bg-neutral-800">
                <div className="flex items-center justify-between">
                  <FolderIcon />
                  <span className="ml-2">Dev</span>
                </div>
                <span className="mr-2 text-zinc-500">3</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/test">
              <div className="flex cursor-pointer items-center justify-between px-4 py-1 hover:bg-neutral-800">
                <div className="flex items-center justify-between">
                  <FolderIcon />
                  <span className="ml-2">Design</span>
                </div>
                <span className="mr-2 text-zinc-500">3</span>
              </div>
            </Link>
          </li>
        </ul>
        <div className="h-px bg-neutral-700" />

        <h3 className="px-4 py-3">태그</h3>

        <ul>
          <li>
            <Link href="/test">
              <div className="flex cursor-pointer items-center justify-between px-4 py-1 hover:bg-neutral-800">
                <div className="flex items-center justify-between">
                  <FolderIcon />
                  <span className="ml-2">Dev</span>
                </div>
                <span className="mr-2 text-zinc-500">3</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/test">
              <div className="flex cursor-pointer items-center justify-between px-4 py-1 hover:bg-neutral-800">
                <div className="flex items-center justify-between">
                  <FolderIcon />
                  <span className="ml-2">Design</span>
                </div>
                <span className="mr-2 text-zinc-500">3</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
