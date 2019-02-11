import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Head from './Head';
import Nav from './Nav';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Special+Elite|Domine:400,700');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 18px;
  }
`;

export default ({ children }) => (
  <>
    <Head />
    <GlobalStyle />
    <Nav />
    {children}
    <Footer />
  </>
);
