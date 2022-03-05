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
    setAirport(null);
  };
  const handleCountryList = () => {
    openModal(modalList.CountryDropdown, {
      countryList: Object.keys(countryAirportList),
      onSubmit: handleCountry,
      onClose: closeModal,
    });
  };

  const handleAirport = (value: string) => {
    setAirport(value);
  };
  const handleAirportList = () => {
    const cityList = Object.keys(countryAirportList[country as string]);
    const airportList = Object.values(countryAirportList[country as string]).map((v) => v[0]);
    openModal(modalList.AirportDropdown, {
      cityList,
      airportList,
      onSubmit: handleAirport,
      onClose: closeModal,
    });
  };

  const handleSubmit = () => {
    console.log(country, airport);
  };
  return (
    <SearchBarFormContainer>
      <div className="dropdown__container">
        <DropdownContainer isCountrySelected={country} onClick={handleCountryList}>
          <p className="country">{country ? country : '국가'}</p>
          <DropdownArrow />
        </DropdownContainer>
        <div className="contour"></div>
        <DropdownContainer isAirportSelected={airport} onClick={handleAirportList}>
          <p className="airport">{airport ? airport.slice(0, 8) : '도착 공항'}</p>
          <DropdownArrow />
        </DropdownContainer>
      </div>
      <SeacrhBtn
        onClick={handleSubmit}
        fill={country && airport ? '#FDCB02' : '#FFFFFF'}
        stroke={country && airport ? '#FFFFFF' : '#FDCB02'}
      />
    </SearchBarFormContainer>
  );
};

export default SearchBarForm;
