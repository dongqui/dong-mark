import { NextApiRequest, NextApiResponse } from 'next';

import { Collection } from 'common-types';

import { db, addDoc, collection, getDoc, serverTimestamp, getDocs, doc, setDoc, updateDoc } from 'lib/firebase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const docRef = await addDoc(collection(db, 'collections'), { ...req.body, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
    const docSnapshot = await getDoc(docRef);
    const data = docSnapshot.data();
    const newCollection: Collection = { ...data, createdAt: data.createdAt.toDate(), updatedAt: data.updatedAt.toDate(), id: docRef.id };

    res.status(201).json(newCollection);
  } else if (req.method === 'GET') {
    const querySnapshot = await getDocs(collection(db, 'collections'));
    const collections = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return { ...data, createdAt: data.createdAt.toDate(), updatedAt: data.updatedAt.toDate(), id: doc.id };
    });

    res.status(200).json(collections);
  } else if (req.method === 'PUT') {
    const collectionsRef = collection(db, 'collections');

    const id = req.body.id;
    delete req.body.id;
    updateDoc(doc(collectionsRef, id), {
      ...req.body,
    });
  }
}
