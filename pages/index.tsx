import type { NextPage } from 'next';
import { ReactElement } from 'react';
import styled from '@emotion/styled';

import HamburgerBtn from '@assets/hamburgerbtn.svg';
import TakeusLogo from '@assets/takeuslogo.svg'

import { SpaceBetween } from '@styles/common';


const Header = styled.header`
  ${SpaceBetween}
  height: 5rem;
  margin: 4rem 2rem 0 2rem;
`

const LoginButton = styled.button`
  border: 1px solid;
  border-radius: 4px;
  font: ${({ theme }) => theme.font.smallheading1_btn};
`

const Home: NextPage = (): ReactElement => {
  return (
      <Header>
        <HamburgerBtn />
        <TakeusLogo />
        <LoginButton>로그인</LoginButton>
      </Header>
    )
};

export default Home;
