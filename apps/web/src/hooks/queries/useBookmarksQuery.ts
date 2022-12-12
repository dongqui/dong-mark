import { useQuery } from 'react-query';

import { getBookmarks } from 'api';

export default function useBookmarksQuery(collectionId: string) {
  return useQuery(['bookmarks', collectionId], () => getBookmarks(collectionId));
}
