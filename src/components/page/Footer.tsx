import React from 'react';
import styled from 'styled-components';

import Logo from 'components/shared/Logo';
import { MaxWidthContainer, NavList, Flex } from 'styles/layout';

const Footer: React.FC = () => (
  <MaxWidthContainer>
    <FooterWrapper>
      <FooterInfo>
        <Logo />
        <Copyright>&copy; {new Date().getFullYear()} - Software University LTD</Copyright>
      </FooterInfo>
      <FooterNav>
        <li><a href="/">Curriculum</a></li>
        <li><a href="/">About Us</a></li>
        <li><a href="/">Contact Us</a></li>
      </FooterNav>
    </FooterWrapper>
  </MaxWidthContainer>
);

const FooterWrapper = styled(Flex)`
  border-top: 1px solid #7b8590;
  padding: 10px;
  flex-direction: column;
`;

const FooterInfo = styled(Flex)`
  justify-content: space-between;
  align-items: center;
`;

const Copyright = styled.span`
  color: #cacaca;
  font-size: 1.2rem;
`;

const FooterNav = styled(NavList)`
  display: flex;
  justify-content: space-between;
`;

export default Footer;
