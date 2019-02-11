import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Head from './Head';
import Nav from './Nav';
import Footer from './Footer';

const Container = styled.div`
  padding-bottom: 200px;
  min-height: 100%;
  position: relative;
`;

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

  body {
    height: 100%;
  }
`;

export default ({ children }) => (
  <>
    <Head />
    <GlobalStyle />
    <Container>
      <Nav />
      {children}
      <Footer />
    </Container>
  </>
);
