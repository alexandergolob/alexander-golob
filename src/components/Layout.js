import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import UnstyledLeftNav from './LeftNav';
import UnstyledRightNav from './RightNav';
import UnstyledFooter from './Footer';

const LeftNav = styled(UnstyledLeftNav)`
  position: fixed;
  z-index: 1;
  width: 150px;
  top: 11vh;
  left: 20px;
  display: flex;
  flex-direction: column;
`;

const RightNav = styled(UnstyledRightNav)`
  position: fixed;
  z-index: 1;
  width: 150px;
  top: 17vh;
  right: 20px;
  display: flex;
  flex-direction: column;
`;

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
    min-height: 100vh;
    position: relative;

    & > * {
      min-height: 100vh;
    }
  }
`;

const Wrapper = styled.div`
  background: url('./assets/brick-wall-bg.jpg');
  background-size: contain;
  min-height: 100vh;
  width: 87.5%;
  max-width: 1600px;
  margin: auto;
  position: relative;
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 15vh;
  padding-bottom: 120px;
`;

const Graffiti = styled.img`
  height: 150px;
  transform: translateX(-50%);
`;

const Footer = styled(UnstyledFooter)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default ({ children, ...rest }) => (
  <>
    <GlobalStyle />
    <LeftNav />
    <RightNav />
    <Wrapper>
      <Container {...rest}>
        {children}
        <div style={{ height: '100vh' }} />
        <Graffiti alt='' src='assets/logo.svg' />
      </Container>
      <Footer />
    </Wrapper>
  </>
);
