import styled from '@emotion/styled';
import DropdownArrow from '@assets/DropdownArrow.svg';
import { SpaceBetween } from '@styles/common';
import { ReactElement } from 'react';

const DropdownContainer = styled.div`
  ${SpaceBetween}
  font: ${({ theme }) => theme.font.body1_medium};
  width: 45%;
  & > p {
    color: ${({ theme }) => theme.color.gray3};
  }
`;

interface DropdownSelectProp<T> {
  name: string;
  data?: Array<T>;
}

interface DataProp {
  name: string;
}

const Dropdown = ({ name, data }: DropdownSelectProp<Array<DataProp>>): ReactElement => {
  return (
    <DropdownContainer>
      <p>
        {name}
        {data}
      </p>
      <DropdownArrow />
    </DropdownContainer>
  );
};

export default Dropdown;
