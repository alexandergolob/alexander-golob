import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import HomeLogo from '../components/HomeLogo';
import LeftNav from '../components/LeftNav';
import RightNav from '../components/RightNav';
import FrameBox from '../components/FrameBox';

const Hero = styled(FrameBox)`
  margin-top: 20px;
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

export default () => (
  <Layout>
    <HomeLogo />
    <LeftNav />
    <RightNav />
    <Hero>We create art for community.</Hero>
    <CTA>Art and Merchandise for Sale</CTA>
    <CTA>Support our work with Patreon</CTA>
  </Layout>
);
