import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import UnstyledFooter from './Footer';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Enriqueta:400,700|PT+Mono');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  html {
    font-size: 16px;
  }

  body {    
    background: hsl(0,0%,95%);
  }

  #___gatsby {
    display: block;
    min-height: 100%;
    position: relative;
  }
`;

const Background = styled.div`
  background: url('./assets/brick-wall-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 5%;
  right: 5%;
  bottom: 0;
`;

const Footer = styled(UnstyledFooter)`
  position: absolute;
  bottom: 0;
  left: 5%;
  right: 5%;
`;

export default ({ children, ...rest }) => (
  <div {...rest}>
    <GlobalStyle />
    <Background />
    {children}
    <Footer />
  </div>
);
