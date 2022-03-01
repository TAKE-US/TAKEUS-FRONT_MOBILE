import Image from 'next/image';
import styled from '@emotion/styled';
import LoginBackGround from '@assets/LoginBackGround.png';
import LoginTitle from '@assets/LoginTitle.png';
import { VerticalAlign, Center, SpaceBetween, SpaceAround } from '@styles/common';
import GoogleButton from '@assets/GoogleButton.svg';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  ${VerticalAlign}
  ${Center}

  & > .background {
    z-index: 0;
  }

  & > .content {
    z-index: 1;
    position: relative;
    height: 65%;
    width: 45%;
    justify-content: space-between;
    ${VerticalAlign}

    .title {
      height: 17%;
      ${VerticalAlign}
      justify-content: space-between;
    }

    p {
      text-align: center;
      font: ${({ theme }) => theme.font.smallheading1};
      color: ${({ theme }) => theme.color.white};
    }
  }

  button {
    z-index: 1;
    position: relative;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 2.5rem;
    border: none;
    font: ${({ theme }) => theme.font.body1_btn};
    padding: 1rem 10rem;

    ${SpaceAround}

    & > p {
      margin-left: 3rem;
    }
  }
`;

const Login = () => {
  return (
    <Container>
      <Image className="background" src={LoginBackGround} alt="LoginBackground" layout="fill" />
      <div className="content">
        <div className="title">
          <Image className="takeus" width={147} height={36} src={LoginTitle} alt="TakeUS" />
          <p>SNS 계정으로 손쉽게 가입하고 Takers가 될 수 있어요:)</p>
        </div>
      </div>
      <button>
        <GoogleButton />
        <p>구글로 시작하기</p>
      </button>
    </Container>
  );
};

export default Login;
