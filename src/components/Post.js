import React from 'react';
import styled, { css } from 'styled-components';
import Image from 'gatsby-image';

import { media } from './ThemeProvider';
import InternalLink from './InternalLink';

const withStrippedUseListView = Component => ({ useListView, ...rest }) => (
  <Component {...rest} />
);

const Link = withStrippedUseListView(InternalLink);

const Container = styled(Link)`
  display: block;
  font-family: ${props => props.theme.fonts.serif};

  ${media.mobile`
    ${props =>
      props.useListView &&
      css`
        display: flex;
        align-items: center;
      `}
  `}
`;

const PostImage = styled(Image)`
  height: 250px;
  border: 1px solid ${props => props.theme.colors.dark};
  border-bottom: none;

  ${media.mobile`
    height: 200px;

    ${props =>
      props.useListView &&
      css`
        margin-right: 0.5em;
        height: 70px;
        width: 70px;
        border-bottom: 1px solid ${props => props.theme.colors.dark};
      `}
  `}
`;

const Description = styled.div`
  border: 1px solid ${props => props.theme.colors.dark};
  border-top: none;
  background: ${props => props.theme.colors.offLight};
  padding: 10px 15px;

  ${media.mobile`
    ${props =>
      props.useListView &&
      css`
        flex: 1;
        border-top: 1px solid ${props => props.theme.colors.dark};
        padding: 5px 10px;
        font-size: 0.95em;
      `}
  `}
`;

const Title = styled.h4`
  margin-bottom: 0.1em;
  font-weight: 600;
  font-size: 1.15em;

  ${media.mobile`font-size: 1em;`}
`;

const Subtitle = styled.div`
  margin-bottom: 0.15em;

  ${media.mobile`font-size: 0.9em;`}
`;

const Author = styled.div`
  ${media.mobile`font-size: 0.9em;`}
`;

export default ({
  path,
  headerImage,
  title,
  subtitle,
  author,
  useListView,
  ...rest
}) => (
  <Container to={path} {...rest} useListView={useListView}>
    <PostImage fluid={headerImage} useListView={useListView} />
    <Description useListView={useListView}>
      <Title>{title}</Title>
      {subtitle && !useListView && <Subtitle>{subtitle}</Subtitle>}
      <Author>- {author}</Author>
    </Description>
  </Container>
);
