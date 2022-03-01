import styled from '@emotion/styled';
import { useRouter } from 'next/router';

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
  const handleSidebar = () => {
    openModal(modalList.SideBar);
  };
  const handleLoginButton = () => {
    router.push('/login');
  };

  return (
    <Container>
      <HamburgerBtn onClick={handleSidebar} />
      <TakeusLogo />
      <LoginButton onClick={handleLoginButton}>로그인</LoginButton>
    </Container>
  );
};

export default Header;
