import styled from '@emotion/styled';
import { VerticalAlign } from '@styles/common';

export const DogPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  & > .header__wrapper {
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
  }

  .result {
    width: 100%;
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
    justify-content: flex-start;
    align-items: center;

    img {
      border-radius: 0.6rem;
    }
  }
`;
