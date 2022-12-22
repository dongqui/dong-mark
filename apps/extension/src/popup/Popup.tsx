import { usePageAtom } from '../hooks';
import FormPage from './FormPage';
import CollectionsPage from './CollectionsPage';

export default function Popup() {
  const [page, _] = usePageAtom();

  if (page === 'form') {
    return <FormPage />;
  } else if (page === 'collections') {
    return <CollectionsPage />;
  }

  return null;
}
