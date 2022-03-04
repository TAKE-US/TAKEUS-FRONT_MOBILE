import styled from '@emotion/styled';
import Image from 'next/image';

import { VerticalAlign } from '@styles/common';
import Loading from '@assets/Loading.gif';

const Container = styled.section`
  ${VerticalAlign};
  align-items: center;
  margin-top: 15rem;
  font: ${({ theme }) => theme.font.title1};
  @media all and (max-width: 768px) {
    display: none;
  }
`;

const MobileInform = () => {
  return (
    <Container>
      <p>모바일 버전입니다.</p>
      <p>모바일 기기를 선택해주세요 :)</p>
      <Image src={Loading} width={450} height={450} alt="Loading Image" />
    </Container>
  );
};

export default MobileInform;
