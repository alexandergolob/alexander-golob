import React from 'react';
import styled from 'styled-components';

import FrameBox from './FrameBox';

const Title = styled(FrameBox)`
  display: block;
  padding: 10px;
  text-align: center;
  margin-bottom: 10px;
`;

const Description = styled(FrameBox)`
  display: block;
  padding: 15px;
`;

const Subtitle = styled.h3`
  margin-bottom: 10px;
`;

const AuthorAndDate = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Content = styled.div`
  margin-bottom: 10px;
`;

export default ({ title, subtitle, author, date, content, ...rest }) => (
  <div {...rest}>
    <Title>
      <h2>{title}</h2>
    </Title>
    <Description>
      <Subtitle>{subtitle}</Subtitle>
      <AuthorAndDate>
        <div>by: {author}</div>
        <div>{date}</div>
      </AuthorAndDate>
      <Content>{content}</Content>
      <div>read more >>></div>
    </Description>
  </div>
);
