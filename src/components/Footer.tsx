import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => (
  <FooterWrapper>
    <FooterLinks>
      <li><a href="#">Curriculum</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Contact Us</a></li>
    </FooterLinks>
  </FooterWrapper>
);

const FooterWrapper = styled.div`
  border-top: 1px solid #000;
  padding: 10px;
`;

const FooterLinks = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export default Footer;
