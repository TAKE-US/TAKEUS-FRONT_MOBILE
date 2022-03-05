import Image from 'next/image';
import { DogCardType } from '@Customtypes/dog';
import styled from '@emotion/styled';
import TestImage from '@assets/TestImage.png';

const DogCardWrapper = styled.article`
  margin-left: 0.4rem;
  flex: 0 0 auto;
`;

const DogCard = ({ dogCardInfo }: { dogCardInfo: DogCardType }) => {
  const { _id } = dogCardInfo;

  return (
    <DogCardWrapper>
      <Image src={TestImage} width={150} height={150} alt="TestImage" />
    </DogCardWrapper>
  );
};

export default DogCard;
