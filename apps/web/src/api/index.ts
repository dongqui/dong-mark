import axios from 'axios';

import { Collection } from 'common-types';

export async function postCollections(data: Partial<Collection>) {
  const res = await axios.post('http://localhost:3000/api/collections', data);
  return res.data;
}

export async function getCollections(parentId?: string) {
  const res = await axios.get<Collection[]>(`http://localhost:3000/api/collections/${parentId || '0'}`);
  return res.data;
}
