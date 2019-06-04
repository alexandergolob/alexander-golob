import React from 'react';
import styled from 'styled-components';

import { media } from './ThemeProvider';
import Post from './Post';

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: max-content;
  grid-column-gap: 0.5em;
  grid-row-gap: 1em;

  ${media.mobile`grid-template-columns: 1fr;`}
`;

export default ({ posts, ...rest }) => (
  <PostsContainer {...rest}>
    {posts.map((post, i) => (
      <Post key={i} {...post} />
    ))}
  </PostsContainer>
);
