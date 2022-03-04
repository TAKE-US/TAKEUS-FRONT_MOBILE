import { ReactElement, useState } from 'react';

import { modalList } from '@components/Modals';
import useModals from '@hooks/useModals';

import { SearchBarFormContainer, DropdownContainer } from './style';
import SeacrhBtn from '@assets/SearchBtn.svg';
import { countryAirportType } from '@Customtypes/utils';
import DropdownArrow from '@assets/DropdownArrow.svg';

const SearchBarForm = ({
  countryAirportList,
}: {
  countryAirportList: countryAirportType;
}): ReactElement => {
  const [country, setCountry] = useState<string | null>(null);
  const [airport, setAirport] = useState<string | null>(null);
  const { openModal, closeModal } = useModals();

  const handleCountry = (value: string) => {
    setCountry(value);
  };

  const handleCountryList = () => {
    openModal(modalList.CountryDropdown, {
      countryList: Object.keys(countryAirportList),
      onSubmit: handleCountry,
      onClose: closeModal,
    });
  };

  return (
    <SearchBarFormContainer>
      <div className="dropdown__container">
        <DropdownContainer
          isCountrySelected={country}
          isAirportSelected={airport}
          onClick={handleCountryList}
        >
          <p className="country">{country ? country : '국가'}</p>
          <DropdownArrow />
        </DropdownContainer>
        <div className="contour"></div>
        <DropdownContainer>
          <p className="airport">{airport ? airport : '도착 공항'}</p>
          <DropdownArrow />
        </DropdownContainer>
      </div>
      <SeacrhBtn />
    </SearchBarFormContainer>
  );
};

export default SearchBarForm;
