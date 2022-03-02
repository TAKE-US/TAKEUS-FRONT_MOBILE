import { ReactElement } from 'react';
import styled from '@emotion/styled';
import { DropdownSelectProp, DataProp } from '@Customtypes/dropdown';

import DropdownArrow from '@assets/DropdownArrow.svg';
import { SpaceBetween } from '@styles/common';

const DropdownContainer = styled.div`
  ${SpaceBetween}
  font: ${({ theme }) => theme.font.body1_medium};
  width: 45%;
  & > p {
    color: ${({ theme }) => theme.color.gray3};
  }
`;

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
