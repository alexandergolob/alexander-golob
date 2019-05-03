import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  padding: 8px 15px;
  display: inline-flex;
  align-items: center;
  font-size: 0.85em;
`;

const Statement = styled.div`
  margin-right: 5px;
  font-weight: 700;
`;

const Input = styled.input`
  padding: 4px 8px;
  margin-right: 0.5em;
  border: 1px solid #999;
  font-size: inherit;

  &::placeholder {
    text-align: right;
  }
`;

const Button = styled.button`
  cursor: pointer;
  border: 1px solid #999;
  background-image: url('/assets/light-marble.svg');
  background-repeat: none;
  background-size: cover;
  background-position: center center;
  padding: 4px 8px;
  font-size: inherit;
  font-weight: 700;
`;

export default ({ ...rest }) => (
  <Container {...rest}>
    <Statement>Get our updates</Statement>
    <Input placeholder='email' />
    <Button>Submit</Button>
  </Container>
);
