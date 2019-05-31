import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Header from '../components/PageHeader';
import UnstyledFeaturedPost from '../components/FeaturedPost';
// import Posts from '../components/BlogOrPressPagePosts';
// import Link from '../components/Link';

// const LinksContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 20px;
// `;

// const LinkContainer = styled(Link)`
//   margin-right: 25px;
//   &:last-of-type {
//     margin-right: 0;
//   }
// `;

// const LinkBox = styled(FrameBox)`
//   padding: 10px 0;
//   width: 200px;
//   text-align: center;
//   font-weight: 900;
// `;

const FeaturedPost = styled(UnstyledFeaturedPost)`
  margin: 1.5em 0;
`;

export const BlogPageTemplate = ({ heading, links, latestPost }) => (
  <Layout>
    <Header heading={heading} pageLinks={links} />
    <FeaturedPost
      {...latestPost}
      image={latestPost.headerImage.childImageSharp.fluid}
      path={`/blog${latestPost.path}`}
    />

    {/* <Posts posts={posts} /> */}
  </Layout>
);

export default ({ data }) => (
  <BlogPageTemplate
    {...data.markdownRemark.frontmatter}
    latestPost={{
      ...data.latestPost.edges[0].node.frontmatter,
      content: data.latestPost.edges[0].node.excerpt
    }}
  />
);

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
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
          excerpt(pruneLength: 400)
          html
          frontmatter {
            date(formatString: "MMMM Do, YYYY")
            headerImage {
              childImageSharp {
                fluid(maxWidth: 550) {
                  ...GatsbyImageSharpFluid_noBase64
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
