import { createContext } from 'react';
import { DepartureType } from '@Customtypes/utils';
import { DepartureContextType } from '@Customtypes/utils';

export const DepartureStateContext = createContext<DepartureContextType>({
  departureList: {},
  setDepartureList: (list: DepartureType) => list,
});
