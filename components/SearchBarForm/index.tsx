import { ReactElement, useState } from 'react';
import { useRouter } from 'next/router';

import { modalList } from '@components/Modals';
import useModals from '@hooks/useModals';
import { SearchBarFormContainer, DropdownContainer } from './style';
import SeacrhBtn from '@assets/SearchBtn.svg';
import { DepartureType } from '@Customtypes/utils';
import DropdownArrow from '@assets/DropdownArrow.svg';

import { getDogByAirport } from '@service/dogs';
import useDeparture from '@hooks/useDeparture';

const SearchBarForm = (): ReactElement => {
  const [country, setCountry] = useState<string | null>('미국');
  const [airport, setAirport] = useState<string | null>('델러스 국제공항');
  const { openModal, closeModal } = useModals();
  const router = useRouter();
  const { getCountryList, getCityList, getAirportList } = useDeparture();

  const handleCountry = (value: string) => {
    setCountry(value);
    setAirport(null);
  };
  const handleCountryList = () => {
    openModal(modalList.CountryDropdown, {
      countryList: getCountryList(),
      onSubmit: handleCountry,
      onClose: closeModal,
    });
  };

  const handleAirport = (value: string) => {
    setAirport(value);
  };
  const handleAirportList = () => {
    openModal(modalList.AirportDropdown, {
      cityList: getCityList(country as string),
      airportList: getAirportList(country as string),
      onSubmit: handleAirport,
      onClose: closeModal,
    });
  };

  const handleRouter = (country: string, airport: string) => {
    router.push({
      pathname: 'dogs',
      query: { country, airport },
    });
  };

  const handleSubmit = () => {
    if (!(country && airport)) return;
    switch (router.pathname) {
      case '/':
        handleRouter(country, airport);
        break;
      case '/dogs':
        getDogByAirport(airport);
        break;
      default:
        return;
    }
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
