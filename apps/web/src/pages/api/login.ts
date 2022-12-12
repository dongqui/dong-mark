import { db, addDoc, collection } from 'lib/firebase';

export default async function handler() {
  const docRef = await addDoc(collection(db, 'users'), {
    first: 'Alan',
    middle: 'Mathison',
    last: 'Turing',
    born: 1912,
  });
  console.log(docRef);
}
