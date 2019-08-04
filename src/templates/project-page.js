import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import { kebabCase } from 'lodash';

import { media } from '../components/ThemeProvider';
import Layout from '../components/Layout';
import InternalLink from '../components/InternalLink';
import PostCTAs from '../components/PostCTAs';
import Post from '../components/Post';

const Heading = styled.h1`
  margin: 0 auto 1em;
  width: 90%;
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  padding: 10px;
  text-align: center;
  font-family: ${props => props.theme.fonts.serif};
  font-size: 1.5em;

  ${media.tablet`font-size: 1.25em;`}
  ${media.mobile`width: 100%; font-size: 1.15em;`}
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;

  ${media.tablet`grid-template-columns: 1fr;`}
`;

const Categories = styled.div`
  grid-area: 1 / 1 / span 1 / -1;

  justify-self: start;
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  display: inline-block;
  padding: 5px 20px;
  font-family: ${props => props.theme.fonts.serif};

  font-size: 0.9em;

  ${media.tablet`  
    width: 100%;
    text-align: center;
    font-size: 1em;
  `}
`;

const Category = styled(InternalLink)`
  font-weight: 600;
`;

const FirstImage = styled(GatsbyImage)`
  grid-area: 2 / 1 / span 1 / -1;
  height: 400px;

  ${media.tablet`height: 325px;`}
  ${media.mobile`height: 250px;`}
`;

const Details = styled.div`
  grid-area: 3 / 2 / span 1 / -1;

  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 15px 25px;
  font-family: ${props => props.theme.fonts.serif};

  ${media.tablet`grid-column-start: 1;`}
`;

const Detail = styled.div`
  display: flex;
`;

const Attribute = styled.div`
  font-weight: 600;
  width: 100px;
`;

const Value = styled.div`
  flex: 1;
`;

const Image = styled(GatsbyImage)`
  height: 250px;
  ${media.mobile`height: 200px;`}
`;

// starting row === 1 -> grid-row-start === 4 (+1 on tablet)
const Description = styled.div`
  grid-row-start: ${props => props.startingRow + 3};
  grid-column: 1 / -1;

  align-self: start;

  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  padding: 10px 20px;

  ${media.tablet`grid-row-start: ${props => props.startingRow + 4};`}
`;

const DescriptionHeading = styled.h2`
  margin-bottom: 0.5em;
  font-family: ${props => props.theme.fonts.serif};
  font-weight: 600;
  font-size: 1em;
`;

const DescriptionContent = styled.div`
  p {
    margin-bottom: 1em;
    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

const CTAs = styled(PostCTAs)`
  margin-top: 2em;

  ${media.tablet`margin: 1em 0;`}
`;

const SectionHeading = styled.h2`
  margin: 1em auto;
  width: 75%;
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  padding: 10px;
  text-align: center;
  font-family: ${props => props.theme.fonts.serif};
  font-size: 1.25em;

  ${media.tablet`font-size: 1.15em;`}
  ${media.mobile`width: 100%; font-size: 1.05em;`}
`;

const RecentProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: max-content;
  grid-column-gap: 0.5em;
  grid-row-gap: 1em;

  ${media.mobile`grid-template-columns: 1fr;`}
`;

const BlogPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: max-content;
  grid-column-gap: 0.5em;
  grid-row-gap: 1em;

  ${media.mobile`grid-template-columns: 1fr;`}
`;

export const Template = ({
  title,
  description,
  ogImage,
  details,
  descriptions,
  category,
  subcategories,
  firstImage,
  images,
  recentProjects,
  blogPosts
}) => {
  return (
    <Layout head={{ title, description, ogImage }}>
      <Heading>{title}</Heading>
      <Container>
        <Categories>
          <Category to={`/projects/${kebabCase(category)}`}>
            {category}
          </Category>
          {subcategories.map((subcategory, i) => (
            <>
              {' - '}
              <InternalLink key={i} to={`/projects/${kebabCase(subcategory)}`}>
                {subcategory}
              </InternalLink>
            </>
          ))}
        </Categories>
        <FirstImage fluid={firstImage.image} alt={firstImage.alt} />
        <Details>
          {details.map(({ attribute, value }, i) => (
            <Detail key={i}>
              <Attribute>{attribute}</Attribute>
              <Value>{value}</Value>
            </Detail>
          ))}
        </Details>

        {images.map(({ image, alt }, i) => (
          <Image key={i} fluid={image} alt={alt} />
        ))}

        {descriptions.map(({ startingRow, content }, i) => (
          <Description key={i} startingRow={startingRow}>
            <DescriptionHeading>About: </DescriptionHeading>
            <DescriptionContent dangerouslySetInnerHTML={{ __html: content }} />
          </Description>
        ))}
      </Container>
      <CTAs />

      <SectionHeading>Recent Projects</SectionHeading>
      <RecentProjects>
        {recentProjects.map((post, i) => (
          <Post key={i} useListView={false} {...post} />
        ))}
      </RecentProjects>

      <SectionHeading>Recent Posts</SectionHeading>
      <BlogPosts>
        {blogPosts.map((post, i) => (
          <Post key={i} useListView={false} {...post} />
        ))}
      </BlogPosts>
    </Layout>
  );
};

export default ({ data: { project, projects, blog } }) => (
  <Template
    {...project.frontmatter}
    ogImage={project.frontmatter.ogImage.childImageSharp.fluid.src}
    firstImage={{
      image: project.frontmatter.images[0].image.childImageSharp.fluid,
      alt: project.frontmatter.images[0].alt
    }}
    images={project.frontmatter.images.slice(1).map(({ image, ...rest }) => ({
      ...rest,
      image: image.childImageSharp.fluid
    }))}
    descriptions={project.frontmatter.descriptions.map((description, i) => ({
      ...description,
      content: project.fields.descriptions[i].content
    }))}
    recentProjects={projects.edges.map(({ node: { frontmatter } }) => ({
      ...frontmatter,
      headerImage: frontmatter.images[0].image.childImageSharp.fluid,
      path: `/projects${frontmatter.path}`
    }))}
    blogPosts={blog.edges.map(({ node: { frontmatter } }) => ({
      ...frontmatter,
      headerImage: frontmatter.headerImage.childImageSharp.fluid,
      path: `/blog${frontmatter.path}`
    }))}
  />
);

export const query = graphql`
  query($id: String!) {
    project: markdownRemark(id: { eq: $id }) {
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
        details {
          attribute
          value
        }
        descriptions {
          startingRow
        }
        category
        subcategories
        images {
          image {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
      }
      fields {
        descriptions {
          content
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "project-page" } } }
      sort: { fields: [frontmatter___date], order: [DESC] }
      limit: 6
    ) {
      edges {
        node {
          frontmatter {
            images {
              image {
                childImageSharp {
                  fluid(maxWidth: 525) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            title
            path
          }
        }
      }
    }
    blog: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      sort: { fields: [frontmatter___date], order: [DESC] }
      limit: 6
    ) {
      edges {
        node {
          frontmatter {
            headerImage {
              childImageSharp {
                fluid(maxWidth: 525) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            subtitle
            author
            path
          }
        }
      }
    }
  }
`;
