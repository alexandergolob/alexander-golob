import React from 'react';
import styled from 'styled-components';

import { media } from './ThemeProvider';
import Heading from './PageHeading';
import InternalLink from './InternalLink';

const Header = styled.header`
  display: grid;
  grid-template-rows: auto auto;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: ${props => props.theme.fonts.serif};
  font-weight: 700;
  font-size: 1.15em;

  ${media.tablet`font-size: 1em;`}
  ${media.mobile`font-size: 0.75em;`}
`;

const Link = styled(InternalLink)`
  min-width: 150px;
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  padding: 5px 10px;
  margin-right: 0.5em;
  :last-of-type {
    margin-right: 0;
  }

  ${media.tablet`flex: 1; min-width: auto;`}
`;

export default ({ heading, pageLinks, ...rest }) => (
  <Header {...rest}>
    <Heading>{heading}</Heading>
    <Links>
      {pageLinks.map(({ content, path }, i) => (
        <Link key={i} to={path}>
          {content}
        </Link>
      ))}
    </Links>
  </Header>
);
