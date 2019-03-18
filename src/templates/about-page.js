import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import FrameBox from '../components/FrameBox';

const HeadingContainer = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

const Heading = styled(FrameBox)`
  display: inline-block;
  padding: 10px 100px;
  font-size: 2.5rem;
`;

const SubheadingsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Subheading = styled(FrameBox)`
  padding: 10px 0;
  width: 200px;
  text-align: center;
  font-weight: 900;
  margin-right: 25px;
  &:last-of-type {
    margin-right: 0;
  }
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

const Image = styled(FrameBox)`
  height: 200px;
  background: green;
`;

const FirstImage = styled(Image)`
  grid-area: FirstImage;
`;

const SecondImage = styled(Image)`
  grid-area: SecondImage;
`;

const SectionHeadingCTA = styled(FrameBox)`
  background-image: url('/assets/empty-square-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  padding: 5px 20px;
  font-size: 0.9rem;
`;

export default () => (
  <Layout>
    <HeadingContainer>
      <Heading>Subscribe</Heading>
    </HeadingContainer>
    <SubheadingsContainer>
      <Subheading>ABOUT</Subheading>
      <Subheading>CONTACT</Subheading>
      <Subheading>CV</Subheading>
    </SubheadingsContainer>
    <FirstSection>
      <SectionHeadingContainer>
        <SectionHeading>About Golob Art</SectionHeading>
      </SectionHeadingContainer>
      <FirstSectionContent>
        <p>
          Alexander Golob has experience engaging with communities, conducting
          research, and developing and implementing art and placemaking policy,
          strategy, and integration. His studio has worked with city governments
          on policy and implementation, non-profits embarking upon art
          initiatives, and early-stage start-ups looking for guidance.
        </p>
        <br />
        <p>
          Art provides benefits for sense of community, business, marketing, and
          health. sometimes, it helps to have an artist to integrate that
          perspective into a community, business, or project.
        </p>
      </FirstSectionContent>
    </FirstSection>

    <SectionsAndImages>
      <SecondSection>
        <SectionHeadingContainer>
          <SectionHeading>
            About Alexander
            <SectionHeadingCTA>CV</SectionHeadingCTA>
          </SectionHeading>
        </SectionHeadingContainer>
        <SectionContent>
          <p>
            Alexander Golob has experience engaging with communities, conducting
            research, and developing and implementing art and placemaking
            policy, strategy, and integration. His studio has worked with city
            governments on policy and implementation, non-profits embarking upon
            art initiatives, and early-stage start-ups looking for guidance.
          </p>
          <br />
          <p>
            Art provides benefits for sense of community, business, marketing,
            and health. sometimes, it helps to have an artist to integrate that
            perspective into a community, business, or project.
          </p>
        </SectionContent>
      </SecondSection>
      <FirstImage />
      <ThirdSection>
        <SectionHeadingContainer>
          <SectionHeading>
            About Khizer
            <SectionHeadingCTA>CV</SectionHeadingCTA>
          </SectionHeading>
        </SectionHeadingContainer>
        <SectionContent>
          <p>
            Alexander Golob has experience engaging with communities, conducting
            research, and developing and implementing art and placemaking
            policy, strategy, and integration. His studio has worked with city
            governments on policy and implementation, non-profits embarking upon
            art initiatives, and early-stage start-ups looking for guidance.
          </p>
          <br />
          <p>
            Art provides benefits for sense of community, business, marketing,
            and health. sometimes, it helps to have an artist to integrate that
            perspective into a community, business, or project.
          </p>
        </SectionContent>
      </ThirdSection>
      <SecondImage />
    </SectionsAndImages>
  </Layout>
);
