import { NextApiRequest, NextApiResponse } from 'next';

import { db, addDoc, collection, serverTimestamp } from 'lib/firebase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    await addDoc(collection(db, 'bookmarks'), { ...req.body, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
    res.status(201).send({});
  }
}
