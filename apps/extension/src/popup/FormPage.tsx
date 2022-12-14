/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';

import { TextInput, Button, Form } from 'ui';
import type { Bookmark } from 'common-types';

import { postBookmarks } from '../api';
import { PopupLayout } from '../components';
import { usePageAtom } from '../hooks';

function FormPage() {
  const [metaInfo, setMetaInfo] = useState<Bookmark | null>(null);
  const [postLoading, setPostLoading] = useState(false);
  const [_, setPage] = usePageAtom();

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (typeof tabs[0].id === 'number') {
        chrome.tabs.sendMessage(tabs[0].id, {}, (value: Bookmark) => {
          setMetaInfo(value);
        });
      }
    });
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!metaInfo) return;

    setPostLoading(true);
    try {
      await postBookmarks(metaInfo);
      window.close();
    } catch (e) {
      alert(e);
    } finally {
      setPostLoading(false);
    }
  }

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    if (metaInfo && e.target.name in metaInfo) {
      setMetaInfo({
        ...metaInfo,
        [e.target.name]: e.target.value || '',
        tags: [],
        parentId: null,
      });
    }
  }

  function handleClickCollection() {
    setPage('collections');
  }
  return (
    <PopupLayout>
      {metaInfo ? (
        <>
          <img width={50} height={50} src={metaInfo.image} alt="page image" />
          <Form onSubmit={handleSubmit}>
            컬렉션 <Button onClick={handleClickCollection}>헤이</Button>
            <TextInput name="title" value={metaInfo.title} onChange={handleChangeInput} />
            <TextInput name="description" value={metaInfo.description} onChange={handleChangeInput} />
            <TextInput name="url" value={metaInfo.url} onChange={handleChangeInput} />
            <Button type="submit" disabled={postLoading}>
              추가
            </Button>
          </Form>
        </>
      ) : (
        <div>loading</div>
      )}
    </PopupLayout>
  );
}

export default FormPage;
