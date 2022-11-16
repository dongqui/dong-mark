import { css } from '@emotion/react';
import Image from 'next/image';

import { Bookmark } from 'common-types';

interface Props {
  bookmark: Bookmark;
}

function urlFormat(url: string) {
  let _url = url.replace(/https:\/\/|http:\/\/|www./g, '');
  return _url.split('/')[0];
}

function BookmarkCard({ bookmark }: Props) {
  return (
    <section
      css={css`
        display: flex;
        align-items: center;
        gap: 16px;
      `}
    >
      {/* // TODO: image domain 문제 해결 */}
      <img width={60} height={60} src={bookmark.image} alt={bookmark.title} />
      <div>
        <h3>{bookmark.title}</h3>
        <span>{bookmark.description}</span>
        <div>{urlFormat(bookmark.url)}</div>
      </div>
    </section>
  );
}

export default BookmarkCard;
