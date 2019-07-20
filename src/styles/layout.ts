import styled, { css } from 'styled-components';

import { colors } from './palette';
import variables from './variables';

export const MaxWidthContainer = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
`;

export const Panel = styled.div`
  border-radius: ${variables.borderRadius};
  box-shadow: ${variables.boxShadow};
`;

export const WhitePanel = styled(Panel)`
  background: ${colors.white};
`;

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
