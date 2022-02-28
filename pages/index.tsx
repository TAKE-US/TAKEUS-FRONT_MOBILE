import styled from '@emotion/styled';
import Image from 'next/image';

import Header from '@components/Header';
import SearchBar from '@components/SearchBar';
import DogCardContainer from '@components/Carousel/DogCardContainer';
import MainPageInform from '@components/MainPageInform';

import { getDogs } from '@service/network';
import { VerticalAlign } from '@styles/common';
import Loading from '@assets/Loading.gif';
import { DogCardListType } from '../types/dog';

const NextPageContainer = styled.div`
  ${VerticalAlign};
  justify-content: space-between;
  align-items: center;

  & > .mobile {
    display: none;
    @media all and (max-width: 768px) {
      display: block;
    }
  }

  & > .desktop {
    ${VerticalAlign};
    align-items: center;
    margin-top: 15rem;
    font: ${({ theme }) => theme.font.title1};
    @media all and (max-width: 768px) {
      display: none;
    }
  }
`;

const Home = ({ data }: { data: DogCardListType }) => {
  return (
    <NextPageContainer>
      <div className="mobile">
        <Header />
        <SearchBar />
        <DogCardContainer data={data} />
        <MainPageInform />
      </div>
      <div className="desktop">
        <p>모바일 버전입니다.</p>
        <p>화면 크기를 더 줄여주세요 :)</p>
        <Image src={Loading} width={450} height={450} alt="Loading Image" />
      </div>
    </NextPageContainer>
  );
};

export async function getStaticProps() {
  const { data } = await getDogs();
  const dogListwithCarousel = data?.dogList.slice(0, 10);
  return {
    props: {
      data: dogListwithCarousel,
    },
    revalidate: 2000,
  };
}

export default Home;
