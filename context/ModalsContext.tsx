import { createContext } from 'react';
import { ModalListState, ModalsDispatch } from '../types/modal';

export const ModalsStateContext = createContext<ModalListState | null>(null);
export const ModalsDispatchContext = createContext<ModalsDispatch | null>(null);
