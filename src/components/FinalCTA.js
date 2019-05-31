import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import CTA from './CTA';

const FinalCTA = styled(CTA)`
  padding: 8px 25px;
  background-image: url('/assets/empty-square-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const query = graphql`
  {
    file(
      sourceInstanceName: { eq: "shared-components" }
      relativePath: { eq: "final-cta.md" }
    ) {
      childMarkdownRemark {
        frontmatter {
          external
          content
          path
        }
      }
    }
  }
`;

export default props => {
  const data = useStaticQuery(query);
  return <FinalCTA {...data.file.childMarkdownRemark.frontmatter} {...props} />;
};
