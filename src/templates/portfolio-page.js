import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import FrameBox from '../components/FrameBox';

const HeadingContainer = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

const Heading = styled(FrameBox)`
  display: inline-block;
  padding: 10px 40px;
`;

const Carousel = styled.div`
  margin-bottom: 20px;
  height: 450px;
  background: green;
`;

const Projects = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 300px;
  grid-column-gap: 5px;
  grid-row-gap: 15px;
`;

const UnstyledProject = ({ title, ...rest }) => (
  <div {...rest}>
    <ProjectTitle>{title}</ProjectTitle>
  </div>
);

const Project = styled(UnstyledProject)`
  position: relative;
  background: green;
  border: 1px solid #000;
`;

const ProjectTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: hsl(0, 0%, 93%);
  padding: 5px 0;
  font-size: 1.2rem;
  font-weight: 900;
  text-align: center;
`;

export const PortfolioPageTemplate = ({ heading }) => (
  <Layout>
    <HeadingContainer>
      <Heading>{heading}</Heading>
    </HeadingContainer>

    <Carousel />
    <Projects>
      <Project title='Kaleidoscope' />
      <Project title='Kaleidoscope' />
      <Project title='Kaleidoscope' />
      <Project title='Kaleidoscope' />
      <Project title='Kaleidoscope' />
      <Project title='Kaleidoscope' />
      <Project title='Kaleidoscope' />
      <Project title='Kaleidoscope' />
      <Project title='Kaleidoscope' />
      <Project title='Kaleidoscope' />
      <Project title='Kaleidoscope' />
      <Project title='Kaleidoscope' />
    </Projects>
  </Layout>
);

export default ({ data }) => (
  <PortfolioPageTemplate {...data.markdownRemark.frontmatter} />
);

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        heading
      }
    }
  }
`;
