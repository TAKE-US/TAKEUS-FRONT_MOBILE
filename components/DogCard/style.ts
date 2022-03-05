import styled from '@emotion/styled';
import { SpaceAround, Center } from '@styles/common';

export const DogCardWrapper = styled.article`
  margin-left: 0.4rem;
  flex: 0 0 auto;

  & > .info__dog {
    width: 100%;
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
