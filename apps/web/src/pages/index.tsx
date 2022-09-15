import type { NextPage } from 'next';
import Head from 'next/head';

import { SideBar } from 'containers';
import { SearchBar } from 'components';
import { Input } from 'ui';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container flex">
        <SideBar />
        <div className="m-4">
          <SearchBar />
          <Input />
        </div>
      </main>
    </>
  );
};

export default Home;
