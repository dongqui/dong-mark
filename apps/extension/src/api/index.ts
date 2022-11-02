import axios from 'axios';

import type { MetaInfo } from '../types';

export async function postBookmarks(data: MetaInfo) {
  const res = await axios.post<MetaInfo>('http://localhost:3000/api/bookmarks', data);
  return res.data;
}
