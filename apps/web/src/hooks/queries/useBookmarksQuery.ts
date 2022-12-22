import { useQuery } from 'react-query';

import { getBookmarks } from 'api';

export default function useBookmarksQuery(collectionId: string | null) {
  return useQuery(['bookmarks', collectionId], () => getBookmarks(collectionId));
}
