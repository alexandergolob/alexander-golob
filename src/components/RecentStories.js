import React from 'react';
import styled from 'styled-components';

import FrameBox from './FrameBox';

const RecentStories = styled(FrameBox)`
  display: block;
  display: flex;
`;

const Box = styled.div`
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const RecentStoriesHeading = styled.div`
  margin-bottom: 0.5rem;
  text-align: center;
  font-weight: 700;
`;

const StoriesContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: row;
  }

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const Story = styled.div`
  font-size: 0.85rem;

  @media (max-width: 700px) {
    margin-bottom: 0;
    margin-right: 1rem;
    &:last-of-type {
      margin-right: 0;
    }
  }

  @media (max-width: 550px) {
    margin-bottom: 1rem;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const StoryTitle = styled.div``;

const StoryThumbnail = styled.div`
  margin-bottom: 0.2rem;
  background: green;
  height: 80px;
`;

const Author = styled.div`
  font-style: italic;
  font-size: 0.8rem;

  /* @media (max-width: 700px) {
    text-align: right;1
  } */
`;

export default ({ stories, ...rest }) => (
  <RecentStories {...rest}>
    <Box>
      <RecentStoriesHeading>Recent Stories</RecentStoriesHeading>
      <StoriesContainer>
        {stories.map(({ title, author }, i) => (
          <Story key={i}>
            <StoryThumbnail />
            <StoryTitle>{title}</StoryTitle>
            <Author>{author}</Author>
          </Story>
        ))}
      </StoriesContainer>
    </Box>
  </RecentStories>
);
