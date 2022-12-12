import { NextApiRequest, NextApiResponse } from 'next';

import { db, addDoc, collection, serverTimestamp, getDocs } from 'lib/firebase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    await addDoc(collection(db, 'bookmarks'), { ...req.body, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });

    res.status(201).send({});
  } else if (req.method === 'GET') {
    const docsRef = await getDocs(collection(db, 'bookmarks'));
    const data = docsRef.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    res.status(200).json(data);
  }
}
