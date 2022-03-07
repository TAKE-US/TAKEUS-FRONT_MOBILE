import React, { ReactElement, useState } from 'react';
import { ModalsStateContext, ModalsDispatchContext } from 'context/ModalsContext';
import { ModalListState, ModalPropType, ModalsDispatch } from '@Customtypes/modal';

export function ModalsProvider({ children }: { children: React.ReactNode }) {
  const [openedModals, setOpenedModals] = useState<ModalListState>([]);
  const open = (Component: ReactElement, props: ModalPropType) => {
    setOpenedModals((modals) => {
      return [...modals, { Component, props }];
    });
  };

  const close = (Component: JSX.Element) => {
    setOpenedModals((modals) => {
      return modals.filter((modal) => {
        return modal.Component !== Component;
      });
    });
  };

  const dispatch: ModalsDispatch = { open, close };

  return (
    <ModalsStateContext.Provider value={openedModals}>
      <ModalsDispatchContext.Provider value={dispatch}>{children}</ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
}
