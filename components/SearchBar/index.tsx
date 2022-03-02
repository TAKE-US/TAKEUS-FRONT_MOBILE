import React from 'react';
import Image from 'next/image';

import SearchBarDropdown from '@components/SearchBarDropdown';
import { Container, SearchBarContainer } from './style';
import MainBackGroundImage from '@assets/MainBackground.png';

const SearchBar = () => {
  return (
    <Container>
      <Image src={MainBackGroundImage} alt="Main BackGround Image" />
      <SearchBarContainer>
        <SearchBarDropdown />
        <p>
          새로운 삶을 찾아 먼 바다를 건너야하는 생명에게 새로운 삶을 <br /> 선물해주는 이들을 우리는
          Takers라고 부릅니다.
        </p>
      </SearchBarContainer>
    </Container>
  );
};

export default SearchBar;
