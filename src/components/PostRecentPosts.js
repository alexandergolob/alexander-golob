import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';

import { media } from './ThemeProvider';
import InternalLink from './InternalLink';

const Container = styled.div`
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-family: ${props => props.theme.fonts.serif};

  ${media.mobile`border: none; background: none;`}
`;

const Heading = styled.div`
  margin-bottom: 0.5em;
  text-align: center;
  font-weight: 700;

  ${media.mobile`display: none;`}
`;

const Posts = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.tablet`flex-direction: row;`}
  ${media.mobile`flex-direction: column;`}
`;

const Post = styled(InternalLink)`
  margin: 0.25em 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 0.85em;

  ${media.tablet`margin: 0; margin-right: 1em; :last-of-type { margin-right: 0; }`}
  ${media.mobile`
    margin: 0;
    margin-bottom: 1em;
    :last-of-type {
      margin-bottom: 0;
    }
    flex-direction: row;
    align-items: center;
  `}
`;

const Thumbnail = styled(Image)`
  height: 85px;

  ${media.mobile`
    margin-right: 0.5em;
    height: 70px;
    width: 70px;
    border: 1px solid ${props => props.theme.colors.dark};
  `}
`;

const Title = styled.div`
  margin: 0.5em 0 0.25em;
  line-height: 1.2em;
  font-size: 0.9em;

  ${media.mobile`
    margin: 0;
    flex: 1;
    background: ${props => props.theme.colors.offLight};
    border: 1px solid ${props => props.theme.colors.dark};
    padding: 5px 10px;
    font-weight: 600;
    min-height: 70px;
    display: flex;
    align-items: center;
  `}
`;

export default ({ heading, posts, ...rest }) => (
  <Container {...rest}>
    <Heading>{heading}</Heading>
    <Posts>
      {posts.map(({ path, title, headerImage }, i) => (
        <Post key={i} to={path}>
          <Thumbnail fluid={headerImage} />
          <Title>{title}</Title>
        </Post>
      ))}
    </Posts>
  </Container>
);
