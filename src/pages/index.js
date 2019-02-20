import React from 'react';
import styled from 'styled-components';

import HeaderImageCarousel from '../components/HeaderImageCarousel';
import Layout from '../components/Layout';
import News from '../components/News';

const HeroStatementContainer = styled.div`
  text-align: center;
`;

const HeroStatement = styled.h1`
  margin: 30px 0;
  display: inline-block;
  font-family: 'Special Elite', cursive;
  font-size: 3rem;
  color: #fff;
  text-decoration: underline;
  background: #000;
`;

export default () => <Layout>home page</Layout>;
