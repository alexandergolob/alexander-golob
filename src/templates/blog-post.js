import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { graphql } from 'gatsby';
import _ from 'lodash';

import { media } from '../components/ThemeProvider';
import Layout from '../components/Layout';
import RecentPosts from '../components/PostRecentPosts';
import PostTags from '../components/PostTags';
import PostTitle from '../components/PostTitle';
import PostBody from '../components/PostBody';
import PostCTAs from '../components/PostCTAs';
import PostPagination from '../components/PostPagination';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: 20px;
  grid-template-areas:
    'Header RecentStories'
    'Tags Tags'
    'WidthWrapper WidthWrapper';

  ${media.tablet`
    grid-template-columns: 1fr;
    grid-template-areas:
     'Header'
     'Tags'
     'WidthWrapper'
     'RecentStories';
  `}
`;

const Header = styled.header`
  grid-area: Header;

  ${media.tablet`height: 350px;`}
  ${media.mobile`height: 200px;`}
`;

const HeaderImg = styled(Image)`
  height: 100%;

  /* override aspect ratio */
  > div {
    padding-bottom: 0 !important;
  }
`;

const RecentStories = styled(RecentPosts)`
  grid-area: RecentStories;
  width: 200px;

  ${media.tablet`width: 100%;`}
`;

const Tags = styled(PostTags)`
  grid-area: Tags;
  margin: 0.25em 0;

  ${media.mobile`margin-bottom: 0.5em;`}
`;

const WidthWrapper = styled.div`
  grid-area: WidthWrapper;
  width: 85%;
  ${media.laptop`width: 100%;`}
`;

const Title = styled(PostTitle)``;

const Body = styled(PostBody)`
  margin: 1em 0;

  ${media.mobile`margin-top: 0.5em;`}
`;

const CTAs = styled(PostCTAs)`
  margin-bottom: 1em;
`;

const Pagination = styled(PostPagination)`
  ${media.tablet`margin-bottom: 1em;`}
`;

export const Template = ({
  title,
  description,
  ogImage,
  headerImage,
  recentStories,
  tags,
  subtitle,
  date,
  author,
  body,
  pagination
}) => (
  <Layout head={{ title, description, ogImage, ogType: 'blog' }}>
    <Wrapper>
      <Header>
        <HeaderImg alt='' fluid={headerImage} />
      </Header>
      <RecentStories heading='Recent Stories' posts={recentStories} />
      <Tags tags={tags} />
      <WidthWrapper>
        <Title>{title}</Title>
        <Body subtitle={subtitle} date={date} author={author} content={body} />
        <CTAs />
        <Pagination {...pagination} />
      </WidthWrapper>
    </Wrapper>
  </Layout>
);

export default ({ data: { currentPost, recentStories }, pageContext }) => (
  <Template
    body={currentPost.html}
    {...currentPost.frontmatter}
    ogImage={currentPost.frontmatter.ogImage.childImageSharp.fluid.src}
    headerImage={currentPost.frontmatter.headerImage.childImageSharp.fluid}
    recentStories={recentStories.edges.map(({ node: { frontmatter } }) => ({
      ...frontmatter,
      headerImage: frontmatter.headerImage.childImageSharp.fluid,
      path: `/blog${frontmatter.path}`
    }))}
    tags={[
      { path: '/blog', content: 'Blog' },
      ...currentPost.frontmatter.tags.map(tag => ({
        content: tag,
        path: `/tags/${_.kebabCase(tag)}`
      }))
    ]}
    pagination={pageContext.pagination}
  />
);

export const query = graphql`
  query($id: String!) {
    currentPost: markdownRemark(id: { eq: $id }) {
      html
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
        date(formatString: "MMMM D, YYYY")
        headerImage {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        subtitle
        author
        tags
      }
    }
    recentStories: allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { eq: "blog-post" } }
        id: { ne: $id }
      }
      sort: { fields: [frontmatter___date], order: [DESC] }
      limit: 3
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            headerImage {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
