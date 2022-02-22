import type { NextPage } from 'next';
import { ReactElement } from 'react';
import styled from '@emotion/styled';

import Header from '@components/Header';
import SearchBar from '@components/SearchBar';

const Home: NextPage = (): ReactElement => {
  return (
    <>
      <Header />
      <SearchBar />
    </>
  );
};

export default Home;
