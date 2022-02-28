import React, { ReactElement } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import Carousel from '@components/Carousel';

import { SpaceAround } from '@styles/common';
import TestImage from '@assets/TestImage.png';
import { DogCardListType } from '../../types/dog';

const Container = styled.div`
  height: 30%;
  width: 100%;
  margin-top: -1rem;
  flex-direction: column;

  .title__container {
    ${SpaceAround}
    align-items: center;

    h4 {
      text-align: left;
      vertical-align: center;
      font: ${({ theme }) => theme.font.title1};
    }
  }
`;

const CardContainer = styled.article`
  width: 100%;
  height: 50%;
  display: flex;
  margin-bottom: 4rem;

  .card__container {
    margin-top: 1rem;
    margin-left: 1.8rem;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 0.4rem;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .image__container {
    margin-left: 0.4rem;
    flex: 0 0 auto;
  }
`;

const DogCardContainer = ({ data }: { data: DogCardListType }): ReactElement => {
  const listRef = React.useRef<HTMLDivElement | null>(null);
  const movingValue = 162;

  const router = useRouter();
  const onClick = (id: string) => {
    router.push(`/dogs/${id}`);
  };

  return (
    <Container>
      <div className="title__container">
        <h4>
          1622 마리의 대상견이 <br />
          이동 봉사를 기다리고 있습니다.
        </h4>
        <Carousel listRef={listRef} movingValue={movingValue} />
      </div>
      <CardContainer>
        <div className="card__container" ref={listRef}>
          {data?.map((dog) => {
            return (
              <div className="image__container" key={dog._id} onClick={() => onClick(dog._id)}>
                <Image src={TestImage} width={150} height={150} alt="TestImage" />
              </div>
            );
          })}
        </div>
      </CardContainer>
    </Container>
  );
};

export default DogCardContainer;
