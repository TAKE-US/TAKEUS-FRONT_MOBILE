import type { NextPage } from 'next';
import { ReactElement } from 'react';
import styled from '@emotion/styled';

import { VerticalAlign } from '@styles/common';
import Header from '@components/Header';
import SearchBar from '@components/SearchBar';
import MainPageInform from '@components/MainPageInform';
import Footer from '@components/Common/Footer';

import { getDogs } from '@service/network';

const NextPageContainer = styled.div`
  ${VerticalAlign};
`;

const Home: NextPage = (): ReactElement => {
  return (
    <NextPageContainer>
      <Header />
      <SearchBar />
      <MainPageInform />
      <Footer />
    </NextPageContainer>
  );
};

export async function getStaticProps() {
  const dogList = await getDogs();
  console.log(dogList);
  return {
    props: {
      dogList: [],
    },
    revalidate: 2000,
  };
}

export default Home;
