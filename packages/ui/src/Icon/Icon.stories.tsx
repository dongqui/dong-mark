// Button.stories.js|jsx

import { FolderIcon, SearchIcon, UserIcon } from './index';

export default {
  title: 'Icon',
  component: FolderIcon,
};

export const All = () => (
  <div style={{ display: 'flex', gap: '10px' }}>
    <SearchIcon />
    <FolderIcon />
    <UserIcon />
  </div>
);
