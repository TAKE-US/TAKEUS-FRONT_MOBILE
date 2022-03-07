import styled from '@emotion/styled';
import { SpaceAround, Center } from '@styles/common';

export const DogCardWrapper = styled.article`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > .info__dog {
    width: 15rem;
    ${SpaceAround}

    .name {
      font: ${({ theme }) => theme.font.smallheading1_btn};
    }
    .airport {
      font: ${({ theme }) => theme.font.body2_btn};
      color: ${({ theme }) => theme.color.primary_darker};
      display: flex;
      align-items: center;
      border: 1px solid #f29c4a;
      border-radius: 2.4rem;
    }
  }

  & > .info__person {
    padding-top: 0.5rem;
    ${Center}
    font: ${({ theme }) => theme.font.body2};
    color: ${({ theme }) => theme.color.gray3};

    & > p {
      padding-right: 0.5rem;
    }
  }
`;
