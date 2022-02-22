import styled from '@emotion/styled';
import { SpaceAround, SpaceBetween, VerticalAlign } from '@styles/common';

export const Container = styled.div`
  position: relative;
  top: -2rem;
  z-index: -1;
`;

export const SearchBarContainer = styled.div`
  width: 100%;
  height: 100%;
  ${VerticalAlign};
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -6rem;

  & > p {
    font: ${({ theme }) => theme.font.body2};
    color: ${({ theme }) => theme.color.gray3};
    text-align: center;
  }
`;

export const SearchBarFormContainer = styled.div`
  width: 90%;
  margin-bottom: 1.5rem;
  ${SpaceAround}

  & > .dropdown__container {
    width: 87%;
    height: 75%;
    padding: 1rem;
    border-radius: 0.4rem;

    background-color: ${({ theme }) => theme.color.white};
    ${SpaceBetween}

    & > .contour {
      width: 1px;
      height: 150%;
      background-color: ${({ theme }) => theme.color.gray1};
    }
  }
`;
