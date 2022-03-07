import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import SearchBarForm from '@components/SearchBarForm';

import useDeparture from '@hooks/useDeparture';
import { DepartureType } from '@Customtypes/utils';
import MainBackGroundImage from '@assets/MainBackground.png';
import { SearchBarContainer, SearchBarContentContainer } from './style';

const SearchBar = ({ departureList }: { departureList: DepartureType }) => {
  const { setDepartureList } = useDeparture();
  const router = useRouter();
  const handleSubmit = (airport: string, country?: string) => {
    router.push({
      pathname: 'dogs',
      query: { country, airport },
    });
  };

  useEffect(() => {
    setDepartureList(departureList);
  }, [departureList, setDepartureList]);

  return (
    <SearchBarContainer>
      <Image src={MainBackGroundImage} height={300} width={500} alt="Main BackGround Image" />
      <SearchBarContentContainer>
        <SearchBarForm handleSubmit={handleSubmit} />
        <p>
          새로운 삶을 찾아 먼 바다를 건너야하는 생명에게 새로운 삶을 <br /> 선물해주는 이들을 우리는
          Takers라고 부릅니다.
        </p>
      </SearchBarContentContainer>
    </SearchBarContainer>
  );
};

export default SearchBar;
