import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import { media } from '../components/ThemeProvider';
import Layout from '../components/Layout';
import Header from '../components/PageHeader';
import UnstyledFeaturedPost from '../components/FeaturedPost';
import UnstyledPosts from '../components/Posts';
import UnstyledPagination from '../components/Pagination';

const FeaturedPost = styled(UnstyledFeaturedPost)`
  margin-top: 1.5em;
`;

const Posts = styled(UnstyledPosts)`
  margin-top: 1.5em;
`;

const Pagination = styled(UnstyledPagination)`
  margin: 1em 0;
  display: flex;
  justify-content: flex-end;

  ${media.mobile`
    font-size: 1em;
    justify-content: center;
  `}
`;

export const BlogPageTemplate = ({
  title,
  description,
  ogImage,
  heading,
  links,
  latestPost,
  posts,
  currentPage,
  numPages
}) => (
  <Layout head={{ title, description, ogImage }}>
    <Header heading={heading} pageLinks={links} />
    {currentPage === 1 && (
      <FeaturedPost
        {...latestPost}
        image={latestPost.headerImage.childImageSharp.fluid}
        path={`/blog${latestPost.path}`}
      />
    )}
    <Posts posts={posts} isFirstPage={currentPage === 1} />
    <Pagination numPages={numPages} currentPage={currentPage} prefix='blog' />
  </Layout>
);

export default ({ data, pageContext }) => (
  <BlogPageTemplate
    {...data.markdownRemark.frontmatter}
    ogImage={
      data.markdownRemark.frontmatter.ogImage &&
      data.markdownRemark.frontmatter.ogImage.childImageSharp.fluid.src
    }
    latestPost={{
      ...data.latestPost.edges[0].node.frontmatter,
      content: data.latestPost.edges[0].node.excerpt
    }}
    posts={data.posts.edges.map(({ node: { frontmatter } }) => ({
      ...frontmatter,
      headerImage: frontmatter.headerImage.childImageSharp.fluid,
      path: `/blog${frontmatter.path}`
    }))}
    currentPage={pageContext.currentPage}
    numPages={pageContext.numPages}
  />
);

export const query = graphql`
  query($id: String!, $limit: Int!, $skip: Int!) {
    markdownRemark(id: { eq: $id }) {
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
        links {
          content
          path
        }
      }
    }
    latestPost: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      sort: { fields: [frontmatter___date], order: [DESC] }
      limit: 1
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          frontmatter {
            date(formatString: "MMMM Do, YYYY")
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
    posts: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      sort: { fields: [frontmatter___date], order: [DESC] }
      skip: $skip
      limit: $limit
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
