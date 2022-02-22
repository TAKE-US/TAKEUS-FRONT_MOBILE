import React from 'react';
import Image from 'next/image';
import Dropdown from '@components/Common/Dropdown';
import { Container, SearchBarContainer, SearchBarFormContainer } from './style';
import MainBackGroundImage from '@assets/MainBackground.png';
import SeacrhBtn from '@assets/SearchBtn.svg';

const SearchBarForm = () => {
  return (
    <SearchBarFormContainer>
      <div className="dropdown__container">
        <Dropdown name={'국가'} />
        <div className="contour"></div>
        <Dropdown name={'도착 공항'} />
      </div>
      <SeacrhBtn />
    </SearchBarFormContainer>
  );
};

const SearchBar = () => {
  return (
    <Container>
      <Image src={MainBackGroundImage} alt="Main BackGround Image" />
      <SearchBarContainer>
        <SearchBarForm />
        <p>
          새로운 삶을 찾아 먼 바다를 건너야하는 생명에게 새로운 삶을 <br /> 선물해주는 이들을 우리는
          Takers라고 부릅니다.
        </p>
      </SearchBarContainer>
    </Container>
  );
};

export default SearchBar;
