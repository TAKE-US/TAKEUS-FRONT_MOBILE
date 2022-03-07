import styled from '@emotion/styled';
import { VerticalAlign } from '@styles/common';

const StyledContainer = styled.section`
  height: 23%;
  ${VerticalAlign}
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 1rem 1rem;
  background-color: ${({ theme }) => theme.color.lightgray1};

  header {
    width: 90%;
  }

  .content {
    font: ${({ theme }) => theme.font.title2_btn};
  }
`;

export default StyledContainer;
