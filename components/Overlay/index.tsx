import React from 'react';
import { ReactElement } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  position: absolute;
  top: 0;

  height: 100%;
  width: 100%;
  opacity: 0.5;
  background-color: rgba(0, 0, 0, 0.5);

  z-index: 2;
  cursor: pointer;
`;

interface OverlayProps {
  onClose: (e: React.MouseEvent) => void;
}

const Overlay = ({ onClose }: OverlayProps): ReactElement => <Container onClick={onClose} />;
export default Overlay;
