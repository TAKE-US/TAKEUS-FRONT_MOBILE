import { ReactElement } from 'react';
import styled from '@emotion/styled';

import { SearchBarFormContainer, DropdownContainer } from './style';
import SeacrhBtn from '@assets/SearchBtn.svg';
import DropdownArrow from '@assets/DropdownArrow.svg';
import { DropdownSelectProp, DataProp } from '@Customtypes/dropdown';

const SearchBarDropdown = () => {
  return (
    <SearchBarFormContainer>
      <div className="dropdown__container">
        <Dropdown name={'국가'} />
        <div className="contour"></div>
        <Dropdown name={'도착 공항'} />
      </div>
      <SeacrhBtn />
    </SearchBarFormContainer>
  );
};

function Dropdown({ name, data }: DropdownSelectProp<Array<DataProp>>): ReactElement {
  return (
    <DropdownContainer>
      <p>
        {name}
        {data}
      </p>
      <DropdownArrow />
    </DropdownContainer>
  );
}

const SelectContainer = styled.div`
  position: absolute;
  top: 50vh;
  height: 50%;
  width: 100vw;
  z-index: 2;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.gray1};
`;

function DropdownSelector(data: Array<DataProp>): ReactElement {
  return <SelectContainer>This is Data</SelectContainer>;
}

export default SearchBarDropdown;
