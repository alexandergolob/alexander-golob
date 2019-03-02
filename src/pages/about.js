import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import FrameBox from '../components/FrameBox';
import UnstyledProject from '../components/Project';

const HeadingContainer = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Heading = styled(FrameBox)`
  width: 80%;
  padding: 10px 20px;
  text-align: center;
  font-family: 'Enriqueta', serif;
  font-size: 1.5rem;
`;

const SubheadingContainer = styled.div`
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;

  font-family: 'Enriqueta', serif;
  font-size: 1rem;
  font-weight: 700;
`;

const SubheadingWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const UnstyledSubheading = ({ children, ...rest }) => (
  <SubheadingWrapper>
    <FrameBox {...rest}>{children}</FrameBox>
  </SubheadingWrapper>
);

const Subheading = styled(UnstyledSubheading)`
  padding: 10px 15px;
`;

const DescriptionsContainer = styled.div`
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 50px 1fr;
  /* grid-template-rows: auto 30px auto 30px auto 30px; */
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  font-family: 'Enriqueta', serif;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column-end: span 1;
  /* grid-row-end: span 2; */
`;

const DisplacedDescription = styled(Description)`
  margin-top: -25px;
`;

const UnstyledDescriptionHeading = ({ children, ...rest }) => (
  <FrameBox {...rest}>
    <h2>{children}</h2>
  </FrameBox>
);

const DescriptionHeading = styled(UnstyledDescriptionHeading)`
  margin-bottom: 10px;
  background: #000;
  color: #fff;
  padding: 2px 25px;
`;

const DescriptionBody = styled(FrameBox)`
  padding: 5px 15px;
`;

const DescriptionImageContainer = styled.div`
  grid-column-end: span 2;
  /* grid-row-end: span 1; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  overflow: hidden;
`;

const StyledDescriptionImage = styled.img`
  width: 100%;
  display: block;
`;

const DescriptionImage = props => (
  <DescriptionImageContainer>
    <FrameBox>
      <StyledDescriptionImage {...props} />
    </FrameBox>
  </DescriptionImageContainer>
);

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

const Project = styled(UnstyledProject)`
  font-family: 'Enriqueta', serif;
  font-size: 1rem;
`;

export default () => (
  <Layout>
    <HeadingContainer>
      <Heading>
        Golob Art offers a wide array of fine art and creative services to help
        lift people up, provoke thought, and transform spaces.
      </Heading>
    </HeadingContainer>
    <SubheadingContainer>
      <Subheading>Community Engagement</Subheading>
      <Subheading>Community Engagement</Subheading>
      <Subheading>Community Engagement</Subheading>
      <Subheading>Community Engagement</Subheading>
    </SubheadingContainer>
    <DescriptionsContainer>
      <Description>
        <DescriptionHeading>Community Engagement</DescriptionHeading>
        <DescriptionBody>
          <p>
            Alexander Golob has experience engaging with communities, conducting
            research, and developing and implementing art and placemaking
            policy, strategy, and integration. His studio has worked with city
            governments on policy and implementation, non-profits embarking upon
            art initiative, and early stage start-ups looking for guidance.
          </p>
          <br />
          <p>
            Art provides benefits for sense of community, business, marketing,
            and health. Sometimes, it helps to have an artist to integrate that
            perspective into a community, business, or project.
          </p>
        </DescriptionBody>
      </Description>
      <DescriptionImage
        alt='Artwork titled "Kaleidoscope"'
        src='/assets/kaleidoscope.webp'
      />
      <DescriptionImage
        alt='Artwork titled "Kaleidoscope"'
        src='/assets/kaleidoscope.webp'
      />
      <DisplacedDescription>
        <DescriptionHeading>Community Engagement</DescriptionHeading>
        <DescriptionBody>
          <p>
            Alexander Golob has experience engaging with communities, conducting
            research, and developing and implementing art and placemaking
            policy, strategy, and integration. His studio has worked with city
            governments on policy and implementation, non-profits embarking upon
            art initiative, and early stage start-ups looking for guidance.
          </p>
          <br />
          <p>
            Art provides benefits for sense of community, business, marketing,
            and health. Sometimes, it helps to have an artist to integrate that
            perspective into a community, business, or project.
          </p>
        </DescriptionBody>
      </DisplacedDescription>
      <Description>
        <DescriptionHeading>Community Engagement</DescriptionHeading>
        <DescriptionBody>
          <p>
            Alexander Golob has experience engaging with communities, conducting
            research, and developing and implementing art and placemaking
            policy, strategy, and integration. His studio has worked with city
            governments on policy and implementation, non-profits embarking upon
            art initiative, and early stage start-ups looking for guidance.
          </p>
          <br />
          <p>
            Art provides benefits for sense of community, business, marketing,
            and health. Sometimes, it helps to have an artist to integrate that
            perspective into a community, business, or project.
          </p>
        </DescriptionBody>
      </Description>
      <DescriptionImage
        alt='Artwork titled "Kaleidoscope"'
        src='/assets/kaleidoscope.webp'
      />
    </DescriptionsContainer>
    <ProjectsContainer>
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </ProjectsContainer>
  </Layout>
);
