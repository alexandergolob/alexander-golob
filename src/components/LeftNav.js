import React from 'react';
import styled from 'styled-components';

import FrameBox from './FrameBox';

const UnstyledNav = props => <FrameBox as='nav' {...props} />;

const Nav = styled(UnstyledNav)`
  padding: 15px;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const NavItemTitle = styled.div`
  margin-bottom: 5px;
`;

const SubList = styled.ul`
  list-style-type: none;
  padding-left: 10px;
`;

const SubListItem = styled.li`
  margin-bottom: 5px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const UnstyledNavItem = ({ title, subitems, ...rest }) => (
  <li {...rest}>
    <NavItemTitle>{title}</NavItemTitle>
    <SubList>
      {subitems.map(subitem => (
        <SubListItem key={subitem}>{subitem}</SubListItem>
      ))}
    </SubList>
  </li>
);

const NavItem = styled(UnstyledNavItem)`
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export default () => (
  <Nav>
    <NavList>
      <NavItem
        title='Art'
        subitems={['personal', 'commissioned', 'public art']}
      />
      <NavItem title='Engagements' subitems={['speaking', 'events']} />
      <NavItem title='Consulting' subitems={['government', 'private']} />
      <NavItem
        title='Special Projects'
        subitems={[
          'post-cubicle gallery',
          'through the looking glass',
          'venezia'
        ]}
      />
    </NavList>
  </Nav>
);
