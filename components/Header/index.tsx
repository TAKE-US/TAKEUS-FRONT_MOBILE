import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { modalList } from '@components/Modals';
import useModals from '@hooks/useModals';

import { SpaceBetween } from '@styles/common';
import HamburgerBtn from '@assets/hamburgerbtn.svg';
import TakeusLogo from '@assets/takeuslogo.svg';

const Container = styled.header`
  ${SpaceBetween}
  height: 4rem;
  margin: 4rem 2rem 0 2rem;
`;

const LoginButton = styled.button`
  border: 1px solid;
  border-radius: 4px;
  padding: 0.3rem;
  font: ${({ theme }) => theme.font.smallheading1_btn};
`;

const Header = () => {
  const router = useRouter();
  const { openModal } = useModals();
  const [isLogin, setIsLogin] = useState<boolean | null>(null);

  const handleSidebar = () => {
    openModal(modalList.SideBar);
  };
  const handleLoginButton = () => {
    router.push('/login');
  };
  const handleLogoutButton = () => {
    localStorage.clear();
    setIsLogin(null);
    router.push('/');
  };

  useEffect(() => {
    const getIssuedAtTime = () => localStorage.getItem('issuedAt');
    const getNowTime = () => Math.floor(+new Date() / 1000);
    const ONE_HOUR = 3600;
    const isValidToken = getNowTime() - Number(getIssuedAtTime()) < ONE_HOUR;

    setIsLogin(isValidToken);
  }, []);

  return (
    <Container>
      <HamburgerBtn onClick={handleSidebar} />
      <TakeusLogo />
      <LoginButton onClick={!isLogin ? handleLoginButton : handleLogoutButton}>
        {!isLogin ? '로그인' : '로그아웃'}
      </LoginButton>
    </Container>
  );
};

export default Header;
