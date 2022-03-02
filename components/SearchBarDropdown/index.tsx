import { ReactElement } from 'react';

import { DropdownSelectProp, DataProp } from '@Customtypes/dropdown';

import { SearchBarFormContainer, DropdownContainer } from './style';
import SeacrhBtn from '@assets/SearchBtn.svg';
import DropdownArrow from '@assets/DropdownArrow.svg';

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

export default SearchBarDropdown;
