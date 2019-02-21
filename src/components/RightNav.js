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
      <NavListItem>Contact</NavListItem>
    </NavList>
  </nav>
);
