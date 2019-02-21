import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    padding: 10px;
  }
`;

export default ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);
