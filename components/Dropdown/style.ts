import styled from '@emotion/styled';
import { VerticalAlign } from '@styles/common';

export const SelectorContainer = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 2;
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
