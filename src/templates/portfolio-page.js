import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import { media } from '../components/ThemeProvider';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import Carousel from '../components/Carousel';
import Link from '../components/Link';

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

const ProjectsContainer = styled.div`
  margin-top: 1.5em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 2em;

  ${media.tablet`grid-gap: 1em;`}
  ${media.mobile`grid-template-columns: 1fr; grid-auto-rows: auto; `}
`;

const Project = styled(Link)`
  display: flex;
  flex-direction: column;
  color: inherit;
  text-decoration: none;
`;

const ProjectImage = styled(Image)`
  flex: 1;
  border: 1px solid ${props => props.theme.colors.dark};
  border-bottom: none;

  ${media.mobile`flex: auto; height: 250px;`}
`;

const ProjectTitle = styled.div`
  background: ${props => props.theme.colors.offLight};
  border: 1px solid ${props => props.theme.colors.dark};
  padding: 5px;
  text-align: center;
  font-family: ${props => props.theme.fonts.serif};

  /* elipses after one line */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${media.mobile`white-space: initial;`}
`;

export const Template = ({
  title,
  description,
  ogImage,
  heading,
  featuredProjects
}) => (
  <Layout head={{ title, description, ogImage }}>
    <HeadingContainer>
      <Heading>{heading}</Heading>
    </HeadingContainer>
    <Carousel
      images={featuredProjects.map(({ title, date, ...rest }) => ({
        ...rest,
        description: `${title}, ${date}`
      }))}
    />
    <ProjectsContainer>
      {featuredProjects.map(({ external, path, image, title }, i) => (
        <Project external={external} path={path} key={i}>
          <ProjectImage alt='' fluid={image} />
          <ProjectTitle>{title}</ProjectTitle>
        </Project>
      ))}
    </ProjectsContainer>
  </Layout>
);

export default ({ data: { portfolio, featuredProjects } }) => (
  <Template
    {...portfolio.frontmatter}
    ogImage={
      portfolio.frontmatter.ogImage &&
      portfolio.frontmatter.ogImage.childImageSharp.fluid.src
    }
    featuredProjects={featuredProjects.edges.map(({ node }) => ({
      ...node.frontmatter,
      image: (node.frontmatter.templateKey === 'external-project'
        ? node.frontmatter.image
        : node.frontmatter.images[0].image
      ).childImageSharp.fluid,
      alt: '',
      external: node.frontmatter.templateKey === 'external-project',
      path:
        node.frontmatter.templateKey === 'project-page'
          ? node.fields.slug
          : node.frontmatter.path
    }))}
  />
);

export const query = graphql`
  query($id: String!) {
    portfolio: markdownRemark(id: { eq: $id }) {
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
        heading
      }
    }
    featuredProjects: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { in: ["project-page", "external-project"] }
          isFeatured: { eq: true }
        }
      }
      sort: { fields: [frontmatter___date], order: [DESC] }
    ) {
      edges {
        node {
          frontmatter {
            templateKey
            title
            path
            date(formatString: "YYYY")
            image {
              childImageSharp {
                fluid(maxWidth: 1050) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            images {
              image {
                childImageSharp {
                  fluid(maxWidth: 1050) {
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
