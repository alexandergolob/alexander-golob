import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import CTA from './CTA';

import GreenMarble from './GreenMarble';

const FinalCTA = styled(CTA)`
  padding: 8px 25px;
  background: none;
  position: relative;
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

export default ({ content, ...rest }) => {
  const data = useStaticQuery(query);
  return (
    <FinalCTA
      {...data.file.childMarkdownRemark.frontmatter}
      content={
        <>
          <GreenMarble />
          {data.file.childMarkdownRemark.frontmatter.content}
        </>
      }
      {...rest}
    />
  );
};
