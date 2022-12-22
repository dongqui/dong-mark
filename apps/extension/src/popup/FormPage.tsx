/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

import { TextInput, Button, Form } from 'ui';

import { postBookmarks } from '../api';
import { PopupLayout } from '../components';
import { usePageAtom, useBookmarkFormDataAtom } from '../hooks';

function FormPage() {
  const [bookmarkFormData, setBookmarkFormData] = useBookmarkFormDataAtom();
  const [postLoading, setPostLoading] = useState(false);
  const [_, setPage] = usePageAtom();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!bookmarkFormData) return;

    setPostLoading(true);
    try {
      const { title, description, url, image, parentId, tags } = bookmarkFormData;

      await postBookmarks({
        title,
        description,
        url,
        image,
        parentId,
        tags,
      });
      window.close();
    } catch (e) {
      alert(e);
    } finally {
      setPostLoading(false);
    }
  }

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    if (bookmarkFormData && e.target.name in bookmarkFormData) {
      setBookmarkFormData({
        ...bookmarkFormData,
        [e.target.name]: e.target.value || '',
      });
    }
  }

  function handleClickCollection() {
    setPage('collections');
  }

  return (
    <PopupLayout>
      {bookmarkFormData ? (
        <>
          <img width={50} height={50} src={bookmarkFormData.image} alt="page image" />
          <Form onSubmit={handleSubmit}>
            컬렉션 <Button onClick={handleClickCollection}>헤이</Button>
            {bookmarkFormData.collectionName && <div>{bookmarkFormData.collectionName}</div>}
            <TextInput name="title" value={bookmarkFormData.title} onChange={handleChangeInput} />
            <TextInput name="description" value={bookmarkFormData.description} onChange={handleChangeInput} />
            <TextInput name="url" value={bookmarkFormData.url} onChange={handleChangeInput} />
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
