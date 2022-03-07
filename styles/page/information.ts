import styled from '@emotion/styled';
import { VerticalAlign, Center } from '@styles/common';

const Container = styled.div`
  ${VerticalAlign}

  margin: 0 auto;
  margin-top: 5rem;

  overflow: scroll;
  align-items: center;

  font: ${({ theme }) => theme.font.title2_btn};

  h2 {
    line-height: 3rem;
    font: ${({ theme }) => theme.font.subheading1};
  }

  p {
    width: 85%;
    font: ${({ theme }) => theme.font.body1_btn};
    color: ${({ theme }) => theme.color.darkgray1};
    margin-top: 1.5rem;
  }

  .definition {
    width: 80%;
    height: 30%;
  }

  .question {
    ${VerticalAlign}
    margin-top: 5rem;
    width: 80%;
    height: 60%;
    justify-content: space-between;

    h3 {
      padding-bottom: 2rem;
    }

    article {
      padding: 1.5rem 0;
      border-top: 0.1rem solid black;
    }
  }

  .warning {
    background-color: ${({ theme }) => theme.color.lightgray1};
    height: 30%;
    ${VerticalAlign}
    align-items: center;
    padding: 3rem 0;
  }

  .button__container {
    height: 30rem;
    ${Center}

    button {
      background-color: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.white};
      border: none;
      border-radius: 1.4rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
      padding-left: 8rem;
      padding-right: 8rem;
    }
  }
`;

export default Container;
