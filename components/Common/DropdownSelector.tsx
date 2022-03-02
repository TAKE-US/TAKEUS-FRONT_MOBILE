import { ReactElement } from 'react';
import styled from '@emotion/styled';

const SelectorContainer = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 10;
  width: 100vw;
  height: 50vh;
  background-color: ${({ theme }) => theme.color.primary};
`;

const DropdownSelector = (): ReactElement => {
  return <SelectorContainer>Hello</SelectorContainer>;
};

export default DropdownSelector;
