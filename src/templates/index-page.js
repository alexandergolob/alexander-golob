import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import UnstyledHomeCarousel from '../components/HomeCarousel';
import FrameBox from '../components/FrameBox';

const HomeCarousel = styled(UnstyledHomeCarousel)`
  margin-bottom: 40px;
`;

const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const Hero = styled(FrameBox)`
  padding: 10px 15px;
  font-family: 'PT Mono', monospace;
  font-size: 2rem;
  color: hsl(0, 0%, 93%);
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  font-style: italic;
`;

const CTAContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CTA = styled(FrameBox)`
  padding: 15px 25px;
  font-family: 'Enriqueta', serif;
  font-weight: 700;
  font-size: 1.2rem;
`;

const LeftCTA = styled(CTA)``;

const RightCTA = styled(CTA)`
  transform: translateY(30px);
`;

export const IndexPageTemplate = ({
  carouselImages,
  heroStatement,
  leftCta,
  rightCta
}) => (
  <Layout>
    <HomeCarousel images={carouselImages} />
    <HeroWrapper>
      <Hero>{heroStatement}</Hero>
    </HeroWrapper>
    <CTAContainer>
      <LeftCTA>{leftCta.content}</LeftCTA>
      <RightCTA>{rightCta.content}</RightCTA>
    </CTAContainer>
  </Layout>
);

export default ({ data }) => (
  <IndexPageTemplate {...data.markdownRemark.frontmatter} />
);

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        carouselImages {
          description
          image
        }
        heroStatement
        leftCta {
          content
          path
        }
        rightCta {
          content
          path
        }
      }
    }
  }
`;
