import React from 'react';
import styled from 'styled-components';

import { colors } from 'styles/palette';
import variables from 'styles/variables';

const OverlayPanel: React.FC = ({ children }) => (
  <PanelContainer>
    {children}
  </PanelContainer>
);

const PanelContainer = styled.div`
  position: absolute;
  height: 80px;
  bottom: -40px;
  background: ${colors.white};
  border-radius: ${variables.borderRadius};
  box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.2);
`;

export default OverlayPanel;
