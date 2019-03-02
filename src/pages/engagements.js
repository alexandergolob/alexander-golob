import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import FrameBox from '../components/FrameBox';
import Link from '../components/Link';
import Project from '../components/Project';

const HeadingContainer = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Heading = styled(FrameBox)`
  padding: 10px 60px;
  font-family: 'Enriqueta', serif;
  font-size: 2.25rem;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-auto-rows: 200px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  font-family: 'Enriqueta', serif;
`;

const Spacer = styled.div`
  grid-row: 1 / span 1;
  grid-column: 1 / span 2;
`;

const YearsContainer = styled(FrameBox)`
  grid-row: 1 / span 1;
  grid-column: 3 / span 2;
  padding: 5px 20px;
`;

const Years = styled.div`
  display: flex;
  justify-content: space-between;
`;

const descriptionVerticalPadding = '15px';

const Description = styled.div`
  grid-row: 2 / span 2;
  grid-column: 3 / span 2;
  position: relative;
  background: hsl(0, 0%, 93%);
  padding: ${descriptionVerticalPadding} 30px;
  text-align: justify;
`;

const DescriptionHeading = styled.h2`
  text-align: right;
  margin-bottom: 15px;
  font-size: 1.75rem;
  letter-spacing: 0.04rem;
`;

const CTAContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: ${descriptionVerticalPadding};
  left: 0;
  right: 0;
`;

const CTAStatement = styled.div`
  margin-bottom: 5px;
`;

const CTALink = styled(Link)`
  border: 1px solid black;
  border-radius: 2px;
  background: hsl(0, 0%, 90%);
  padding: 4px 50px;
`;

export default () => (
  <Layout>
    <HeadingContainer>
      <Heading>Engagements</Heading>
    </HeadingContainer>
    <ContentContainer>
      <Spacer />
      <YearsContainer>
        <Years>
          {Array.from(Array(8), (_, i) => (
            <div key={i}>{new Date().getFullYear() - (8 - (i + 1))}</div>
          ))}
        </Years>
      </YearsContainer>

      <Description>
        <DescriptionHeading>Speaking</DescriptionHeading>
        <p>
          Alexander Golob has experience engaging with communities, conducting
          research, and developing and implementing art and placemaking policy,
          strategy, and integration. His studio has worked with city governments
          on policy and implementation, non-profits embarking upon art
          initiative, and early stage start-ups looking for guidance.
        </p>
        <br />
        <p>
          Art provides benefits for sense of community, business, marketing, and
          health. Sometimes, it helps to have an artist to integrate that
          perspective into a community, business, or project.
        </p>
        <CTAContainer>
          <CTAStatement>Interested? Have questions?</CTAStatement>
          <CTALink to='/contact'>Get in touch</CTALink>
        </CTAContainer>
      </Description>
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </ContentContainer>
  </Layout>
);
