import React from 'react';
import styled, { css } from 'styled-components';

import { media } from './ThemeProvider';
import UnstyledInternalLink from './InternalLink';
import UnstyledExternalLink from './ExternalLink';

const linkStyles = css`
  border: ${props => props.theme.misc.frameBorder};
  padding: 0.75em 1.25em;
  background: ${props => props.theme.colors.offLight};
  text-align: center;
  font-size: 1.1em;
  font-weight: 700;

  ${media.tablet`margin: 0.5em 0; font-size: 1em;`}
`;

const InternalLink = styled(UnstyledInternalLink)`
  ${linkStyles};
`;

const ExternalLink = styled(UnstyledExternalLink)`
  ${linkStyles};
`;
const CTA = ({ external, path, content, ...rest }) =>
  external ? (
    <ExternalLink href={path} {...rest}>
      {content}
    </ExternalLink>
  ) : (
    <InternalLink to={path} {...rest}>
      {content}
    </InternalLink>
  );

export default styled(CTA)``;
