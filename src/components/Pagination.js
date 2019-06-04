import React from 'react';
import styled from 'styled-components';

import InternalLink from './InternalLink';

const Container = styled.div`
  margin: 1em 0;
  display: flex;
  font-family: ${props => props.theme.fonts.serif};
  font-size: 1.5em;
`;

const Link = styled(InternalLink)`
  margin-right: 0.2em;
  :last-of-type {
    margin-right: 0;
  }

  border: ${props => props.theme.misc.frameBorder};
  background: url('/assets/light-marble.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding: 2px 4px;

  font-weight: ${props => (props.isCurrent ? 600 : 400)};
`;

export default ({ numPages, currentPage, prefix, ...rest }) => (
  <Container {...rest}>
    {/* back to first */}
    <Link to={`/${prefix}`}>|&lt;</Link>

    {/* back one */}
    {currentPage > 1 && (
      <Link
        to={currentPage === 2 ? `/${prefix}` : `/${prefix}/${currentPage - 1}`}
      >
        &lt;
      </Link>
    )}

    {Array.from({ length: numPages }).map((_, i) => (
      <Link
        key={i}
        isCurrent={i === currentPage - 1}
        to={i === 0 ? `/${prefix}` : `/${prefix}/${i + 1}`}
      >
        {i + 1}
      </Link>
    ))}

    {/* forward one */}
    {currentPage < numPages && (
      <Link to={`/${prefix}/${currentPage + 1}`}>&gt;</Link>
    )}

    {/* skip to last */}
    <Link to={`/${prefix}/${numPages}`}>&gt;|</Link>
  </Container>
);
