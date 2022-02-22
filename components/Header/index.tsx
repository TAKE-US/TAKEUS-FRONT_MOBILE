import styled from '@emotion/styled';

import { SpaceBetween } from '@styles/common';
import useModals from '@hooks/useModals';
import { modalList } from '@components/Modals';

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
  font: ${({ theme }) => theme.font.smallheading1_btn};
`;

const Header = () => {
  const { openModal } = useModals();
  const handleSidebar = () => {
    openModal(modalList.SideBar);
  };

  return (
    <Container>
      <HamburgerBtn onClick={handleSidebar} />
      <TakeusLogo />
      <LoginButton>로그인</LoginButton>
    </Container>
  );
};

export default Header;
