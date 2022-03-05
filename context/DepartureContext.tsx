import { createContext } from 'react';
import { DepartureType } from '@Customtypes/utils';

export const DepartureStateContext = createContext<DepartureType | null>(null);
