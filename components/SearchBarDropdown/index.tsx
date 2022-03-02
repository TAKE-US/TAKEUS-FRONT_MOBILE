import { ReactElement } from 'react';
import { DropdownContainer } from './style';

import { DropdownSelectProp, DataProp } from '@Customtypes/dropdown';
import DropdownArrow from '@assets/DropdownArrow.svg';

function SearchBarDropdown({ name, data }: DropdownSelectProp<Array<DataProp>>): ReactElement {
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
