import { ReactElement } from 'react';

import { SearchBarFormContainer, DropdownContainer } from './style';
import SeacrhBtn from '@assets/SearchBtn.svg';
import { countryAirportType } from '@Customtypes/utils';
import DropdownArrow from '@assets/DropdownArrow.svg';

const SearchBarForm = ({
  countryAirportList,
}: {
  countryAirportList: countryAirportType;
}): ReactElement => {
  console.log(countryAirportList);
  return (
    <SearchBarFormContainer>
      <div className="dropdown__container">
        <DropdownContainer>
          <p>{'국가'}</p>
          <DropdownArrow />
        </DropdownContainer>
        <div className="contour"></div>
        <DropdownContainer>
          <p>{'도착 공항'}</p>
          <DropdownArrow />
        </DropdownContainer>
      </div>
      <SeacrhBtn />
    </SearchBarFormContainer>
  );
};

export default SearchBarForm;
