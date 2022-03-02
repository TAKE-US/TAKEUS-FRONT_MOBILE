import React, { useContext } from 'react';

import SideBar from '@components/SideBar';
import { ModalsDispatchContext, ModalsStateContext } from '@context/ModalsContext';

import { ModalListState, ModalsDispatch } from '@Customtypes/modal';

export const modalList = {
  SideBar,
};

const Modals = (): JSX.Element => {
  const openedModals = useContext(ModalsStateContext) as ModalListState;
  const { close } = useContext(ModalsDispatchContext) as ModalsDispatch;
  return (
    <>
      {openedModals.map((modal, index) => {
        const { Component, props } = modal;
        const { onSubmit, ...restProps } = props ? props : { props, onSubmit: null };
        const onClose = () => {
          close(Component);
        };

        const handleSubmit = async () => {
          if (typeof onSubmit === 'function') await onSubmit();
          onClose();
        };

        return (
          <Component key={index} onSubmit={handleSubmit} onClose={onClose} restProps={restProps} />
        );
      })}
    </>
  );
};

export default Modals;
