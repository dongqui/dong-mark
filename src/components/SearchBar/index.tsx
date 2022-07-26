import { SearchIcon } from 'components/Icon';

export default function SearchBar() {
  return (
    <div className="flex items-center rounded-md bg-slate-800 p-2">
      <SearchIcon />
      <input className="ml-2 bg-inherit text-white" />
    </div>
  );
}
