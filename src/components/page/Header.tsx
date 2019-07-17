import React from 'react';
import styled from 'styled-components';

import { NavList, NavItem, NavLink } from 'styles/navigation';

const Header: React.FC = () => (
  <HeaderWrapper>
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
  </HeaderWrapper>
);

const HeaderWrapper = styled.div`
`;

export default Header;
