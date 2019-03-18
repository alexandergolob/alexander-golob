import React from 'react';
import styled from 'styled-components';

import FrameBox from './FrameBox';

const Container = styled(FrameBox)`
  padding: 20px;
  margin-bottom: 20px;
`;

const Subtitle = styled.div`
  margin-bottom: 15px;
  font-weight: 900;
`;

const AuthorAndDate = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
`;

const Date = styled.div`
  margin-right: 20px;
`;

const Content = styled.div``;

export default ({ subtitle, author, date, content, ...rest }) => (
  <Container {...rest}>
    <Subtitle>{subtitle}</Subtitle>
    <AuthorAndDate>
      <div>by: {author}</div>
      <Date>{date}</Date>
    </AuthorAndDate>
    <Content>{content}</Content>
  </Container>
);
