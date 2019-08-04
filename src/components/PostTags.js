import React from 'react';
import styled from 'styled-components';

import { media } from './ThemeProvider';
import InternalLink from './InternalLink';

import LightMarble from './LightMarble';

const Container = styled.div``;

const Tags = styled.div`
  position: relative;
  border: ${props => props.theme.misc.frameBorder};
  display: inline-block;
  padding: 8px;
  padding-right: 60px;
  font-family: ${props => props.theme.fonts.serif};
  font-weight: 600;
  font-size: 0.9em;

  ${media.mobile`width: 100%; padding-right: 8px;`}
`;

const Separator = styled.span.attrs({ children: '//' })`
  margin: 0 0.4em;
`;

export default ({ tags, ...rest }) => (
  <Container>
    <Tags {...rest}>
      <LightMarble />
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
