import { createGlobalStyle } from 'styled-components';

import { colors } from './palette';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    font-family: "Lato", sans-serif;
    font-size: 10px;
    color: ${colors.dark};
  }

  a {
    text-decoration: none;
  }
`;
