import Link from 'next/link';

import { useBookmarksQuery } from 'hooks';

import { BookmarkCard } from 'components';

function BookmarkList() {
  const { data: bookmarks } = useBookmarksQuery();

  return (
    <ul>
      {bookmarks?.map((bookmark) => (
        <li key={bookmark.id}>
          <Link href={`${location.pathname}/bookmarks/${bookmark.id}`}>
            <a>
              <BookmarkCard bookmark={bookmark} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default BookmarkList;
