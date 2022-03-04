import React from 'react';
import { ReactElement } from 'react';
import { OverlayContainer } from './style';

interface OverlayProps {
  onClose: (e: React.MouseEvent) => void;
  height: number;
}

const Overlay = ({ onClose, height }: OverlayProps): ReactElement => {
  return <OverlayContainer height={height} onClick={onClose} />;
};

export default Overlay;
