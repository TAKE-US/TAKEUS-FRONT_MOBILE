import Image from 'next/image';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import Header from '@components/Header';

import Loading from '@assets/Loading.gif';
import { VerticalAlign } from '@styles/common';

const Container = styled.div`
  ${VerticalAlign};
  align-items: center;
  margin-top: 15rem;
  font: ${({ theme }) => theme.font.title2_btn};

  & > p {
    margin-bottom: 2rem;
  }

  & > button {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    border: none;
    border-radius: 1rem;
    padding: 0.5rem;
  }
`;

export default function Custom404() {
  const router = useRouter();
  const onClick = () => {
    router.push('/');
  };

  return (
    <>
      <Header />
      <Container>
        <Image src={Loading} width={350} height={350} alt="Loading Image" />
        <p>존재하지 않는 페이지입니다.</p>
        <button onClick={onClick}>메인 페이지로 돌아가기</button>
      </Container>
    </>
  );
}
