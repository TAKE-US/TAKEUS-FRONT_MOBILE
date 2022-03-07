import styled from '@emotion/styled';
import { VerticalAlign } from '@styles/common';

type SelectorPropType = {
  height: number;
  isBorder: boolean;
};

export const SelectorContainer = styled.div<SelectorPropType>`
  position: fixed;
  bottom: 0;
  z-index: 2;
  width: 100vw;
  height: ${(props) => props.height && `${props.height}vh`};

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
    &::-webkit-scrollbar {
      display: none;
    }

    .item {
      ${VerticalAlign}
      justify-content: space-around;
      border-bottom: 1px solid;
      height: 22%;
      border-color: ${(props) =>
        props.isBorder ? props.theme.color.gray1 : props.theme.color.white};
    }

    .country {
      font: ${({ theme }) => theme.font.body2_btn};
      color: ${({ theme }) => theme.color.gray2};
    }

    .city {
      font: ${({ theme }) => theme.font.body1_medium_btn};
      color: ${({ theme }) => theme.color.gray2};
      padding-left: 1rem;
    }

    .airport {
      font: ${({ theme }) => theme.font.body1_btn};
      padding-left: 1rem;
    }
  }
`;
