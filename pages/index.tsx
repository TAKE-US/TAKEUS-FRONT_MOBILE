import type { NextPage } from 'next';
import { ReactElement } from 'react';
import styled from '@emotion/styled';

import { VerticalAlign } from '@styles/common';
import Header from '@components/Header';
import SearchBar from '@components/SearchBar';
import MainPageInform from '@components/MainPageInform';
import Footer from '@components/Common/Footer';

const NextPageContainer = styled.div`
  ${VerticalAlign};
`;

export const Home: NextPage = (): ReactElement => {
  return (
    <NextPageContainer>
      <Header />
      <SearchBar />
      <MainPageInform />
      <Footer />
    </NextPageContainer>
  );
};

export default Home;
