import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import ArrowLeft from '@assets/ArrowLeft.svg';
import ArrowRight from '@assets/ArrowRight.svg';
import { SpaceBetween } from '@styles/common';

const CarouselContainer = styled.section`
  ${SpaceBetween}
  width: 5rem;
  align-items: center;
`;

interface CarouselPropType {
  listRef: React.MutableRefObject<HTMLDivElement | null>;
  movingValue: number;
}

const Carousel = ({ listRef, movingValue }: CarouselPropType): ReactElement => {
  const [position, setPosition] = React.useState(0);

  const LeftScroll = () => {
    if (position > 0) {
      setPosition(position - movingValue);
    } else {
      setPosition(0);
    }

    if (listRef.current) {
      listRef.current.scrollTo({
        left: position - movingValue,
        behavior: 'smooth',
      });
    }
  };

  const RightScroll = () => {
    if (position < 1361) {
      setPosition(position + movingValue);
    } else {
      setPosition(1360);
    }

    if (listRef.current) {
      listRef.current.scrollTo({
        left: position + movingValue,
        behavior: 'smooth',
      });
    }
  };

  return (
    <CarouselContainer>
      <div className="left" onClick={() => LeftScroll()}>
        <ArrowLeft />
      </div>
      <div className="right" onClick={() => RightScroll()}>
        <ArrowRight />
      </div>
    </CarouselContainer>
  );
};

export default Carousel;
