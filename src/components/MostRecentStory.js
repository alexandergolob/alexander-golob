import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  /* background: blue; */
  width: 450px;
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
`;

const Img = styled.div`
  background: green;
  height: 400px;
`;

const Text = styled.div`
  background: hsl(0, 0%, 92%);
  padding: 8px 10px;
`;

const Title = styled.div`
  margin-bottom: 5px;
`;

const Description = styled.div`
  margin-bottom: 5px;
`;

const Author = styled.div``;

export default ({ title, description, author, ...rest }) => (
  <Container {...rest}>
    <Img />
    <Text>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Author>- {author}</Author>
    </Text>
  </Container>
);
