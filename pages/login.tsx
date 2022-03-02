import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { GoogleLogin } from 'react-google-login';

import { postToken } from '@service/network';

import { VerticalAlign, Center, SpaceAround } from '@styles/common';
import LoginBackGround from '@assets/LoginBackGround.png';
import LoginTitle from '@assets/LoginTitle.png';
import GoogleIcon from '@assets/GoogleIcon.svg';

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
    height: 60%;
    width: 50%;
    justify-content: space-between;
    ${VerticalAlign}

    .title {
      height: 20%;
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
  const router = useRouter();

  const handleSuccess = async (token: string, social: string) => {
    const { data, error } = await postToken(token, social);
    localStorage.setItem('email', data.email);
    localStorage.setItem('token', data.token);
    localStorage.setItem('ID', data.id);
    localStorage.setItem('issuedAt', data.issuedAt);

    router.push('/');
  };

  //TODO fail 처리할 모달 작성 예정 
  const handleFailure = () => {console.log('fail')}

  return (
    <Container>
      <Image className="background" src={LoginBackGround} alt="LoginBackground" layout="fill" />
      <div className="content">
        <div className="title">
          <Image className="takeus" width={147} height={36} src={LoginTitle} alt="TakeUS" />
          <p>SNS 계정으로 손쉽게 가입하고 Takers가 될 수 있어요:)</p>
        </div>
        < /div>
        <GoogleLogin
          clientId={process.env.GOOGLE_API_KEY}
          render={(renderProps) => (
            <button onClick={renderProps.onClick}>
              <GoogleIcon />
              <p>구글로 시작하기</p>
            </button>
          )}
          onSuccess={(res) => handleSuccess(res.accessToken, 'google')}
          onFailure={handleFailure}
        />
    </Container>
  );
};

export default Login;
