import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import { media } from '../components/ThemeProvider';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import Projects from '../components/Projects';
import InternalLink from '../components/InternalLink';

const HeadingContainer = styled.div`
  margin-bottom: 2em;
  display: flex;
  justify-content: center;
`;

const Heading = styled(PageHeading)`
  min-width: 250px;

  ${media.tablet`margin-bottom: 1em;`}
`;

const ProjectsContainer = styled.div`
  margin-top: 1.5em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  grid-auto-rows: 225px;
  grid-gap: 2em;

  ${media.tablet`grid-template-rows: auto;`}
  ${media.mobile`grid-template-columns: 1fr; grid-auto-rows: auto; grid-gap: 1em;`}
`;

const DescriptionContainer = styled.div`
  grid-column: -1 / -3;
  grid-row: 1 / span 2;

  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  display: flex;
  flex-direction: column;
  padding: 15px 25px;

  ${media.tablet`grid-area: 1 / 1 / span 1 / -1;`}
`;

const Hero = styled.div`
  margin-bottom: 0.5em;
  font-family: ${props => props.theme.fonts.serif};
  font-weight: 600;
  font-size: 1.5em;

  ${media.tablet`font-size: 1.15em;`}
`;

const Description = styled.div`
  flex: 1;
  line-height: 1.25em;
  p {
    margin-bottom: 1em;
    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.tablet`margin-top: 1em;`}
`;

const CTAStatementAbove = styled.div`
  margin-bottom: 0.5em;
  font-size: 1.15em;
`;

const CTALink = styled(InternalLink)`
  min-width: 200px;
  border: 1px solid ${props => props.theme.colors.dark};
  background: ${props => props.theme.colors.inputBackground};
  padding: 6px 12px;
  text-align: center;

  ${media.mobile`min-width: auto; width: 100%;`}
`;

export const Template = ({ title, hero, CTA, description, projects }) => {
  return (
    <Layout>
      <HeadingContainer>
        <Heading>{title}</Heading>
      </HeadingContainer>
      <ProjectsContainer>
        <Projects projects={projects} />
        <DescriptionContainer>
          <Hero>{hero}</Hero>
          <Description dangerouslySetInnerHTML={{ __html: description }} />
          <CTAContainer>
            <CTAStatementAbove>{CTA.statementAbove}</CTAStatementAbove>
            <CTALink to={CTA.path}>{CTA.statement}</CTALink>
          </CTAContainer>
        </DescriptionContainer>
      </ProjectsContainer>
    </Layout>
  );
};

export default ({ data: { subcategory, projects } }) => (
  <Template
    {...subcategory.frontmatter}
    description={subcategory.html}
    projects={projects.edges.map(({ node }) => ({
      ...node.frontmatter,
      image: node.frontmatter.images[0].childImageSharp.fluid,
      path: node.fields.slug
    }))}
  />
);

export const query = graphql`
  query($id: String!, $subcategory: String!) {
    subcategory: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        hero
        CTA {
          statementAbove
          statement
          path
        }
      }
    }
    projects: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "project-page" }
          subcategories: { in: [$subcategory] }
        }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            images {
              childImageSharp {
                fluid(maxWidth: 225) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
