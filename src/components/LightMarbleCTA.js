import React from 'react';
import styled from 'styled-components';

import { media } from './ThemeProvider';

const Container = styled.div`
  border: ${props => props.theme.misc.frameBorder};
  padding: 10px 15px;
  background-image: url('/assets/light-marble.svg');
  background-repeat: none;
  background-size: cover;
  background-position: center center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  ${media.tablet`flex-direction: column;`}
`;

const Statement = styled.div`
  margin-right: 5px;
  font-weight: 700;
  ${media.tablet`margin-right: 0;`}
`;

const Button = styled.button`
  cursor: pointer;
  background-image: url('/assets/empty-square-bg.png');
  background-repeat: none;
  background-size: cover;
  background-position: center center;
  padding: 2px 10px;
  font-size: inherit;
  color: ${props => props.theme.colors.light};

  ${media.tablet`margin-top: 0.5em; width: 100%;`}
`;

export default ({ ...rest }) => (
  <Container {...rest}>
    <Statement>Support our work on patreon</Statement>
    <Button>here</Button>
  </Container>
);
