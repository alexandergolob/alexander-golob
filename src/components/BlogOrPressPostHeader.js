import React from 'react';
import styled from 'styled-components';

import FrameBox from './FrameBox';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const HeaderImg = styled.div`
  margin-right: 20px;
  flex-grow: 1;
  background: green;
`;

const RecentStories = styled(FrameBox)`
  width: 15%;
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
  <Container {...rest}>
    <HeaderImg />
    <RecentStories>
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
  </Container>
);
