import axios from 'axios';

import type { Bookmark, Collection } from 'common-types';

import { BookmarkFormData } from 'types';

export async function postBookmarks(data: Omit<BookmarkFormData, 'collectionName'>) {
  const res = await axios.post<Bookmark>(`http://localhost:3000/api/collections/${data.parentId || 'root'}/bookmarks`, data);
  return res.data;
}

export async function getCollections() {
  const res = await axios.get<Collection[]>('http://localhost:3000/api/collections');
  return res.data;
}
