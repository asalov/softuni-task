import React from 'react';

import { MaxWidthContainer } from 'styles/layout';
import { NavList, NavItem } from 'styles/navigation';

const NavMenu: React.FC = () => (
  <MaxWidthContainer>
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
  </MaxWidthContainer>
);

export default NavMenu;
