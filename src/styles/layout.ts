import styled, { css } from 'styled-components';

import { defaultFont } from './content';
import { colors } from './palette';
import variables from './variables';

export const MaxWidthContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Flex = styled.div`
  display: flex;
`;

export const NavList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    display: inline;
  }

  a {
    ${defaultFont}
  }
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
