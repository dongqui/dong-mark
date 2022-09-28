import { Input, SearchIcon } from 'ui';

export default function Content() {
  return (
    <section>
      <header className="px-4 py-2">
        <div>
          <Input prefix={SearchIcon()} placeHolder="검색" />
        </div>
      </header>
    </section>
  );
}
