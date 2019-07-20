import React from 'react';
import styled from 'styled-components';
import { borderRadius } from 'polished';

import Logo from 'components/shared/Logo';
import { MaxWidthContainer, NavList } from 'styles/layout';
import { colors } from 'styles/palette';
import variables from 'styles/variables';

const NavMenu: React.FC = () => (
  <NavContainer>
    <Logo />
    <HeaderNav>
      <li><a href="/">About Us</a></li>
      <li><a href="/">Curriculum</a></li>
      <li><a href="/">Trainings</a></li>
      <li><a href="/">Professions</a></li>
      <li><a href="/">Certificates</a></li>
      <li><a href="/">Careers</a></li>
      <li><a href="/">Fees</a></li>
      <li><a href="/">Blog</a></li>
    </HeaderNav>
  </NavContainer>
);

const NavContainer = styled(MaxWidthContainer)`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  background: ${colors.white};
  padding: 20px;
  box-shadow: ${variables.boxShadow};
  /* ${borderRadius('bottom', variables.borderRadius)}; */
`;

const HeaderNav = styled(NavList)`
  display: none;
`;

export default NavMenu;
