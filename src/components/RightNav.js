import React from 'react';
import styled from 'styled-components';

import FrameBox from './FrameBox';
import SocialIcons from './SocialIcons';

const NavList = styled.ul`
  display: inline-flex;
  flex-direction: column;
`;

const UnstyledNavListItem = props => <FrameBox as='li' {...props} />;

const NavListItem = styled(UnstyledNavListItem)`
  padding: 10px;
  text-align: center;

  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Contact = styled(NavListItem)`
  margin-top: 20px;
  padding: 20px 10px;
  background: hsl(120, 54%, 52%);
`;

export default props => (
  <nav {...props}>
    <NavList>
      <NavListItem>
        <SocialIcons />
      </NavListItem>
      <NavListItem>Portfolio</NavListItem>
      <NavListItem>About</NavListItem>
      <NavListItem>Press</NavListItem>
      <Contact>Contact</Contact>
    </NavList>
  </nav>
);
