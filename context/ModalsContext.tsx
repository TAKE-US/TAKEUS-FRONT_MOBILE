import { createContext } from 'react';
import { ModalListState, ModalsDispatch } from '@Customtypes/modal';

export const ModalsStateContext = createContext<ModalListState | null>(null);
export const ModalsDispatchContext = createContext<ModalsDispatch>({
  open: () => {},
  close: () => {},
});
