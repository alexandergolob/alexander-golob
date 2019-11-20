import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import ThemeProvider, { media } from './ThemeProvider';
import Helmet from './Helmet';

import UnstyledLeftNav from './LeftNav';
import UnstyledRightNav from './RightNav';
import UnstyledResponsiveNav from './ResponsiveNav';
import UnstyledFooter from './Footer';

import BrickBG from '../texture-images/brick-wall-bg.jpg';
import GraffitiImg from '../texture-images/logo-white.png';

const LeftNav = styled(UnstyledLeftNav)`
  position: fixed;

  z-index: 3;
  width: 150px;
  top: 50%;
  left: calc(50% - (1200px / 2) - 50px);
  transform: translate(-50%, -50%);

  @media (max-width: 1500px) {
    left: calc(50% - (50% - 100px));
  }

  ${media.laptop`display: none;`}
`;

const RightNav = styled(UnstyledRightNav)`
  position: fixed;
  z-index: 3;
  width: 150px;
  top: calc(50% + 10px);
  left: calc(50% + (1200px / 2) + 50px);
  transform: translate(-50%, -50%);

  @media (max-width: 1500px) {
    left: calc(50% + (50% - 100px));
  }

  ${media.laptop`display: none;`}
`;

const ResponsiveNav = styled(UnstyledResponsiveNav)`
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  display: none;
  ${media.laptop`display: block;`}
`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=PT+Mono|Enriqueta:400,700');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {    
    background: ${props => props.theme.colors.background};
    font-family: ${props => props.theme.fonts.sansSerif};
  }  
`;

const BackgroundWrapper = styled.div`
  margin: auto;
  position: relative;
  max-width: 1200px;
  width: calc(100% - 200px);
  min-height: 100vh;
  background-color: hsl(15, 78%, 56%);
  background-image: url(${BrickBG});
  background-size: contain;
  padding: 80px;
  padding-bottom: 200px;

  ${media.laptop`
    max-width: 100%;
    width: 100%;
    padding: 20px;
    padding-top: 200px; 
    padding-bottom: 150px;
  `}

  ${media.mobile`
    padding-top: 150px;
    padding-bottom: 125px;
  `}
`;

const ZWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

const Footer = styled(UnstyledFooter)`
  position: absolute;
  z-index: 2;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const GraffitiContainer = styled.div`
  margin-top: 0.5em;
`;

const Graffiti = styled.img`
  height: 120px;

  ${media.tablet`height: 100px;`}
  ${media.mobile`height: 80px;`}
`;

export default ({ head, rightNavReplacementComponent, children }) => (
  <ThemeProvider>
    <>
      <GlobalStyle />
      <Helmet {...head} />
      <LeftNav />
      <RightNav replacementComponent={rightNavReplacementComponent} />
      <BackgroundWrapper>
        <ResponsiveNav />
        <ZWrapper>{children}</ZWrapper>
        <GraffitiContainer>
          <Graffiti alt='' src={GraffitiImg} />
        </GraffitiContainer>
        <Footer />
      </BackgroundWrapper>
    </>
  </ThemeProvider>
);
