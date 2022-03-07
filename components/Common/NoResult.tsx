import { ReactElement } from 'react';
import styled from '@emotion/styled';

import { Center, VerticalAlign } from '@styles/common';
import Empty from '@assets/Empty.svg';

const NoResultContainer = styled.div`
  ${Center}
  ${VerticalAlign}
  width: 100vw;
  height: 60vh;

  .text {
    margin-top: 2rem;
    text-align: center;
  }

  p {
    font: ${({ theme }) => theme.font.body2_btn};
  }
`;

const NoResult = (): ReactElement => {
  return (
    <NoResultContainer>
      <Empty />
      <div className="text">
        <p> 앗! 검색결과가 없어요😥</p>
        <p> 다시 검색해주세요.</p>
      </div>
    </NoResultContainer>
  );
};

export default NoResult;
