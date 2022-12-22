import { NextApiRequest, NextApiResponse } from 'next';

import { db, addDoc, collection, serverTimestamp, getDocs, query, where } from 'lib/firebase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    await addDoc(collection(db, 'bookmarks'), { ...req.body, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });

    res.status(201).send({});
  } else if (req.method === 'GET') {
    const collectionId = req.query.collectionId === 'root' ? '' : req.query.collectionId;
    const docsRef = await getDocs(query(collection(db, 'bookmarks'), where('parentId', '==', collectionId)));
    const data = docsRef.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    res.status(200).json(data);
  }
}
