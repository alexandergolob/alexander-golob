import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import { media } from '../components/ThemeProvider';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import Projects from '../components/Projects';

const HeadingContainer = styled.div`
  margin-bottom: 2em;
  display: flex;
  justify-content: center;
`;

const Heading = styled(PageHeading)`
  min-width: 250px;

  ${media.tablet`margin-bottom: 1em;`}
`;

const Hero = styled(Heading).attrs({ as: 'div' })`
  margin: 1em 0 1.5em;
  background-image: url('/assets/light-marble.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  font-size: 1.25em;

  ${media.tablet`font-size: 1.15em;`}
`;

const Subcategories = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px 1fr;
  grid-template-rows: repeat(auto-fill, 200px 20px 200px);
  grid-gap: 1em;

  ${media.mobile`
    display: block;
  `}
`;

const SubcategoryTitleAndDescription = styled.div`
  grid-column-start: ${props => props.startingColumn};
  grid-column-end: span 1;
  grid-row-end: span 2;

  display: flex;
  flex-direction: column;
`;

const SubcategoryTitle = styled.h2`
  margin: auto auto 0.25em;
  background: ${props => props.theme.colors.offLight};
  border: ${props => props.theme.misc.frameBorder};
  width: 80%;
  padding: 2px 10px;
  text-align: center;
  font-family: ${props => props.theme.fonts.serif};

  ${media.tablet`font-size: 1.15em;`}
`;

const SubcategoryDescription = styled.div`
  flex: 1;
  background: ${props => props.theme.colors.offLight};
  border: ${props => props.theme.misc.frameBorder};
  padding: 10px;

  p {
    margin-bottom: 1em;
    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

const SubcategoryImage = styled(Image)`
  grid-column-start: ${props => props.startingColumn};
  grid-column-end: span 2;
  grid-row-end: span 1;

  border: ${props => props.theme.misc.frameBorder};
`;

const ProjectsContainer = styled.div`
  margin-top: 1.5em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  grid-auto-rows: 225px;
  grid-gap: 2em;

  ${media.mobile`grid-template-columns: 1fr; grid-auto-rows: auto;`}
`;

export const Template = ({ title, hero, subcategorySections, projects }) => (
  <Layout>
    <HeadingContainer>
      <Heading>{title}</Heading>
    </HeadingContainer>
    <Hero>{hero}</Hero>
    <Subcategories>
      {subcategorySections.map(
        ({ subcategory, description, image, path }, i) => (
          <React.Fragment key={i}>
            <SubcategoryTitleAndDescription
              startingColumn={i % 2 === 0 ? 1 : 3}
            >
              <SubcategoryTitle>{subcategory}</SubcategoryTitle>
              <SubcategoryDescription
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </SubcategoryTitleAndDescription>
            <SubcategoryImage
              alt=''
              fluid={image}
              startingColumn={i % 2 === 0 ? 2 : 1}
            />
          </React.Fragment>
        )
      )}
    </Subcategories>
    <ProjectsContainer>
      <Projects projects={projects} />
    </ProjectsContainer>
  </Layout>
);

export default ({ data: { category, subcategories, projects } }) => {
  return (
    <Template
      {...category.frontmatter}
      subcategorySections={category.frontmatter.subcategorySections.map(
        (section, i) => ({
          ...section,
          description: category.fields.subcategorySections[i].description,
          image: section.image.childImageSharp.fluid,
          path: subcategories.edges.find(
            ({ node }) => node.frontmatter.title === section.subcategory
          ).node.fields.slug
        })
      )}
      projects={projects.edges.map(({ node }) => ({
        ...node.frontmatter,
        image: node.frontmatter.images[0].childImageSharp.fluid,
        path: node.fields.slug
      }))}
    />
  );
};

export const query = graphql`
  query($id: String!, $category: String!, $subcategories: [String!]!) {
    category: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        hero
        subcategorySections {
          subcategory
          image {
            childImageSharp {
              fluid(maxWidth: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      fields {
        subcategorySections {
          description
        }
      }
    }
    subcategories: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "project-subcategory" }
          title: { in: $subcategories }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
    projects: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "project-page" }
          category: { eq: $category }
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
