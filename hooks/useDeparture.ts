import { useContext } from 'react';
import { DepartureStateContext } from 'context/DepartureContext';

export default function useDeparture() {
  const { departureList, setDepartureList } = useContext(DepartureStateContext);

  const getCountryList = () => Object.keys(departureList);
  const getCityList = (country: string) => Object.keys(departureList[country]);
  const getAirportList = (country: string) => {
    return Object.values(departureList[country]).map((v) => v[0]);
  };

  return {
    getCountryList,
    getCityList,
    getAirportList,
    setDepartureList,
  };
}
