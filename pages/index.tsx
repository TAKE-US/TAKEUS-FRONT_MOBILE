import type { NextPage } from 'next';
import { ReactElement } from 'react';
import styled from '@emotion/styled';

import { VerticalAlign } from '@styles/common';
import Header from '@components/Header';
import SearchBar from '@components/SearchBar';
import DogCardContainer from '@components/Carousel/DogCardContainer';
import MainPageInform from '@components/MainPageInform';

import { getDogs } from '@service/network';

const NextPageContainer = styled.div`
  ${VerticalAlign};
  justify-content: space-between;
`;

const Home: NextPage = (): ReactElement => {
  return (
    <NextPageContainer>
      <Header />
      <SearchBar />
      <DogCardContainer />
      <MainPageInform />
    </NextPageContainer>
  );
};

export async function getStaticProps() {
  const dogList = await getDogs();
  return {
    props: {
      dogList: [],
    },
    revalidate: 2000,
  };
}

export default Home;
