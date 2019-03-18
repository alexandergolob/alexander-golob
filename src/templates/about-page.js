import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import FrameBox from '../components/FrameBox';
import Link from '../components/Link';

const HeadingContainer = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

const Heading = styled(FrameBox)`
  display: inline-block;
  padding: 10px 100px;
  font-size: 2.5rem;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const LinkContainer = styled(Link)`
  margin-right: 25px;
  &:last-of-type {
    margin-right: 0;
  }
`;

const LinkBox = styled(FrameBox)`
  padding: 10px 0;
  width: 200px;
  text-align: center;
  font-weight: 900;
`;

const SectionHeadingContainer = styled.h2`
  margin-bottom: 7px;
`;

const SectionHeading = styled(FrameBox)`
  position: relative;
  background-image: url('/assets/light-marble.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding: 10px 0;
  text-align: center;
  font-weight: 900;
  font-size: 1.35rem;
`;

const Section = styled.div``;

const SectionContent = styled(FrameBox)`
  padding: 15px;
`;

const FirstSection = styled(Section)`
  margin-bottom: 30px;
`;

const FirstSectionContent = styled(SectionContent)`
  margin: auto;
  width: 95%;
  text-align: center;
`;

const SectionsAndImages = styled.div`
  display: grid;
  grid-template-columns: auto 250px;
  grid-template-rows: auto auto auto auto;
  grid-gap: 15px;
  grid-template-areas:
    'SecondSection FirstImage'
    'SecondSection .'
    'ThirdSection SecondImage'
    'ThirdSection .';
`;

const SecondSection = styled(Section)`
  grid-area: SecondSection;
`;

const ThirdSection = styled(Section)`
  grid-area: ThirdSection;
`;

const ImageContainer = styled(FrameBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const FirstImageContainer = styled(ImageContainer)`
  grid-area: FirstImage;
`;

const SecondImageContainer = styled(ImageContainer)`
  grid-area: SecondImage;
`;

const SectionHeadingCTALink = styled(Link)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

const SectionHeadingCTA = styled(FrameBox)`
  background-image: url('/assets/empty-square-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding: 5px 20px;
  font-size: 0.9rem;
`;

export const AboutPageTemplate = ({
  heading,
  links,
  section1,
  section2,
  section3,
  image1,
  image2
}) => (
  <Layout>
    <HeadingContainer>
      <Heading>{heading}</Heading>
    </HeadingContainer>

    <LinksContainer>
      {links.map(({ content, path }, i) => (
        <LinkContainer key={i} to={path}>
          <LinkBox>{content}</LinkBox>
        </LinkContainer>
      ))}
    </LinksContainer>

    <FirstSection>
      <SectionHeadingContainer>
        <SectionHeading>{section1.heading}</SectionHeading>
      </SectionHeadingContainer>
      <FirstSectionContent>
        <div dangerouslySetInnerHTML={{ __html: section1.content }} />
      </FirstSectionContent>
    </FirstSection>

    <SectionsAndImages>
      <SecondSection>
        <SectionHeadingContainer>
          <SectionHeading>
            {section2.heading}
            <SectionHeadingCTALink to={section2.headingCTA.path}>
              <SectionHeadingCTA>
                {section2.headingCTA.content}
              </SectionHeadingCTA>
            </SectionHeadingCTALink>
          </SectionHeading>
        </SectionHeadingContainer>
        <SectionContent>
          <div dangerouslySetInnerHTML={{ __html: section2.content }} />
        </SectionContent>
      </SecondSection>

      <FirstImageContainer>
        <Image src={image1} alt='' />
      </FirstImageContainer>

      <ThirdSection>
        <SectionHeadingContainer>
          <SectionHeading>
            {section3.heading}
            <SectionHeadingCTALink to={section3.headingCTA.path}>
              <SectionHeadingCTA>
                {section3.headingCTA.content}
              </SectionHeadingCTA>
            </SectionHeadingCTALink>
          </SectionHeading>
        </SectionHeadingContainer>
        <SectionContent>
          <div dangerouslySetInnerHTML={{ __html: section3.content }} />
        </SectionContent>
      </ThirdSection>

      <SecondImageContainer>
        <Image src={image2} alt='' />
      </SecondImageContainer>
    </SectionsAndImages>
  </Layout>
);

export default ({ data }) => (
  <AboutPageTemplate {...data.markdownRemark.frontmatter} />
);

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        heading
        links {
          content
          path
        }
        section1 {
          heading
          content
        }
        section2 {
          heading
          headingCTA {
            content
            path
          }
          content
        }
        section3 {
          heading
          headingCTA {
            content
            path
          }
          content
        }
        image1
        image2
      }
    }
  }
`;
