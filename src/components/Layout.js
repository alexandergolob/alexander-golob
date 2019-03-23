import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import UnstyledLeftNav from './LeftNav';
import UnstyledRightNav from './RightNav';
import UnstyledFooter from './Footer';

const LeftNav = styled(UnstyledLeftNav)`
  position: fixed;
  z-index: 1;
  width: 10rem;
  top: 11vh;
  left: 9.25%;
  @media (max-width: 2100px) {
    left: 6.5%;
  }
  @media (max-width: 1950px) {
    left: 0.75rem;
  }
  display: flex;
  flex-direction: column;

  @media (max-width: 850px) {
    display: none;
  }
`;

const RightNav = styled(UnstyledRightNav)`
  position: fixed;
  z-index: 1;
  width: 10rem;
  top: 17vh;
  right: 9.25%;
  @media (max-width: 2100px) {
    right: 6.5%;
  }
  @media (max-width: 1950px) {
    right: 0.55rem;
  }
  display: flex;
  flex-direction: column;

  @media (max-width: 850px) {
    display: none;
  }
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

  @media (max-width: 1200px) {
    html {
      font-size: 14px;
    }
  }
  @media (max-width: 900px) {
    html {
      font-size: 12px;  
    }
  }
  @media (max-width: 600px) {
    html {
      font-size: 10px;  
    }
  }
  @media (max-width: 300px) {
    html {
      font-size: 8px;  
    }
  }

  body {    
    background: hsl(0,0%,95%);
    /* font-family: Arial, Enriqueta, sans-serif; */
    font-family: Enriqueta, sans-serif;
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
  background: url('/assets/brick-wall-bg.jpg');
  background-size: contain;
  min-height: 100vh;
  width: 87.5%;
  @media (max-width: 1150px) {
    width: 100%;
  }
  max-width: 1350px;
  margin: auto;
  position: relative;
`;

const Container = styled.div`
  width: 80%;
  @media (max-width: 1150px) {
    width: 65%;
  }
  @media (max-width: 850px) {
    width: 90%;
  }
  margin: auto;
  padding-top: 5vh;
  padding-bottom: 200px;
  position: relative;
  z-index: 2;
`;

const Graffiti = styled.img`
  height: 9rem;
  /* background: red; */
  position: absolute;
  bottom: 120px;
  left: 2.5rem;
  z-index: 1;
  user-select: none;
`;

const Footer = styled(UnstyledFooter)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

export default ({ children, ...rest }) => (
  <>
    <GlobalStyle />
    <LeftNav />
    <RightNav />
    <Wrapper>
      <Container {...rest}>{children}</Container>
      <Graffiti alt='' src='assets/logo-white.svg' />
      <Footer />
    </Wrapper>
  </>
);
