import React from 'react';
import styled from 'styled-components';

import { media } from './ThemeProvider';
import InternalLink from './InternalLink';

import LightMarble from '../components/LightMarble';

const Container = styled.div`
  display: flex;
  font-family: ${props => props.theme.fonts.serif};
  font-size: 1.15em;
`;

const UnstyledLink = ({ isCurrent, hideOnSmallScreens, ...rest }) => (
  <InternalLink {...rest} />
);

const Link = styled(({ children, ...rest }) => (
  <UnstyledLink {...rest}>
    <LightMarble />
    {children}
  </UnstyledLink>
))`
  position: relative;
  margin-right: 0.2em;
  :last-of-type {
    margin-right: 0;
  }

  border: ${props => props.theme.misc.frameBorder};
  padding: 2px 4px;

  font-weight: ${props => (props.isCurrent ? 600 : 400)};

  ${media.mobile`
    padding: 3px;
    display: ${props => (props.hideOnSmallScreens ? 'none' : 'block')};
  `}
`;

const lookaroundLimit = 2;

export default ({ numPages, currentPage, prefix, ...rest }) => (
  <Container {...rest}>
    {/* back to first and back one */}
    {currentPage > 1 && (
      <>
        <Link to={`/${prefix}`}>|&lt;</Link>
        <Link
          hideOnSmallScreens
          to={
            currentPage - 1 === 1
              ? `/${prefix}`
              : `/${prefix}/${currentPage - 1}`
          }
        >
          &lt;
        </Link>
      </>
    )}

    {/* back to first */}
    {currentPage - lookaroundLimit > 1 && (
      <Link hideOnSmallScreens to={`/${prefix}`}>
        1
      </Link>
    )}

    {/* skip backwards */}
    {currentPage - lookaroundLimit - 1 > 1 && (
      <Link to={`/${prefix}/${currentPage - lookaroundLimit - 1}`}>...</Link>
    )}

    {/* current page, up to {lookaround} behind and forward */}
    {Array.from({ length: lookaroundLimit * 2 + 1 }).map((_, i) => {
      const current = currentPage - lookaroundLimit + i;

      return current > 0 && current <= numPages ? (
        <Link
          key={i}
          isCurrent={current === currentPage}
          to={current === 1 ? `/${prefix}` : `/${prefix}/${current}`}
        >
          {current}
        </Link>
      ) : null;
    })}

    {/* skip forward  */}
    {currentPage + lookaroundLimit + 1 < numPages && (
      <Link to={`/${prefix}/${currentPage + lookaroundLimit + 1}`}>...</Link>
    )}

    {/* forward to last */}
    {currentPage + lookaroundLimit < numPages && (
      <Link hideOnSmallScreens to={`/${prefix}/${numPages}`}>
        {numPages}
      </Link>
    )}

    {/* forward one and skip to last */}
    {currentPage < numPages && (
      <>
        <Link hideOnSmallScreens to={`/${prefix}/${currentPage + 1}`}>
          &gt;
        </Link>
        <Link to={`/${prefix}/${numPages}`}>&gt;|</Link>
      </>
    )}
  </Container>
);
