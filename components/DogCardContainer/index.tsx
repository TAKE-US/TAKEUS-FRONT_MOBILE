import React, { ReactElement } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Carousel from '@components/Common/Carousel';

import TestImage from '@assets/TestImage.png';
import { DogCardListType } from '@Customtypes/dog';
import { Container, CardContainer } from './style';

const DogCardContainer = ({
  dogListCarousel,
}: {
  dogListCarousel: DogCardListType;
}): ReactElement => {
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
          {dogListCarousel?.map((dog) => {
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
