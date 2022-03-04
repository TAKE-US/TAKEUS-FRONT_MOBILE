import styled from '@emotion/styled';

type OverlayPropType = {
  height: number;
};

export const OverlayContainer = styled.div<OverlayPropType>`
  position: absolute;
  top: 0;
  height: 100vh;
  height: ${(props) => props && props.height + 'vh'};
  width: 100%;

  opacity: 0.5;
  background-color: rgba(0, 0, 0, 0.5);

  z-index: 2;
  cursor: pointer;
`;
