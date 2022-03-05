import { useContext } from 'react';
import { DepartureStateContext } from 'context/DepartureContext';

export default function useDeparture() {
  const value = useContext(DepartureStateContext);
  if (!value) return;

  const { departureList, setDepartureList } = value;
  return {
    departureList,
    setDepartureList,
  };
}
