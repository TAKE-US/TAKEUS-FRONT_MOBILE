import { ReactElement } from 'react';
import styled from '@emotion/styled';
import Overlay from '@components/Overlay';

const SelectorContainer = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 3;
  width: 100vw;
  height: 50vh;

  & > section {
    background-color: ${({ theme }) => theme.color.primary};
    height: 100%;
  }
`;

const DropdownSelector = (): ReactElement => {
  return (
    <>
      <Overlay />
      <SelectorContainer>
        <section>Hello</section>
      </SelectorContainer>
    </>
  );
};

export default DropdownSelector;
