import React from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

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
  margin: 0 20px;
  padding: 30px 10px;
  flex-direction: column;

  ${up('tablet')} {
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 10px;
  }
`;

const FooterInfo = styled(Flex)`
  justify-content: space-between;
  align-items: center;

  ${up('tablet')} {
    flex: 4;
    justify-content: flex-start;
  }

`;

const Copyright = styled.span`
  color: #cacaca;
  font-size: 1.2rem;
  margin-left: 20px;
`;

const FooterNav = styled(NavList)`
  display: flex;
  justify-content: space-between;

  ${up('tablet')} {
      flex: 3;
  }
`;

export default Footer;
