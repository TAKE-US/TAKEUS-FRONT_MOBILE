import styled from '@emotion/styled';
import { VerticalAlign } from '@styles/common';

export const NextPageContainer = styled.div`
  ${VerticalAlign};
  justify-content: space-between;
  align-items: center;

  & > .mobile {
    display: none;
    @media all and (max-width: 768px) {
      display: block;
    }
  }
`;
