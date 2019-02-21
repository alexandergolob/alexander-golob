import React from 'react';
import styled from 'styled-components';

import UnstyledLayout from '../components/Layout';
import UnstyledHomeLogo from '../components/HomeLogo';
import UnstyledLeftNav from '../components/LeftNav';
import UnstyledRightNav from '../components/RightNav';
import FrameBox from '../components/FrameBox';

const Layout = styled(UnstyledLayout)`
  display: grid;
  /* background: red; */
  grid-template-columns: min-content 1fr auto;
  grid-template-rows: auto auto auto auto auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-areas:
    'HomeLogo MainContainer .'
    'HomeLogo MainContainer RightHomeLogo'
    'LeftNav MainContainer RightNav'
    'LeftNav MainContainer EmptyMarbleSquare'
    '. MainContainer EmptyMarbleSquare';
`;

const HomeLogo = styled(UnstyledHomeLogo)`
  grid-area: HomeLogo;
`;

const LeftNav = styled(UnstyledLeftNav)`
  grid-area: LeftNav;
`;

const LogoImg = styled.img`
  height: 100px;
`;

const UnstyledRightHomeLogo = props => (
  <FrameBox {...props}>
    <LogoImg src='/assets/logo.svg' alt='logo' />
  </FrameBox>
);

const RightHomeLogo = styled(UnstyledRightHomeLogo)`
  grid-area: RightHomeLogo;
`;

const RightNav = styled(UnstyledRightNav)`
  grid-area: RightNav;
`;

const EmptyMarbleSquare = styled(FrameBox)`
  grid-area: EmptyMarbleSquare;
  background: hsl(120, 54%, 52%);
  height: 120px;
`;

const MainContainer = styled.div`
  grid-area: MainContainer;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr auto auto;
  grid-template-areas:
    'Banner Banner Banner'
    '. Hero .'
    'ForSaleCTA . PatreonCTA';
`;

const Banner = styled.div`
  grid-area: Banner;
  background: hsl(0, 0%, 50%);
  height: 100%;
  width: 100%;
`;

const Hero = styled(FrameBox)`
  grid-area: Hero;
  margin: 30px 0;
  padding: 20px 25px;
  font-family: sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
`;

const CTA = styled(FrameBox)`
  margin-top: 20px;
  padding: 20px 25px;
  font-family: sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
`;

const ForSaleCTA = styled(CTA)`
  grid-area: ForSaleCTA;
`;

const PatreonCTA = styled(CTA)`
  grid-area: PatreonCTA;
`;

export default () => (
  <Layout>
    <HomeLogo />
    <LeftNav />
    <RightNav />
    <RightHomeLogo />
    <EmptyMarbleSquare />
    <MainContainer>
      <Banner />
      <Hero>We create art for community.</Hero>
      <ForSaleCTA>Art and Merchandise for Sale</ForSaleCTA>
      <PatreonCTA>Support our work with Patreon</PatreonCTA>
    </MainContainer>
  </Layout>
);
