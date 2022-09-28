// Button.stories.js|jsx

import { FolderIcon, SearchIcon } from './index';

export default {
  title: 'Icon',
  component: FolderIcon,
};

export const All = () => (
  <div style={{ display: 'flex', gap: '10px' }}>
    <SearchIcon />
    <FolderIcon />
  </div>
);
