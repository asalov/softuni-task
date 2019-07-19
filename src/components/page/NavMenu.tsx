import React from 'react';
import styled from 'styled-components';

import { MaxWidthContainer } from 'styles/layout';
import { NavList, NavItem } from 'styles/navigation';
import { colors } from 'styles/palette';

const NavMenu: React.FC = () => (
  <NavContainer>
    <NavList>
      <NavItem><a href="#">About Us</a></NavItem>
      <NavItem><a href="#">Curriculum</a></NavItem>
      <NavItem><a href="#">Trainings</a></NavItem>
      <NavItem><a href="#">Professions</a></NavItem>
      <NavItem><a href="#">Certificates</a></NavItem>
      <NavItem><a href="#">Careers</a></NavItem>
      <NavItem><a href="#">Fees</a></NavItem>
      <NavItem><a href="#">Blog</a></NavItem>
    </NavList>
  </NavContainer>
);

const NavContainer = styled(MaxWidthContainer)`
  position: fixed;
  top: 0;
  z-index: 100;
  background: ${colors.white};
  padding: 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export default NavMenu;
