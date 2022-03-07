import { ReactElement } from 'react';
import styled from '@emotion/styled';
import LoadingImage from '@assets/LoadingImage.gif';
import { VerticalAlign } from '@styles/common';
import Image from 'next/image';

const LoadingContainer = styled.div`
  width: 100vw;
  ${VerticalAlign};
  align-items: center;
`;

const Loading = (): ReactElement => {
  return (
    <LoadingContainer>
      <Image src={LoadingImage} width={450} height={450} alt="Loading Image" />
    </LoadingContainer>
  );
};

export default Loading;
