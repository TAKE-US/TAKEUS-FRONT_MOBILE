import styled from '@emotion/styled';
import { SpaceAround } from '@styles/common';

export const Container = styled.div`
  height: 30%;
  width: 100%;
  flex-direction: column;

  .title__container {
    ${SpaceAround}
    align-items: center;

    h4 {
      text-align: left;
      vertical-align: center;
      font: ${({ theme }) => theme.font.title1};
    }
  }
`;

export const CardContainer = styled.article`
  width: 100%;
  height: 50%;
  display: flex;
  margin-bottom: 4rem;

  .card__container {
    margin-top: 1rem;
    margin-left: 1.8rem;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 0.4rem;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .image__container {
    margin-left: 0.4rem;
    flex: 0 0 auto;
  }
`;
