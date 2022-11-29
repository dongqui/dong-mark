import { ReactElement } from 'react';
import Head from 'next/head';

import { BookMarkList } from 'containers';
import { ToolLayout } from 'components';
import type { NextPageWithLayout } from 'types';

const CollectionsPage: NextPageWithLayout = () => {
  return <BookMarkList />;
};

CollectionsPage.getLayout = function getLayout(Page: ReactElement) {
  return <ToolLayout>{Page}</ToolLayout>;
};

export default CollectionsPage;
