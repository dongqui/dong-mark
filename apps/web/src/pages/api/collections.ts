import { NextApiRequest, NextApiResponse } from 'next';

import { Collection } from 'common-types';

import { db, addDoc, collection, getDoc, serverTimestamp } from 'lib/firebase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const docRef = await addDoc(collection(db, 'collections'), { ...req.body, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
    const docSnapshot = await getDoc(docRef);
    const data = docSnapshot.data();
    const newCollection: Collection = { ...data, createdAt: data.createdAt.toDate(), updatedAt: data.updatedAt.toDate(), id: docRef.id };

    res.status(201).json(newCollection);
  }
}
