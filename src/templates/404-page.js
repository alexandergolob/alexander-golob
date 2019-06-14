import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const Message = styled.div`
  margin-top: 3em;
  font-size: 2em;
  text-align: center;
  font-family: ${props => props.theme.fonts.serif};
  font-weight: 600;
`;

export const Template = ({ message }) => (
  <Layout>
    <Message>{message}</Message>
  </Layout>
);

export default ({ data }) => <Template {...data.markdownRemark.frontmatter} />;

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        message
      }
    }
  }
`;
