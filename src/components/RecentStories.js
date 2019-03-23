import React from 'react';
import styled from 'styled-components';

import FrameBox from './FrameBox';

const RecentStories = styled(FrameBox)`
  padding: 10px;
`;

const RecentStoriesHeading = styled.div`
  margin-bottom: 10px;
  text-align: center;
  font-wight: 900;
`;

const Story = styled.div`
  margin-bottom: 15px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const StoryThumbnail = styled.div`
  background: green;
  height: 60px;
  margin-bottom: 5px;
`;

const StoryTitle = styled.div`
  font-size: 0.85rem;
`;

export default ({ stories, ...rest }) => (
  <RecentStories {...rest}>
    <RecentStoriesHeading>Recent Stories</RecentStoriesHeading>
    <div>
      {stories.map(({ title }, i) => (
        <Story key={i}>
          <StoryThumbnail />
          <StoryTitle>{title}</StoryTitle>
        </Story>
      ))}
    </div>
  </RecentStories>
);
