import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

import Overlay from '@components/Overlay';
import { VerticalAlign } from '@styles/common';
import useModals from '@hooks/useModals';
import { modalList } from '@components/Modals';

const SideBarContainer = styled.aside`
  ${VerticalAlign}
  height: 100%;
  width: 83%;
  padding-left: 3rem;
  padding-top: 3rem;

  top: 0;
  position: absolute;
  align-items: flex-start;
  z-index: 3;
  font: ${({ theme }) => theme.font.body1};
  background-color: ${({ theme }) => theme.color.white};

  & > .XBtn {
    width: 90%;
    height: 8%;
    display: flex;
    justify-content: flex-end;
  }

  & > span {
    height: 10%;
  }

  & > ul {
    ${VerticalAlign}
    height: 20%;
    justify-content: space-around;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 4;
`;

const SideBar = (): React.FC => {
  const { closeModal } = useModals();
  const handleClose = () => {
    closeModal(modalList.SideBar);
  };

  return (
    <Container>
      <SideBarContainer>
        <div className="XBtn" onClick={handleClose}>
          {' '}
          X{' '}
        </div>
        <span> Login </span>
        <ul>
          <Link href={'/'}>홈</Link>
          <Link href={'/'}>이동봉사 정보</Link>
          <Link href={'/'}>대상견 찾기</Link>
          <Link href={'/'}>이동봉사 후기</Link>
          <Link href={'/'}>About us</Link>
        </ul>
      </SideBarContainer>
      <Overlay onClose={handleClose} />
    </Container>
  );
};

export default SideBar;
