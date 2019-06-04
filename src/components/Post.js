import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';

import { media } from './ThemeProvider';
import InternalLink from './InternalLink';

const Container = styled(InternalLink)`
  display: block;
  font-family: ${props => props.theme.fonts.serif};
`;

const PostImage = styled(Image)`
  height: 250px;
  border: 1px solid ${props => props.theme.colors.dark};
  border-bottom: none;

  ${media.mobile`height: 200px;`}
`;

const Description = styled.div`
  border: 1px solid ${props => props.theme.colors.dark};
  border-top: none;
  background: ${props => props.theme.colors.offLight};
  padding: 10px 15px;
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

export default ({ path, headerImage, title, subtitle, author, ...rest }) => (
  <Container to={path} {...rest}>
    <PostImage fluid={headerImage} />
    <Description>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <Author>- {author}</Author>
    </Description>
  </Container>
);
