import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import { media } from '../components/ThemeProvider';
import Layout from '../components/Layout';
import UnstyledHomeCarousel from '../components/HomeCarousel';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import LightMarbleCTA from '../components/LightMarbleCTA';
import UnstyledRecentStories from '../components/RecentStories';
import UnstyledMostRecentStory from '../components/MostRecentStory';
import UnstyledSubscriptionCTA from '../components/SubscriptionCTA';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeCarousel = styled(UnstyledHomeCarousel)`
  margin: 2em 0;
  width: 100%;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-template-columns: auto 1fr auto;
  grid-template-areas:
    'MainCTAs MainCTAs MainCTAs'
    'ThirdCTA ThirdCTA Instagram'
    'RecentStories MostRecentStory Instagram'
    'SubscriptionCTA SubscriptionCTA Instagram';
  grid-row-gap: 1.5em;

  ${media.laptop`
    grid-template-rows: repeat(5, auto);
    grid-template-columns: 3fr 1fr;
    grid-template-areas:
      'SubscriptionCTA SubscriptionCTA'
      'ThirdCTA ThirdCTA' 
      'MostRecentStory MainCTAs'
      'RecentStories RecentStories'
      'Instagram Instagram';
  `}

  ${media.mobileL`
    grid-template-rows: repeat(6, auto);
    grid-template-columns: 1fr;
    grid-template-areas:
      'SubscriptionCTA'
      'ThirdCTA' 
      'MostRecentStory'
      'MainCTAs'
      'RecentStories'
      'Instagram';
  `}
`;

const MainCTAContainer = styled.div`
  grid-area: MainCTAs;

  width: 100%;
  display: flex;
  justify-content: space-around;

  ${media.laptop`
    flex-direction: column;
    align-self: start;

    ${CTA} {
      margin: 0;
      margin-bottom: 1em;
      :last-of-type {
        margin-bottom: 0;
      }
    }
  `}

  ${media.mobile`font-size: 0.90em;`}
`;

const ThirdCTA = styled(CTA)`
  grid-area: ThirdCTA;
  justify-self: center;
  align-self: start;

  ${media.tablet`width: 100%;`}
`;

const RecentStories = styled(UnstyledRecentStories)`
  grid-area: RecentStories;

  margin-right: 15px;
  width: 175px;

  ${media.laptop`
    justify-self: center;
    margin-right: 0;
    width: auto;
  `}
  /* ${media.tablet`margin: 0.5em 0; width: 100%;`} */
`;

const MostRecentStory = styled(UnstyledMostRecentStory)`
  grid-area: MostRecentStory;

  margin-right: 3em;

  ${media.laptop`margin-right: 1em;`}
  ${media.tablet`height: 300px;`}
  ${media.mobile`height: 250px;`}
  ${media.mobileL`margin-right: 0;`}
  /* ${media.tablet`height: 400px;`}
  ${media.mobileL`height: 350px;`} */
`;

const SubscriptionCTA = styled(UnstyledSubscriptionCTA)`
  grid-area: SubscriptionCTA;
  align-self: start;

  ${media.laptop`justify-self: center;`}
  ${media.tablet`width: 100%;`}
`;

const InstagramContainer = styled.div`
  grid-area: Instagram;

  margin-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.laptop`margin-top: 0; justify-self: center;`}
  ${media.mobileS`width: 100%;`}
`;

const InstagramHeading = styled.div`
  border: ${props => props.theme.misc.frameBorder};
  background-image: url('/assets/light-marble.svg');
  background-repeat: none;
  background-size: contain;
  background-position: center center;
  padding: 0.75em 1.25em;
  text-align: center;
  font-size: 1.1em;
  font-weight: 700;

  ${media.tablet`font-size: 1em; width: 100%;`}
`;

const InstagramThumbnailContainer = styled.div`
  margin: 1em 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;

  ${media.laptop`grid-template-columns: 1fr 1fr 1fr;`}
  ${media.mobile`grid-template-columns: 1fr 1fr;`}
  ${media.mobileS`grid-template-columns: 1fr; width: 100%;`}
`;

const InstagramThumbnail = styled(Image)`
  height: 150px;
  width: 150px;
  border: ${props => props.theme.misc.frameBorder};
  display: block;

  ${media.tablet`height: 125px; width: 125px;`}
  ${media.mobile`height: 150px; width: 150px;`}
  ${media.mobileM`height: 125px; width: 125px;`}
  ${media.mobileS`height: 150px; width: 100%;`}
`;

const MarbleCTA = styled(LightMarbleCTA)`
  ${media.tablet`width: 100%;`}
`;

const GreenMarbleCTAContainer = styled.div`
  margin: 2em 0;
  display: flex;
  justify-content: center;
`;

const FinalCTA = styled(CTA)`
  padding: 8px 25px;
  background-image: url('/assets/empty-square-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  ${media.tablet`width: 100%;`}
`;

export const IndexPageTemplate = ({
  carouselImages,
  heroStatement,
  CTAs,
  posts,
  instagramImages
}) => (
  <Layout>
    <Header>
      <HomeCarousel images={carouselImages} />
      <Hero>{heroStatement}</Hero>
    </Header>

    <GridWrapper>
      <MainCTAContainer>
        <CTA {...CTAs.leftCTA} />
        <CTA {...CTAs.rightCTA} />
      </MainCTAContainer>

      <ThirdCTA {...CTAs.offCenterCTA} />

      <RecentStories posts={posts.slice(1)} />
      <MostRecentStory {...posts[0]} />

      <SubscriptionCTA />

      <InstagramContainer>
        <InstagramHeading>From Instagram</InstagramHeading>
        <InstagramThumbnailContainer>
          {instagramImages.map((fluid, i) => (
            <InstagramThumbnail key={i} fluid={fluid} />
          ))}
        </InstagramThumbnailContainer>
        <MarbleCTA />
      </InstagramContainer>
    </GridWrapper>

    <GreenMarbleCTAContainer>
      <FinalCTA {...CTAs.finalCTA} />
    </GreenMarbleCTAContainer>
  </Layout>
);

export default ({ data }) => (
  <IndexPageTemplate
    {...data.index.frontmatter}
    posts={[...data.postsLatest.edges, ...data.postsRest.edges].map(
      edge => edge.node.frontmatter
    )}
    instagramImages={data.instagram.edges.map(
      edge => edge.node.localFile.childImageSharp.fluid
    )}
  />
);

export const query = graphql`
  query($id: String!) {
    index: markdownRemark(id: { eq: $id }) {
      frontmatter {
        carouselImages {
          description
          image {
            childImageSharp {
              fluid(maxWidth: 1440) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
        heroStatement
        CTAs {
          leftCTA {
            external
            content
            path
          }
          rightCTA {
            external
            content
            path
          }
          offCenterCTA {
            external
            content
            path
          }
          finalCTA {
            external
            content
            path
          }
        }
      }
    }
    postsLatest: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      sort: { fields: [frontmatter___date], order: [DESC] }
      limit: 1
    ) {
      edges {
        node {
          frontmatter {
            headerImage {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            title
            subtitle
            author
            path
          }
        }
      }
    }
    postsRest: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      sort: { fields: [frontmatter___date], order: [DESC] }
      skip: 1
      limit: 3
    ) {
      edges {
        node {
          frontmatter {
            headerImage {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            title
            author
            path
          }
        }
      }
    }
    instagram: allInstaNode(
      sort: { fields: [timestamp], order: [DESC] }
      limit: 6
    ) {
      edges {
        node {
          localFile {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    }
  }
`;
