import styled from '@emotion/styled';
import { SpaceAround, SpaceBetween } from '@styles/common';

export const SearchBarFormContainer = styled.div`
  width: 90%;
  margin-bottom: 1.5rem;
  ${SpaceAround}

  & > .dropdown__container {
    width: 87%;
    height: 75%;
    padding: 1rem;
    border-radius: 0.4rem;

    background-color: ${({ theme }) => theme.color.white};
    ${SpaceBetween}

    & > .contour {
      width: 1px;
      height: 150%;
      background-color: ${({ theme }) => theme.color.gray1};
    }
  }
`;

type ContainerType = {
  isCountrySelected: boolean;
  isAirportSelected: boolean;
};

export const DropdownContainer = styled.div<ContainerType>`
  ${SpaceBetween}
  width: 45%;
  & > .country {
    font: ${({ theme }) => theme.font.body1_medium};
    color: ${(props) =>
      props.isCountrySelected ? props.theme.color.black : props.theme.color.gray3};
  }
  & > .airport {
    font: ${({ theme }) => theme.font.body2};
    color: ${(props) =>
      props.isCountrySelected ? props.theme.color.black : props.theme.color.gray3};
  }
`;
