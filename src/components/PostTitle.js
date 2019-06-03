import React from 'react';
import styled from 'styled-components';

import { media } from './ThemeProvider';
import PostShareIcons from './PostShareIcons';

const Container = styled.div`
  border: ${props => props.theme.misc.frameBorder};
  background-image: url('/assets/light-marble.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding: 10px 20px 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5em;

  ${media.tablet`font-size: 1.25em;`}
  ${media.mobile`padding: 10px; font-size: 1em;`}
`;

const Heading = styled.h1`
  margin-right: 20px;
  font-family: ${props => props.theme.fonts.serif};
  font-weight: 900;
  font-size: 1em;
`;

const ShareIcons = styled(PostShareIcons)`
  ${media.mobile`display: none;`}
`;

export default ({ children, ...rest }) => (
  <Container {...rest}>
    <Heading>{children}</Heading>
    <ShareIcons />
  </Container>
);
