/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';

import type { MetaInfo } from '../types';
import { postBookmarks } from '../api';
import { PopupLayout } from '../components';

import { TextInput, Button, Form } from 'ui';
import { useForm } from 'react-hooks';

function Popup() {
  const [metaInfo, setMetaInfo] = useState<MetaInfo | null>(null);
  const [postLoading, setPostLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (typeof tabs[0].id === 'number') {
        chrome.tabs.sendMessage(tabs[0].id, {}, (value: MetaInfo) => {
          setMetaInfo(value);
        });
      }
    });
  }, []);

  async function handleSubmitCallback(values: Omit<MetaInfo, 'image'>) {
    setPostLoading(true);
    try {
      await postBookmarks({ ...values, image: metaInfo?.image || '' });
      window.close();
    } catch (e) {
      alert(e);
    } finally {
      setPostLoading(false);
    }
  }

  return (
    <PopupLayout>
      {metaInfo ? (
        <>
          <img width={50} height={50} src={metaInfo.image} alt="page image" />
          <Form onSubmit={handleSubmit(handleSubmitCallback)}>
            <TextInput value={metaInfo.title} {...register('title', {})} />
            <TextInput value={metaInfo.description} {...register('description', {})} />
            <TextInput value={metaInfo.url} {...register('url', {})} />
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
