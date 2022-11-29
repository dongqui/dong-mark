import axios from 'axios';

import type { Bookmark } from 'common-types';

export async function postBookmarks(data: Bookmark) {
  const res = await axios.post<Bookmark>('http://localhost:3000/api/bookmarks', data);
  return res.data;
}
