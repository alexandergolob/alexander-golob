import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/Layout';
import UnstyledHomeCarousel from '../components/HomeCarousel';
import FrameBox from '../components/FrameBox';
import LightMarbleCTA from '../components/LightMarbleCTA';
import UnstyledRecentStories from '../components/RecentStories';
import MostRecentStory from '../components/MostRecentStory';
import SubscriptionCTA from '../components/SubscriptionCTA';

const HomeCarousel = styled(UnstyledHomeCarousel)`
  margin-top: 5vh;
  margin-bottom: 2.5rem;
`;

const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const Hero = styled(FrameBox)`
  padding: 0.5rem;
  font-family: 'PT Mono', monospace;
  font-size: 1.75rem;
  text-align: center;
  color: hsl(0, 0%, 93%);
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  font-style: italic;
`;

const MainCTAContainer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-around;

  @media (max-width: 450px) {
    display: inline-flex;
    flex-direction: column;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const CTA = styled(FrameBox)`
  padding: 0.8rem 1.25rem;
  font-family: 'Enriqueta', serif;
  font-weight: 700;

  @media (max-width: 450px) {
    margin-bottom: 1.5rem;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const LeftCTA = styled(CTA)``;

const RightCTA = styled(CTA)`
  /* transform: translateY(30px); */
`;

const InstagramAndRecentStoriesContainer = styled.div`
  /* background: grey; */
  margin-bottom: 2.5rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 0.33rem auto 1fr;
  grid-template-areas:
    'OffCenterCTAContainer . .'
    'OffCenterCTAContainer . InstagramContainer'
    'RecentStoriesAndCTAContainer . InstagramContainer';

  @media (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > * {
      margin-bottom: 2.5rem;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`;

const OffCenterCTAContainer = styled.div`
  grid-area: OffCenterCTAContainer;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
`;

const OffCenterCTA = styled(CTA)`
  display: inline-block;
`;

const RecentStoriesAndCTAContainer = styled.div`
  /* background: green; */
  grid-area: RecentStoriesAndCTAContainer;

  @media (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const RecentStoriesContainer = styled.div`
  display: flex;
  margin-bottom: 2.5rem;
`;

const RecentStories = styled(UnstyledRecentStories)`
  margin-right: 0.75rem;
  /* flex-grow: 1; */
  width: 10rem;
  /* background: red; */
`;

const InstagramContainer = styled.div`
  grid-area: InstagramContainer;
  width: 315px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: blue; */
`;

const InstagramHeading = styled(FrameBox)`
  background-image: url('/assets/light-marble.svg');
  background-repeat: none;
  background-size: contain;
  background-position: center center;
  padding: 0.8rem 2.5rem;
  margin: auto;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 700;
`;

const InstagramThumbnailContainer = styled.div`
  margin-bottom: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 150px;
  grid-gap: 1rem;

  @media (max-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 350px) {
    grid-template-columns: 1fr;
  }
`;

const InstagramThumbnail = styled(Image)`
  /* background: white; */
  border: 1px solid black;
  /* height: 150px; */
  /* width: 150px; */
`;

const MarbleCTA = styled(LightMarbleCTA)`
  display: inline-block;
`;

const GreenMarbleCTAContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const GreenMarbleCTA = styled(FrameBox)`
  display: inline-block;
  padding: 5px 10px;
  background-image: url('/assets/empty-square-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const stories = [
  {
    title: 'read more and speak for yourself now or ...'
  },
  {
    title: 'read more and speak for yourself now or ...'
  },
  {
    title: 'read more and speak for yourself now or ...'
  }
];

export const IndexPageTemplate = ({
  carouselImages,
  heroStatement,
  leftCta,
  rightCta,
  instagramImages
}) => (
  <Layout>
    <HomeCarousel images={carouselImages} />
    <HeroWrapper>
      <Hero>{heroStatement}</Hero>
    </HeroWrapper>
    <MainCTAContainer>
      <LeftCTA>{leftCta.content}</LeftCTA>
      <RightCTA>{rightCta.content}</RightCTA>
    </MainCTAContainer>
    <InstagramAndRecentStoriesContainer>
      <OffCenterCTAContainer>
        <OffCenterCTA>See Our Portfolio Here</OffCenterCTA>
      </OffCenterCTAContainer>

      <RecentStoriesAndCTAContainer>
        <RecentStoriesContainer>
          <RecentStories stories={stories} />
          <MostRecentStory
            title='How to design a website with an artist'
            description='Take aways of patience, creativity, and inspiration after hours of work.'
            author='Khizer Baig'
          />
        </RecentStoriesContainer>
        <SubscriptionCTA />
      </RecentStoriesAndCTAContainer>
      <InstagramContainer>
        <InstagramHeading>From Instagram</InstagramHeading>
        <InstagramThumbnailContainer>
          {instagramImages.map((fixed, i) => (
            <InstagramThumbnail key={i} fixed={fixed} />
          ))}
        </InstagramThumbnailContainer>
        <MarbleCTA>Support our work on Patreon here</MarbleCTA>
      </InstagramContainer>
    </InstagramAndRecentStoriesContainer>
    <GreenMarbleCTAContainer>
      <GreenMarbleCTA>Get in touch</GreenMarbleCTA>
    </GreenMarbleCTAContainer>
  </Layout>
);

export default ({ data }) => (
  <IndexPageTemplate
    {...data.markdownRemark.frontmatter}
    instagramImages={data.allInstaNode.edges.map(
      edge => edge.node.localFile.childImageSharp.fixed
    )}
  />
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
    allInstaNode(sort: { fields: [timestamp], order: [DESC] }, limit: 6) {
      edges {
        node {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          caption
          localFile {
            childImageSharp {
              fixed(width: 150, height: 150) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          # Only available with the public api scraper
          thumbnails {
            src
            config_width
            config_height
          }
          dimensions {
            height
            width
          }
        }
      }
    }
  }
`;
