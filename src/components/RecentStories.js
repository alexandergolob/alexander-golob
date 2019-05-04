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
`;

const Heading = styled.div`
  margin-bottom: 0.5em;
  text-align: center;
  font-weight: 700;
`;

const StoriesContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.tablet`flex-direction: row;`}
  ${media.mobile`flex-direction: column;`}
`;

const Story = styled(InternalLink)`
  font-size: 0.85em;
  margin: 0.2em 0;

  ${media.tablet`margin: 0 0.5em;`}
  ${media.mobile`margin: 0.5em 0;`}
`;

const StoryThumbnail = styled(Image)`
  height: 85px;
  ${media.tablet`height: 100px;`}
  ${media.mobile`height: 120px;`}
`;

const StoryTitle = styled.div`
  margin: 0.5em 0 0.25em;
`;

const Author = styled.div`
  font-style: italic;
  font-size: 0.8em;
`;

export default ({ posts, ...rest }) => (
  <Container {...rest}>
    <Heading>Recent Stories</Heading>
    <StoriesContainer>
      {posts.map(({ path, headerImage, title, author }, i) => (
        <Story key={i} to={`/blog${path}`}>
          <StoryThumbnail fluid={headerImage.childImageSharp.fluid} />
          <StoryTitle>{title}</StoryTitle>
          <Author>{author}</Author>
        </Story>
      ))}
    </StoriesContainer>
  </Container>
);
