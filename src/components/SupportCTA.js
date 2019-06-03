import React from 'react';
import styled, { css } from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import { media } from './ThemeProvider';
import UnstyledInternalLink from './InternalLink';
import UnstyledExternalLink from './ExternalLink';

const Container = styled.div`
  border: ${props => props.theme.misc.frameBorder};
  padding: 10px 15px;
  background-image: url('/assets/light-marble.svg');
  background-repeat: none;
  background-size: cover;
  background-position: center center;
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
  background-image: url('/assets/empty-square-bg.png');
  background-repeat: none;
  background-size: cover;
  background-position: center center;
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
      <Statement>{outerContent}</Statement>
      {external ? (
        <ExternalLink href={path}>{content}</ExternalLink>
      ) : (
        <InternalLink to={path}>{content}</InternalLink>
      )}
    </Container>
  );
};
