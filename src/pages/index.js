import React from 'react';
import { graphql } from 'gatsby';
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

export default ({ data }) => (
  <Layout>
    <HeaderImageCarousel />
    <HeroStatementContainer>
      <HeroStatement>
        {data.allMarkdownRemark.edges[0].node.frontmatter.hero}
      </HeroStatement>
    </HeroStatementContainer>

    <h2>Art</h2>
    <h2>Murals</h2>
    <h2>Call for Fair Art</h2>
    <h2>Bio</h2>
    <h2>Press</h2>
    <h2>For sale</h2>
    <h2>Commissioning</h2>
    <h2>Subscribe</h2>

    <News />
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            hero
          }
        }
      }
    }
  }
`;
