import axios from 'axios';

import type { BookMark } from 'common-types';

export async function postBookmarks(data: BookMark) {
  const res = await axios.post<BookMark>('http://localhost:3000/api/bookmarks', data);
  return res.data;
}
