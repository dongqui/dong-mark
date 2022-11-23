import { useQuery } from 'react-query';

import { getBookmarks } from 'api';

export default function useBookmarksQuery() {
  return useQuery(['bookmarks'], () => getBookmarks());
}
