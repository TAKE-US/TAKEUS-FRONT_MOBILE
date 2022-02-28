type ModalPropType = {
  onSubmit: fn;
};

export type Modal = {
  Component: ReactElement;
  props: ModalPropType;
};

export type ModalListState = Array<Modal>;

export type ModalsDispatch = {
  open: fn;
  close: fn;
};
