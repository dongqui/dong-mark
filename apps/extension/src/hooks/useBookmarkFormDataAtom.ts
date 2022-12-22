import { atom, useRecoilState, SetterOrUpdater } from 'recoil';
import { useEffect } from 'react';

import { BookmarkFormData, WebpageMetaData } from 'types';

const _atom = atom<BookmarkFormData | null>({
  key: 'bookmarkFormData',
  default: null,
});

export default function useBookmarkFormDataAtom(): [BookmarkFormData | null, SetterOrUpdater<BookmarkFormData | null>] {
  const [formData, setFormData] = useRecoilState(_atom);

  useEffect(() => {
    if (!formData) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (typeof tabs[0].id === 'number') {
          chrome.tabs.sendMessage(tabs[0].id, {}, (value: WebpageMetaData) => {
            setFormData({
              ...value,
              parentId: '',
              collectionName: '',
              tags: [],
            });
          });
        }
      });
    }
  }, [formData, setFormData]);

  return [formData, setFormData];
}
