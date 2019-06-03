import React from 'react';
import styled from 'styled-components';

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
`;

const Separator = styled.span.attrs({ children: '//' })`
  margin: 0 0.4em;
`;

export default ({ tags, ...rest }) => (
  <Container>
    <Tags {...rest}>
      {tags
        .map(({ path, content }, i) =>
          i < tags.length - 1 ? (
            [
              <InternalLink key={i} to={path}>
                {content}
              </InternalLink>,
              <Separator key={i + 0.5} />
            ]
          ) : (
            <InternalLink key={i} to={path}>
              {content}
            </InternalLink>
          )
        )
        .flat()}
    </Tags>
  </Container>
);
