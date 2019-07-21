import React from 'react';
import styled from 'styled-components';

import { WhitePanel } from 'styles/layout';

const OverlayPanel: React.FC = ({ children }) => (
  <PanelContainer>
    {children}
  </PanelContainer>
);

const PanelContainer = styled(WhitePanel)`
  position: absolute;
  min-height: 80px;
  bottom: -40px;
  left: 15px;
  right: 15px;
  z-index: 10;
`;

export default OverlayPanel;
