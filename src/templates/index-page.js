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
  carousel_images,
  hero_statement,
  left_cta,
  right_cta
}) => (
  <Layout>
    <HomeCarousel images={carousel_images} />
    <HeroWrapper>
      <Hero>{hero_statement}</Hero>
    </HeroWrapper>
    <CTAContainer>
      <LeftCTA>{left_cta.content}</LeftCTA>
      <RightCTA>{right_cta.content}</RightCTA>
    </CTAContainer>
  </Layout>
);

export default ({ data }) => {
  const postData = data.markdownRemark.frontmatter;
  return <IndexPageTemplate {...postData} />;
};

export const query = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        logo {
          image
          text
        }
        secondary_nav_logo
        carousel_images {
          description
          image
        }
        hero_statement
        left_cta {
          content
          path
        }
        right_cta {
          content
          path
        }
      }
    }
  }
`;
