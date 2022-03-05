import Header from '@components/Header';
import SearchBar from '@components/SearchBar';
import DogCardContainer from '@components/DogCardContainer';
import MainPageInform from '@components/MainPageInform';
import MobileInform from '@components/Common/MobileInform';

import { getDogs } from '@service/dogs';
import { getDepartureList } from '@service/utils';
import { NextPageContainer } from '@styles/pageStyle';
import { DogCardListType } from '@Customtypes/dog';
import { DepartureType } from '@Customtypes/utils';
import DeparueProvider from '@context/DepartureProvider';

interface HomePageProps {
  dogListCarousel: DogCardListType;
  departureList: DepartureType;
}

const Home = ({ dogListCarousel, departureList }: HomePageProps) => {
  return (
    <NextPageContainer>
      <DeparueProvider>
        <div className="mobile">
          <Header />
          <SearchBar departureList={departureList} />
          <DogCardContainer dogListCarousel={dogListCarousel} />
          <MainPageInform />
        </div>
      </DeparueProvider>
      <MobileInform />
    </NextPageContainer>
  );
};

export async function getStaticProps() {
  const { dogList } = await getDogs();
  const dogListCarousel = dogList.slice(0, 10);
  const { departureList } = await getDepartureList();

  return {
    props: {
      dogListCarousel,
      departureList,
    },
    revalidate: 2000,
  };
}

export default Home;
