import { useContext } from 'react';
import { ModalsDispatchContext } from '@context/ModalsContext';
import { ModalsDispatch } from '../types/modal';

export default function useModals() {
  const { open, close } = useContext(ModalsDispatchContext) as ModalsDispatch

  const openModal = (Component: React.ReactNode, props?: object) => {
    open(Component, props);
  }
  const closeModal = (Component: React.ReactNode) => {
    close(Component)
  }
  
  return {
    openModal,
    closeModal
  }
}