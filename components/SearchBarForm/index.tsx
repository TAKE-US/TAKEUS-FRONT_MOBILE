import { ReactElement, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { modalList } from '@components/Modals';
import useModals from '@hooks/useModals';
import useDeparture from '@hooks/useDeparture';

import { HandleSubmitType } from '@Customtypes/dog';
import SeacrhBtn from '@assets/SearchBtn.svg';
import DropdownArrow from '@assets/DropdownArrow.svg';
import { SearchBarFormContainer, DropdownContainer } from './style';

const SearchBarForm = ({ handleSubmit }: HandleSubmitType): ReactElement => {
  const router = useRouter();
  const [country, setCountry] = useState<string | undefined>(undefined);
  const [airport, setAirport] = useState<string | undefined>(undefined);
  const { openModal, closeModal } = useModals();
  const { getCountryList, getCityList, getAirportList } = useDeparture();

  const handleCountry = (value: string) => {
    setCountry(value);
    setAirport(undefined);
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
  const handleClick = () => {
    if (!(country && airport)) return;
    switch (router.pathname) {
      case '/':
        handleSubmit(airport as string, country as string);
        break;
      case '/dogs':
        handleSubmit(airport as string);
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    setCountry(router.query.country as string);
    setAirport(router.query.airport as string);
  }, [router.query.country, router.query.airport]);

  return (
    <SearchBarFormContainer>
      <div className="dropdown__container">
        <DropdownContainer isCountrySelected={country} onClick={handleCountryList}>
          <p className="country">{country ? country : '국가'}</p>
          <DropdownArrow />
        </DropdownContainer>
        <div className="contour"></div>
        <DropdownContainer
          isAirportSelected={airport}
          onClick={country ? handleAirportList : handleCountryList}
        >
          <p className="airport">{airport ? airport.slice(0, 8) : '도착 공항'}</p>
          <DropdownArrow />
        </DropdownContainer>
      </div>
      <SeacrhBtn
        onClick={handleClick}
        fill={country && airport ? '#FDCB02' : '#FFFFFF'}
        stroke={country && airport ? '#FFFFFF' : '#FDCB02'}
      />
    </SearchBarFormContainer>
  );
};

export default SearchBarForm;
