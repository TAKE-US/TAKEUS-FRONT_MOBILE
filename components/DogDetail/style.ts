import styled from '@emotion/styled';
import { VerticalAlign } from '@styles/common';

export const DogDetailContainer = styled.section`
  ${VerticalAlign}
  height: 100vh;
  width: 100%;
  align-items: space-between;
  margin: 0 auto;

  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  .title {
    display: flex;
    justify-content: space-between;
    height: 10%;
    padding: 0 2rem;
    margin-top: 2rem;

    .name {
      font: ${({ theme }) => theme.font.subheading1};
    }
    .institution {
      font: ${({ theme }) => theme.font.body1_btn};
    }
    .icon {
      display: flex;
      align-items: center;
    }
  }

  .content {
    height: 50%;
    padding: 0 2rem;

    h5 {
      font: ${({ theme }) => theme.font.smallheading1_btn};
      font-size: 1.6rem;
      padding-bottom: 0.5rem;
    }

    .departure {
      height: 20%;
      font: ${({ theme }) => theme.font.body1_medium_btn};

      .text {
        display: flex;
        align-items: center;
        padding-top: 0.5rem;
        & > p {
          padding-left: 1rem;
        }
      }
    }
    .dog {
      font: ${({ theme }) => theme.font.body1_medium_btn};
      ul {
        padding-bottom: 2rem;
      }

      li {
        list-style: none;
        padding-top: 0.5rem;
        width: 100%;
      }
    }
  }
`;
