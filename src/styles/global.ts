import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

import { colors } from './palette';

export const GlobalStyles = createGlobalStyle`
  ${normalize()}

  html, body {
    box-sizing: border-box;
    min-height: 100%;
    margin: 0;
    font-family: "Lato", sans-serif;
    font-size: 10px;
    color: ${colors.dark};
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
  }
`;
