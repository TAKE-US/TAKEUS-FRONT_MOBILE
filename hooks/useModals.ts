import { useContext } from 'react';
import { ModalsDispatchContext } from '@context/ModalsContext';
import { ModalsDispatch } from '@Customtypes/modal';

export default function useModals() {
  const { open, close } = useContext(ModalsDispatchContext) as ModalsDispatch;
  const preventScroll = () => (document.body.style.overflow = 'hidden');
  const ableScroll = () => (document.body.style.overflow = 'scroll');

  const openModal = (Component: React.ReactNode, props?: object) => {
    open(Component, props);
    preventScroll();
  };

  const closeModal = (Component: React.ReactNode) => {
    close(Component);
    ableScroll();
  };

  return {
    openModal,
    closeModal,
  };
}
