import { Bookmark } from 'common-types';

export type WebpageMetaData = Pick<Bookmark, 'title' | 'image' | 'description' | 'url'>;

export interface BookmarkFormData extends WebpageMetaData {
  collectionName: string;
  parentId: string;
  tags: string[];
}
