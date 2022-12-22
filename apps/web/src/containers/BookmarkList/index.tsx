import Link from 'next/link';
import { useRouter } from 'next/router';

import { List } from 'ui';

import { useBookmarksQuery, useSelectedCollectionId } from 'hooks';
import { BookmarkCard } from 'components';

function BookmarkList() {
  const router = useRouter();
  const [selectedCollectionId, _] = useSelectedCollectionId();
  const { data: bookmarks } = useBookmarksQuery(selectedCollectionId);

  return (
    <List>
      {bookmarks?.map((bookmark) => (
        <List.Row key={bookmark.id}>
          <Link href={`${router.asPath}bookmarks/${bookmark.id}`}>
            <a>
              <BookmarkCard bookmark={bookmark} />
            </a>
          </Link>
        </List.Row>
      ))}
    </List>
  );
}

export default BookmarkList;
