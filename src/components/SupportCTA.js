import React from 'react';
import styled, { css } from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import { media } from './ThemeProvider';
import UnstyledInternalLink from './InternalLink';
import UnstyledExternalLink from './ExternalLink';

import LightMarble from './LightMarble';
import GreenMarble from './GreenMarble';

const Container = styled.div`
  position: relative;
  border: ${props => props.theme.misc.frameBorder};
  padding: 10px 15px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  ${media.mobile`flex-direction: column;`}
`;

const Statement = styled.div`
  margin-right: 5px;

  font-weight: 700;
  ${media.mobile`margin-right: 0; text-align: center;`}
`;

const linkStyles = css`
  position: relative;
  padding: 2px 10px;
  text-align: center;
  color: ${props => props.theme.colors.light};

  ${media.mobile`margin-top: 0.5em; width: 100%;`}
`;

const InternalLink = styled(UnstyledInternalLink)`
  ${linkStyles};
`;

const ExternalLink = styled(UnstyledExternalLink)`
  ${linkStyles};
`;

const query = graphql`
  {
    file(
      sourceInstanceName: { eq: "shared-components" }
      relativePath: { eq: "support-cta.md" }
    ) {
      childMarkdownRemark {
        frontmatter {
          outerContent
          link {
            content
            external
            path
          }
        }
      }
    }
  }
`;

export default props => {
  const {
    outerContent,
    link: { content, external, path }
  } = useStaticQuery(query).file.childMarkdownRemark.frontmatter;

  return (
    <Container {...props}>
      <LightMarble />
      <Statement>{outerContent}</Statement>
      {external ? (
        <ExternalLink href={path}>
          <GreenMarble />
          {content}
        </ExternalLink>
      ) : (
        <InternalLink to={path}>
          <GreenMarble />
          {content}
        </InternalLink>
      )}
    </Container>
  );
};
