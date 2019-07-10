import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import { media } from '../components/ThemeProvider';
import Layout from '../components/Layout';
import InternalLink from '../components/InternalLink';
import UnstyledPosts from '../components/Posts';

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

const LinkContainer = styled.div`
  margin: 1em 0;
  display: flex;
  justify-content: flex-end;
`;

const TagsLink = styled(InternalLink)`
  min-width: 200px;
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  padding: 5px 10px;
  text-align: center;
  font-family: ${props => props.theme.fonts.serif};
  font-weight: 600;

  ${media.mobile`min-width: auto; width: 100%;`}
`;

const Posts = styled(UnstyledPosts)``;

export const Template = ({ tag, posts }) => (
  <Layout>
    <Heading>Tags - {tag}</Heading>
    <LinkContainer>
      <TagsLink to='/tags'>All tags</TagsLink>
    </LinkContainer>
    <Posts posts={posts} isFirstPage={false} />
  </Layout>
);

export default ({ pageContext: { tag }, data: { posts } }) => (
  <Template
    tag={tag}
    posts={posts.edges.map(({ node: { fields, frontmatter } }) => ({
      ...frontmatter,
      path: fields.slug,
      headerImage: frontmatter.headerImage.childImageSharp.fluid
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
          }
        }
      }
    }
  }
`;
