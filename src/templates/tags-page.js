import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import _ from 'lodash';

import Layout from '../components/Layout';
import InternalLink from '../components/InternalLink';

const Heading = styled.h1``;

const Tags = styled.ul``;

const Tag = styled.li``;

export const Template = ({ tags }) => (
  <Layout>
    <Heading>Tags</Heading>
    {tags.length ? (
      <Tags>
        {tags.map(({ fieldValue, totalCount }) => (
          <Tag key={fieldValue}>
            <InternalLink to={`/tags/${_.kebabCase(fieldValue)}`}>
              {fieldValue} ({totalCount})
            </InternalLink>
          </Tag>
        ))}
      </Tags>
    ) : (
      'No tags currently available.'
    )}
  </Layout>
);

export default ({ data }) => <Template tags={data.tags.group} />;

export const query = graphql`
  query($id: String!) {
    description: markdownRemark(id: { eq: $id }) {
      id
    }
    tags: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
