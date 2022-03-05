import { ReactElement, useState } from 'react';
import { useRouter } from 'next/router';

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
  const [country, setCountry] = useState<string | null>('미국');
  const [airport, setAirport] = useState<string | null>('델러스 국제공항');
  const { openModal, closeModal } = useModals();
  const router = useRouter();

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

  const handleRouter = () => {
    router.push({
      pathname: 'dogs',
      query: { country, airport },
    });
  };

  const handleSubmit = () => {
    // ts-pattern 을 도입해서 상태에 따라 Modal 을 보여주자 (inform Modal 작성시)
    if (country && airport) handleRouter();
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
