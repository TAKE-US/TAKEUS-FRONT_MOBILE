import styled from '@emotion/styled';
import { VerticalAlign } from '@styles/common';

export const TotalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 4;
`;

export const SideBarContainer = styled.aside`
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
