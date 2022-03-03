import { ReactElement } from 'react';
import styled from '@emotion/styled';
import useModals from '@hooks/useModals';
import { modalList } from '@components/Modals';

import Overlay from '@components/Overlay';
import DeleteIcon from '@assets/DeleteIcon.svg';
import { VerticalAlign } from '@styles/common';

const SelectorContainer = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 3;
  width: 100vw;
  height: 60vh;

  & > section {
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 1rem;
    height: 100%;
    ${VerticalAlign}
    justify-content: space-between;
    align-items: center;
  }

  .XButton {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 80%;
    height: 20%;
  }

  .list {
    width: 90%;
    height: 80%;
    list-style: none;
    overflow: scroll;

    .item {
      ${VerticalAlign}
      justify-content: space-around;
      border-bottom: 1px solid;
      height: 22%;
      border-color: ${({ theme }) => theme.color.gray1};
    }

    .country {
      font: ${({ theme }) => theme.font.body2_btn};
      color: ${({ theme }) => theme.color.gray2};
    }

    .airport {
      font: ${({ theme }) => theme.font.body1_btn};
    }
  }
`;

const DropdownSelector = (): ReactElement => {
  const { closeModal } = useModals();
  const handleClose = () => {
    closeModal(modalList.DropdownSelector);
  };

  return (
    <>
      <Overlay />
      <SelectorContainer>
        <section>
          <div className="XButton">
            <DeleteIcon onClick={handleClose} />
          </div>
          <ul className="list">
            <li className="item">
              <p className="country">New York</p>
              <p className="airport">덜레스 국제공항</p>
            </li>
            <li className="item">
              <p className="country">New York</p>
              <p className="airport">덜레스 국제공항</p>
            </li>
          </ul>
        </section>
      </SelectorContainer>
    </>
  );
};

export default DropdownSelector;
