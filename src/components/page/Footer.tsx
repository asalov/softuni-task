import React from 'react';
import styled from 'styled-components';

import { MaxWidthContainer } from 'styles/layout';
import { NavList, NavItem } from 'styles/navigation';

const Footer: React.FC = () => (
  <MaxWidthContainer>
    <FooterWrapper>
      <Copyright>&copy; {new Date().getFullYear()} - Software University LTD</Copyright>
      <NavList>
        <NavItem><a href="/">Curriculum</a></NavItem>
        <NavItem><a href="/">About Us</a></NavItem>
        <NavItem><a href="/">Contact Us</a></NavItem>
      </NavList>
    </FooterWrapper>
  </MaxWidthContainer>
);

const FooterWrapper = styled.div`
  border-top: 1px solid #7b8590;
  padding: 10px;
`;

const Copyright = styled.span`
  color: #cacaca;
  font-size: 1.2rem;
`;

export default Footer;
