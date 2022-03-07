import React, { useState } from 'react';
import { DepartureStateContext } from 'context/DepartureContext';
import { DepartureType } from '@Customtypes/utils';

export default function DepartureProvider({ children }: { children: React.ReactNode }) {
  const [departureList, setDepartureList] = useState<DepartureType>({});
  const value = {
    departureList,
    setDepartureList,
  };

  return <DepartureStateContext.Provider value={value}>{children}</DepartureStateContext.Provider>;
}
