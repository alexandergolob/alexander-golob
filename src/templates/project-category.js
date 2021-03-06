import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import { media } from '../components/ThemeProvider';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import Link from '../components/Link';
import Projects from '../components/Projects';

import LightMarble from '../components/LightMarble';

const HeadingContainer = styled.div`
  margin-bottom: 2em;
  display: flex;
  justify-content: center;

  ${media.tablet`margin-bottom: 1em;`}
`;

const Heading = styled(PageHeading)`
  min-width: 250px;

  ${media.mobile`min-width: auto; width: 100%;`}
`;

const Hero = styled(Heading).attrs({ as: 'div' })`
  position: relative;
  margin: 1em 0 1.5em;
  background: none;
  font-size: 1.25em;

  ${media.tablet`font-size: 1.15em;`}
`;

const Subcategories = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px 1fr;
  grid-template-rows: ${props => props.gridTemplateRows('300px 40px 300px')};
  grid-gap: 1em;

  ${media.tablet`display: flex; flex-direction: column;`}
`;

const SubcategoryTitleAndDescription = styled.div`
  grid-column-start: ${props => props.startingColumn};
  grid-column-end: span 1;
  grid-row-end: span 2;

  display: flex;
  flex-direction: column;

  ${media.tablet`
    margin-bottom: 1em;
    order: ${props => props.sectionNumber * 2 + 2};
  `}
`;

const SubcategoryTitle = styled.h2`
  margin: auto auto 0.25em;
  background: ${props => props.theme.colors.offLight};
  border: ${props => props.theme.misc.frameBorder};
  width: 80%;
  padding: 2px 10px;
  text-align: center;
  font-family: ${props => props.theme.fonts.serif};

  ${media.tablet`
    margin-bottom: 0;
    width: 100%;
    border-top: none;
    border-bottom: none;
    padding: 10px 10px 0;
    font-size: 1.15em;
  `}
`;

const SubcategoryDescriptionContainer = styled.div`
  flex: 1;
  background: ${props => props.theme.colors.offLight};
  border: ${props => props.theme.misc.frameBorder};
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.tablet`border-top: none;`}
`;

const SubcategoryDescription = styled.div`
  flex: 1;

  p {
    margin-bottom: 1em;
    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

const SubcategoryLink = styled(Link)`
  margin-top: 1em;
  min-width: 200px;
  border: 1px solid ${props => props.theme.colors.dark};
  background: ${props => props.theme.colors.inputBackground};
  padding: 6px 12px;
  text-align: center;
  font-family: ${props => props.theme.fonts.serif};

  color: inherit;
  text-decoration: none;

  ${media.mobile`min-width: auto; width: 100%;`}
`;

const SubcategoryImage = styled(Image)`
  grid-column-start: ${props => props.startingColumn};
  grid-column-end: span 2;
  grid-row-end: span 1;

  border: ${props => props.theme.misc.frameBorder};

  ${media.tablet`
    order: ${props => props.sectionNumber * 2 + 1};
    height: 300px;
    border-bottom: 1px solid black;
  `}
`;

const ProjectsContainer = styled.div`
  margin-top: 1.5em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  grid-auto-rows: 225px;
  grid-gap: 2em;

  ${media.mobile`grid-template-columns: 1fr; grid-auto-rows: auto;`}
`;

export const Template = ({
  title,
  description,
  ogImage,
  hero,
  subcategorySections,
  projects
}) => (
  <Layout head={{ title, description, ogImage }}>
    <HeadingContainer>
      <Heading>{title}</Heading>
    </HeadingContainer>
    <Hero>
      <LightMarble />
      {hero}
    </Hero>
    <Subcategories
      repeat={Math.ceil(subcategorySections.length / 2)}
      gridTemplateRows={spec =>
        Array.from(
          { length: Math.ceil(subcategorySections.length / 2) },
          _ => spec
        )
          .join(' ')
          .replace(
            / \d+px$/,
            subcategorySections.length % 2 === 0 ? str => str : ''
          )
      }
    >
      {subcategorySections.map(
        (
          {
            subcategory,
            description,
            image,
            alt,
            linkContent,
            external,
            linkPath
          },
          i
        ) => (
          <React.Fragment key={i}>
            <SubcategoryTitleAndDescription
              startingColumn={i % 2 === 0 ? 1 : 3}
              sectionNumber={i}
            >
              <SubcategoryTitle>{subcategory}</SubcategoryTitle>
              <SubcategoryDescriptionContainer>
                <SubcategoryDescription
                  dangerouslySetInnerHTML={{ __html: description }}
                />
                <SubcategoryLink external={external} path={linkPath}>
                  {linkContent}
                </SubcategoryLink>
              </SubcategoryDescriptionContainer>
            </SubcategoryTitleAndDescription>
            <SubcategoryImage
              alt={alt}
              fluid={image}
              startingColumn={i % 2 === 0 ? 2 : 1}
              sectionNumber={i}
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

export default ({ data: { category, projects } }) => {
  return (
    <Template
      {...category.frontmatter}
      ogImage={
        category.frontmatter.ogImage &&
        category.frontmatter.ogImage.childImageSharp.fluid.src
      }
      subcategorySections={category.frontmatter.subcategorySections.map(
        (section, i) => ({
          ...section,
          description: category.fields.subcategorySections[i].description,
          image: section.image.childImageSharp.fluid
        })
      )}
      projects={projects.edges.map(({ node }) => ({
        ...node.frontmatter,
        image: (node.frontmatter.templateKey === 'external-project'
          ? node.frontmatter.image
          : node.frontmatter.images[0].image
        ).childImageSharp.fluid,
        external: node.frontmatter.templateKey === 'external-project',
        path:
          node.frontmatter.templateKey === 'project-page'
            ? node.fields.slug
            : node.frontmatter.path
      }))}
    />
  );
};

export const query = graphql`
  query($id: String!, $category: String!) {
    category: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        ogImage {
          childImageSharp {
            fluid(maxWidth: 250, maxHeight: 250) {
              src
            }
          }
        }
        hero
        subcategorySections {
          subcategory
          linkContent
          external
          linkPath
          image {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
      }
      fields {
        subcategorySections {
          description
        }
      }
    }
    projects: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { in: ["project-page", "external-project"] }
          category: { eq: $category }
        }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            templateKey
            path
            title
            date
            image {
              childImageSharp {
                fluid(maxWidth: 225) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            images {
              image {
                childImageSharp {
                  fluid(maxWidth: 225) {
                    ...GatsbyImageSharpFluid
                  }
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
