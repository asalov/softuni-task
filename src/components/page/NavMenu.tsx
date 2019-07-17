import React from 'react';

import { MaxWidthContainer } from 'styles/layout';
import { NavList, NavItem, NavLink } from 'styles/navigation';

const NavMenu: React.FC = () => (
  <MaxWidthContainer>
    <NavList>
      <NavItem><NavLink href="#">About Us</NavLink></NavItem>
      <NavItem><NavLink href="#">Curriculum</NavLink></NavItem>
      <NavItem><NavLink href="#">Trainings</NavLink></NavItem>
      <NavItem><NavLink href="#">Professions</NavLink></NavItem>
      <NavItem><NavLink href="#">Certificates</NavLink></NavItem>
      <NavItem><NavLink href="#">Careers</NavLink></NavItem>
      <NavItem><NavLink href="#">Fees</NavLink></NavItem>
      <NavItem><NavLink href="#">Blog</NavLink></NavItem>
    </NavList>
  </MaxWidthContainer>
);

export default NavMenu;
