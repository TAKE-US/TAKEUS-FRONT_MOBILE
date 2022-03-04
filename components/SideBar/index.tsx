import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import Overlay from '@components/Overlay';
import { modalList } from '@components/Modals';
import useModals from '@hooks/useModals';

import { VerticalAlign } from '@styles/common';
import DeleteIcon from '@assets/DeleteIcon.svg';

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
  font: ${({ theme }) => theme.font.title2_btn};
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
    height: 25%;
    justify-content: space-around;
  }
`;

const TotalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 4;
`;

const SideBar = (): ReactElement => {
  const router = useRouter();
  const { closeModal } = useModals();
  const handleClose = () => {
    closeModal(modalList.SideBar);
  };
  const handleMove = (url: string) => {
    router.push(url);
    closeModal(modalList.SideBar);
  };

  return (
    <TotalContainer>
      <SideBarContainer>
        <div className="XBtn" onClick={handleClose}>
          <DeleteIcon />
        </div>
        <ul>
          <span onClick={() => handleMove('/')}>홈</span>
          <span onClick={() => handleMove('/information')}>이동봉사 정보</span>
          <span onClick={() => handleMove('/dogs')}>대상견 찾기</span>
          <span onClick={() => handleMove('/reviews')}>이동봉사 후기</span>
          <span onClick={() => handleMove('/about')}>About us</span>
        </ul>
      </SideBarContainer>
      <Overlay onClose={handleClose} />
    </TotalContainer>
  );
};

export default SideBar;
