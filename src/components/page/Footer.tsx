import React from 'react';
import styled from 'styled-components';

import { MaxWidthContainer } from 'styles/layout';
import { NavList, NavItem, NavLink } from 'styles/navigation';

const Footer: React.FC = () => (
  <MaxWidthContainer>
    <FooterWrapper>
      <NavList>
        <NavItem><NavLink href="#">Curriculum</NavLink></NavItem>
        <NavItem><NavLink href="#">About Us</NavLink></NavItem>
        <NavItem><NavLink href="#">Contact Us</NavLink></NavItem>
      </NavList>
    </FooterWrapper>
  </MaxWidthContainer>
);

const FooterWrapper = styled.div`
  border-top: 1px solid #000;
  padding: 10px;
`;

export default Footer;
