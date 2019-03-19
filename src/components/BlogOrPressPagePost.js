import React from 'react';
import styled from 'styled-components';

const PostContainer = styled.div`
  border: 1px solid black;
`;

const PostImage = styled.div`
  height: 250px;
  background: green;
`;

const PostDescriptionContainer = styled.div`
  background: hsl(0, 0%, 93%);
  padding: 10px 20px;
`;

const PostTitle = styled.h4``;

export default ({ title, subtitle, author, ...rest }) => (
  <div {...rest}>
    <PostContainer>
      <PostImage />
      <PostDescriptionContainer>
        <PostTitle>{title}</PostTitle>
        {subtitle && <div>{subtitle}</div>}
        <div>- {author}</div>
      </PostDescriptionContainer>
    </PostContainer>
  </div>
);
