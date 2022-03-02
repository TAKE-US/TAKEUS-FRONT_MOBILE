import styled from '@emotion/styled';
import { SpaceBetween } from '@styles/common';

export const DropdownContainer = styled.div`
  ${SpaceBetween}
  font: ${({ theme }) => theme.font.body1_medium};
  width: 45%;
  & > p {
    color: ${({ theme }) => theme.color.gray3};
  }
`;
