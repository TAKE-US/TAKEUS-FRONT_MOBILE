type ModalPropType = {
  onSubmit: fn;
  onClose: fn;
  prop: object;
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
