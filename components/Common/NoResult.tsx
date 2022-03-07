import { ReactElement } from 'react';
import styled from '@emotion/styled';

import { Center } from '@styles/common';
import Empty from '@assets/Empty.svg';

const NoResultContainer = styled.div`
  ${Center}
  width: 100vw;
  height: 60vh;
`;

const NoResult = (): ReactElement => {
  return (
    <NoResultContainer>
      <Empty />
    </NoResultContainer>
  );
};

export default NoResult;
