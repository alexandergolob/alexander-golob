import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

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

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { heading, subheadings, descriptions } = frontmatter;
  const {
    subheading_1,
    subheading_2,
    subheading_3,
    subheading_4
  } = subheadings;
  const { description_1, description_2, description_3 } = descriptions;

  return (
    <Layout>
      <HeadingContainer>
        <Heading>{heading}</Heading>
      </HeadingContainer>
      <SubheadingContainer>
        <Subheading>{subheading_1}</Subheading>
        <Subheading>{subheading_2}</Subheading>
        <Subheading>{subheading_3}</Subheading>
        <Subheading>{subheading_4}</Subheading>
      </SubheadingContainer>
      <DescriptionsContainer>
        <Description>
          <DescriptionHeading>{description_1.heading}</DescriptionHeading>
          <DescriptionBody>{description_1.content}</DescriptionBody>
        </Description>
        <DescriptionImage alt='' src={description_1.image} />
        <DescriptionImage alt='' src={description_2.image} />
        <DisplacedDescription>
          <DescriptionHeading>{description_2.heading}</DescriptionHeading>
          <DescriptionBody>{description_2.content}</DescriptionBody>
        </DisplacedDescription>
        <Description>
          <DescriptionHeading>{description_3.heading}</DescriptionHeading>
          <DescriptionBody>{description_3.content}</DescriptionBody>
        </Description>
        <DescriptionImage alt='' src={description_3.image} />
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
};

export const query = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        heading
        subheadings {
          subheading_1
          subheading_2
          subheading_3
          subheading_4
        }
        descriptions {
          description_1 {
            heading
            content
            image
          }
          description_2 {
            heading
            content
            image
          }
          description_3 {
            heading
            content
            image
          }
        }
      }
    }
  }
`;
