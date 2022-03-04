import Header from '@components/Header';
import SearchBar from '@components/SearchBar';
import DogCardContainer from '@components/DogCardContainer';
import MainPageInform from '@components/MainPageInform';
import MobileInform from '@components/Common/MobileInform';

import { getDogs } from '@service/dogs';
import { getCountryAndAirport } from '@service/utils';
import { NextPageContainer } from '@styles/pageStyle';
import { DogCardListType } from '@Customtypes/dog';
import { countryAirportType } from '@Customtypes/utils';

interface HomePageProps {
  dogListCarousel: DogCardListType;
  countryAirportList: countryAirportType;
}

const Home = ({ dogListCarousel, countryAirportList }: HomePageProps) => {
  return (
    <NextPageContainer>
      <div className="mobile">
        <Header />
        <SearchBar countryAirportList={countryAirportList} />
        <DogCardContainer dogListCarousel={dogListCarousel} />
        <MainPageInform />
      </div>
      <MobileInform />
    </NextPageContainer>
  );
};

export async function getStaticProps() {
  const { dogList } = await getDogs();
  const dogListCarousel = dogList.slice(0, 10);
  const { countryAirportList } = await getCountryAndAirport();
  console.log(countryAirportList);

  return {
    props: {
      dogListCarousel,
      countryAirportList,
    },
    revalidate: 2000,
  };
}

export default Home;
