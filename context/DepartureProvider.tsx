import React, { useState } from 'react';
import { DepartureStateContext } from 'context/DepartureContext';
import { DepartureType } from '@Customtypes/utils';

export function DepartureProvider({ children }: { children: React.ReactNode }) {
  const [departureList, setDeparutreList] = useState<DepartureType>({});
  const value = {
    departureList,
    setDeparutreList,
  };
  return <DepartureStateContext.Provider value={value}>{children}</DepartureStateContext.Provider>;
}
