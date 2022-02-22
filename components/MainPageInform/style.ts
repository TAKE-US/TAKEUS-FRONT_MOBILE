import styled from '@emotion/styled';
import { VerticalAlign } from '@styles/common';

export const BeforeVolunteerContainer = styled.section`
  position: relative;
  top: -2rem;
  z-index: -1;
  ${VerticalAlign};
  align-items: center;

  & > section {
    width: 90%;
    height: 60%;
    position: absolute;
    top: 3rem;
    font: ${({ theme }) => theme.font.body2};
    color: ${({ theme }) => theme.color.gray3};
    ${VerticalAlign}
    justify-content: space-between;
    align-items: flex-start;

    h5 {
      font: ${({ theme }) => theme.font.smallheading1};
    }

    button {
      padding: 0.1rem;
      border-radius: 1.7rem;
      width: 10rem;
      color: ${({ theme }) => theme.color.white};
      font: ${({ theme }) => theme.font.body1_medium_btn};
      background-color: #1a1a1a;
      text-align: center;
    }
  }
`;

export const InformContainer = styled.div`
  margin: 0;
  ${VerticalAlign}
  width: 100%;
  align-items: center;
`;

export const AboutContainer = styled.section`
  ${VerticalAlign}
  width: 85%;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  & > h5 {
    font: ${({ theme }) => theme.font.smallheading1};
    color: ${({ theme }) => theme.color.primary};
  }

  & > svg {
    margin-top: 5rem;
  }

  & > .subtext {
    margin-top: 2rem;
    font: ${({ theme }) => theme.font.body1};
  }

  & > .icontext {
    color: ${({ theme }) => theme.color.gray3};
    font: ${({ theme }) => theme.font.body2};
    width: 72%;
    text-align: center;
  }

  button {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    font: ${({ theme }) => theme.font.body1_medium_btn};
    border: none;

    margin: 6rem 0;
    padding: 1rem;
    width: 80%;
    border-radius: 5rem;
  }
`;
