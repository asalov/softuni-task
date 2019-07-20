import React from 'react';
import styled from 'styled-components';

const Logo: React.FC = () => (
  <LogoContainer>
    <a href="/"><img src="img/softuni.png" alt="SoftUni logo" /></a>
  </LogoContainer>
);

const LogoContainer = styled.div`
  width: 100px;

  img {
    max-width: 100%;
  }
`;

export default Logo;
