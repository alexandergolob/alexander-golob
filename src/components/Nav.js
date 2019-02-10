import React from 'react';
import styled from 'styled-components';

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  background: #ccc;
`;

const NavListItem = styled.ul`
  margin-right: 5px;
  &:last-of-type {
    margin-right: 0;
  }
`;

export default () => (
  <nav>
    <NavList>
      <NavListItem>Art</NavListItem>
      <NavListItem>Services</NavListItem>
      <NavListItem>Post-Cubicle Gallery</NavListItem>
      <NavListItem>Press</NavListItem>
      <NavListItem>About</NavListItem>
    </NavList>
  </nav>
);
