import React from 'react';
import styled from 'styled-components';

import UnstyledLayout from '../components/Layout';
import UnstyledHomeLogo from '../components/HomeLogo';
import UnstyledLeftNav from '../components/LeftNav';
import UnstyledRightNav from '../components/RightNav';
import UnstyledHomeCarousel from '../components/HomeCarousel';
import FrameBox from '../components/FrameBox';

const Layout = styled(UnstyledLayout)`
  display: grid;
  /* background: red; */
  grid-template-columns: min-content 1fr auto;
  grid-template-rows: auto auto auto auto auto auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-areas:
    'HomeLogo MainContainer .'
    'HomeLogo MainContainer RightHomeLogo'
    'LeftNav MainContainer RightNav'
    'LeftNav MainContainer EmptyMarbleSquare'
    '. MainContainer EmptyMarbleSquare'
    '. MainContainer .';
`;

const HomeLogo = styled(UnstyledHomeLogo)`
  grid-area: HomeLogo;
`;

const LeftNav = styled(UnstyledLeftNav)`
  grid-area: LeftNav;
`;

const LogoImg = styled.img`
  height: 130px;
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
  grid-template-rows: auto auto 1fr;
  grid-row-gap: 25px;
  grid-template-areas:
    'Banner Banner Banner'
    '. Hero . '
    'CTAContainer CTAContainer CTAContainer ';
`;

const HomeCarousel = styled(UnstyledHomeCarousel)`
  grid-area: Banner;
`;

const Hero = styled(FrameBox)`
  grid-area: Hero;
  padding: 10px 15px;
  font-family: 'PT Mono', monospace;
  font-size: 2rem;
  color: hsl(0, 0%, 93%);
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  font-style: italic;
`;

const CTAContainer = styled.div`
  grid-area: CTAContainer;
  display: grid;
  grid-template-columns: 40px auto 1fr auto 40px;
  grid-template-rows: auto 20px auto auto 1fr;
  grid-template-areas:
    '. ForSaleCTA . . .'
    '. ForSaleCTA . PatreonCTA .'
    '. ForSaleCTA . PatreonCTA .'
    '. . . PatreonCTA .'
    '. . . . .';
`;

const CTA = styled(FrameBox)`
  margin-top: 20px;
  padding: 15px 25px;
  font-family: 'Enriqueta', serif;
  font-weight: 700;
  font-size: 1.2rem;
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
      <HomeCarousel />
      <Hero>We create art for community.</Hero>
      <CTAContainer>
        <ForSaleCTA>Art and Merchandise for Sale</ForSaleCTA>
        <PatreonCTA>Support our work with Patreon</PatreonCTA>
      </CTAContainer>
    </MainContainer>
  </Layout>
);
