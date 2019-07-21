import React from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { borderRadius } from 'polished';

import Logo from 'components/shared/Logo';
import { MaxWidthContainer, NavList, Flex } from 'styles/layout';
import { colors } from 'styles/palette';
import variables from 'styles/variables';

const NavMenu: React.FC = () => (
  <NavContainer>
    <Logo />
    <HeaderNav>
      <li><a href="/">About Us</a></li>
      <li><a href="/">Curriculum</a></li>
      <li><a href="/">Trainings</a></li>
      <li><a href="/">Professions</a></li>
      <li><a href="/">Certificates</a></li>
      <li><a href="/">Careers</a></li>
      <li><a href="/">Fees</a></li>
      <li><a href="/">Blog</a></li>
    </HeaderNav>
    <NavIcon>
      <div />
      <div />
      <div />
    </NavIcon>
  </NavContainer>
);

const NavContainer = styled(MaxWidthContainer)`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  background: ${colors.white};
  padding: 20px;
  box-shadow: ${variables.boxShadow};
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${up('tablet')} {
    ${borderRadius('bottom', variables.borderRadius)};
  }
`;

const HeaderNav = styled(NavList)`
  display: none;

  li {
    padding: 0 10px;
  }

  ${up('tablet')} {
    display: block;
  }
`;

const NavIcon = styled(Flex)`
  width: 35px;
  height: 20px;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  > div {
    height: 3px;
    border-radius: 10px;
    background: ${colors.primary};

    &:first-of-type, &:last-of-type {
      width: 60%;
    }

    &:last-of-type {
      align-self: flex-end;
    }
  }

  ${up('tablet')} {
    display: none;
  }
`;

export default NavMenu;
