import React from 'react';
import styled from 'styled-components';

import { media } from './ThemeProvider';
import InternalLink from './InternalLink';

const Container = styled.div``;

const Tags = styled.div`
  border: ${props => props.theme.misc.frameBorder};
  display: inline-block;
  background-image: url('/assets/light-marble.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding: 8px;
  padding-right: 60px;
  font-family: ${props => props.theme.fonts.serif};
  font-weight: 600;
  font-size: 0.9em;

  ${media.mobile`padding-right: 8px;`}
`;

const Separator = styled.span.attrs({ children: '//' })`
  margin: 0 0.4em;
`;

export default ({ tags, ...rest }) => (
  <Container>
    <Tags {...rest}>
      {tags.reduce((acc, { path, content }, i) => {
        if (i < tags.length - 1) {
          return [
            ...acc,
            <InternalLink key={i} to={path}>
              {content}
            </InternalLink>,
            <Separator key={i + 0.5} />
          ];
        } else {
          return [
            ...acc,
            <InternalLink key={i} to={path}>
              {content}
            </InternalLink>
          ];
        }
      }, [])}
    </Tags>
  </Container>
);
