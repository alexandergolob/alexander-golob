import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import ThemeProvider, { media } from './ThemeProvider';

// import UnstyledLeftNav from './LeftNav';
// import UnstyledRightNav from './RightNav';
import Footer from './Footer';

// const LeftNav = styled(UnstyledLeftNav)`
//   position: fixed;
//   z-index: 1;
//   width: 10rem;
//   top: 11vh;
//   left: 9.25%;
//   @media (max-width: 2100px) {
//     left: 6.5%;
//   }
//   @media (max-width: 1950px) {
//     left: 0.75rem;
//   }
//   display: flex;
//   flex-direction: column;

//   @media (max-width: 1150px) {
//     display: none;
//   }
// `;

// const RightNav = styled(UnstyledRightNav)`
//   position: fixed;
//   z-index: 1;
//   width: 10rem;
//   top: 17vh;
//   right: 9.25%;
//   @media (max-width: 2100px) {
//     right: 6.5%;
//   }
//   @media (max-width: 1950px) {
//     right: 0.55rem;
//   }
//   display: flex;
//   flex-direction: column;

//   @media (max-width: 1150px) {
//     display: none;
//   }
// `;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=PT+Mono|Enriqueta:400,700');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  body {    
    background: ${props => props.theme.colors.background};
    font-family: ${props => props.theme.fonts.sansSerif};
  }

  /* #___gatsby {
    display: block;
    min-height: 100vh;
    position: relative;

    & > * {
      min-height: 100vh;
    }
  } */
`;

const BackgroundWrapper = styled.div`
  margin: auto;
  max-width: ${props => props.theme.widths.large};
  background: url('/assets/brick-wall-bg.jpg');
  background-size: contain;
  padding: 80px;

  ${media.large`
    padding: 20px;
  `}
`;

// const Graffiti = styled.img`
//   height: 9rem;
//   /* background: red; */
//   position: absolute;
//   bottom: 120px;
//   left: 2.5rem;
//   z-index: 1;
//   user-select: none;
// `;

export default ({ children }) => (
  <ThemeProvider>
    <>
      <GlobalStyle />
      {/* <LeftNav />
    <RightNav /> */}
      <BackgroundWrapper>
        {children}
        {/* <Graffiti alt='' src='assets/logo-white.svg' /> */}
      </BackgroundWrapper>
      <Footer />
    </>
  </ThemeProvider>
);
