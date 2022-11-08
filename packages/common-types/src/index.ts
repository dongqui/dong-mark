export interface BookMark {
  id: string;
  title: string;
  image: string;
  description: string;
  url: string;
  parentId: string | null;
  tags: string[];
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Collection {
  id: string;
  name: string;
  parentId: string | null;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}