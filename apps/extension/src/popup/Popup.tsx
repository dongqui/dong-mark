/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';

import type { Bookmark } from 'common-types';
import { postBookmarks } from '../api';
import { PopupLayout } from '../components';

import { TextInput, Button, Form } from 'ui';

function Popup() {
  const [metaInfo, setMetaInfo] = useState<Bookmark | null>(null);
  const [postLoading, setPostLoading] = useState(false);

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

  return (
    <PopupLayout>
      {metaInfo ? (
        <>
          <img width={50} height={50} src={metaInfo.image} alt="page image" />
          <Form onSubmit={handleSubmit}>
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

export default Popup;
