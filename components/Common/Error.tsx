import { ReactElement } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

import LoadingImage from '@assets/LoadingImage.gif';
import { VerticalAlign, Center } from '@styles/common';

const ErrorContainer = styled.div`
  ${Center}
  ${VerticalAlign}
  width: 100vw;
  height: 60vh;

  .text {
    margin-top: 2rem;
    text-align: center;
  }

  p {
    font: ${({ theme }) => theme.font.body2_btn};
  }
`;

const Error = (): ReactElement => {
  return (
    <ErrorContainer>
      <Image src={LoadingImage} width={450} height={450} alt="Loading Image" />
      <div className="text">
        <p> 일시적인 오류가 발생했습니다😥</p>
        <p> 페이지를 새로고침 해주세요.</p>
      </div>
    </ErrorContainer>
  );
};

export default Error;
