import React from 'react';
import styled from 'styled-components';

import Post from './BlogOrPressPagePost';

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: max-content;
  grid-column-gap: 10px;
  grid-row-gap: 20px;
`;

export default ({ posts, ...rest }) => (
  <PostsContainer {...rest}>
    {posts.map((post, i) => (
      <Post key={i} {...post} />
    ))}
  </PostsContainer>
);
