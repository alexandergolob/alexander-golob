import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import InternalLink from '../components/InternalLink';

const Tag = styled.h1`
  margin-bottom: 1em;
  font-size: ${props => props.theme.fonts.serif};
  font-size: 2em;
`;

const Posts = styled.ul`
  list-style-type: none;
`;

const Post = styled.li`
  margin-bottom: 0.5em;
  :last-of-type {
    margin-bottom: 0;
  }
`;

const PostLink = styled(InternalLink)`
  :hover {
    text-decoration: underline;
  }
`;

export const Template = ({ tag, posts }) => (
  <Layout>
    <Tag>{tag}:</Tag>
    <Posts>
      {posts.map(({ title, path }, i) => (
        <Post key={i}>
          <PostLink to={path}>{title}</PostLink>
        </Post>
      ))}
    </Posts>
  </Layout>
);

export default ({ pageContext: { tag }, data: { posts } }) => (
  <Template
    tag={tag}
    posts={posts.edges.map(({ node }) => ({
      ...node.frontmatter,
      path: node.fields.slug
    }))}
  />
);

export const query = graphql`
  query($tag: String) {
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { templateKey: { eq: "blog-post" }, tags: { in: [$tag] } }
      }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
