import styled from '@emotion/styled';
import { VerticalAlign } from '@styles/common';

export const SearchBarContainer = styled.div`
  position: relative;
  z-index: 1;
`;

export const SearchBarContentContainer = styled.div`
  width: 100%;
  height: 50%;
  ${VerticalAlign};
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0.5rem;

  & > p {
    font: ${({ theme }) => theme.font.body2};
    color: ${({ theme }) => theme.color.gray3};
    text-align: center;
  }
`;
