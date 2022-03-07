import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import Overlay from '@components/Common/Overlay';
import { modalList } from '@components/Modals';

import useModals from '@hooks/useModals';
import DeleteIcon from '@assets/DeleteIcon.svg';
import { TotalContainer, SideBarContainer } from './style';

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
