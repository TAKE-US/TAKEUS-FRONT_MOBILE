import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@components/Header';
import SearchBarForm from '@components/SearchBarForm';
import { getCountryAndAirport } from '@service/utils';

import { countryAirportType } from '@Customtypes/utils';

import styled from '@emotion/styled';
import { VerticalAlign } from '@styles/common';

const DogPageContainer = styled.div`
  height: 100vh;
  width: 100vw;

  & > .header__wrapper {
    height: 23%;
    ${VerticalAlign}
    justify-content: space-between;
    align-items: center;
    border-radius: 0 0 1rem 1rem;
    background-color: ${({ theme }) => theme.color.lightgray1};

    header {
      width: 90%;
    }

    .content {
      font: ${({ theme }) => theme.font.title2_btn};
    }
  }
`;

const DogsPage = () => {
  const router = useRouter();
  const [countryAirportList, setList] = useState<countryAirportType>(null);

  useEffect(() => {
    const handleList = async () => {
      const { countryAirportList } = await getCountryAndAirport();
      setList(countryAirportList);
    };
    handleList();
  }, []);

  // 처음 진입 : 검색 결과, 공항 리스트,
  // 다시 클릭 시 : 검색 결과만 변경할 수 있도록
  // Component.reducer.ts 에서 컴포넌트를 활용하자
  // pattern Matching 활용하기

  return (
    <DogPageContainer>
      <div className="header__wrapper">
        <Header />
        <p className="content">도움을 기다리는 입양견들을 만나보세요.</p>
        <SearchBarForm countryAirportList={countryAirportList} />
      </div>
      This is the Dog Page
    </DogPageContainer>
  );
};

export default DogsPage;
