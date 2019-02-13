import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import SocialIcons from './SocialIcons';

import logo from '../images/logo.png';

const Nav = styled.nav`
  padding: 40px 80px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomeButton = styled(Link)`
  display: flex;
  align-items: center;
  font-family: 'Domine', serif;
  font-weight: 700;
  font-size: 2rem;
  color: inherit;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }

  transition: opacity 300ms ease-in-out;
`;

const Logo = styled.img`
  margin-right: 10px;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  font-family: 'Special Elite', cursive;
  font-size: 1.125rem;
`;

const NavListItem = styled.li`
  margin-right: 25px;
  &:last-of-type {
    margin-right: 0;
  }
  /* temporary while the other nav links are not actually links */
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default () => (
  <Nav>
    <HomeButton to='/'>
      <Logo src={logo} />
      Golob Art
    </HomeButton>
    <NavList>
      <NavListItem>Art</NavListItem>
      <NavListItem>Services</NavListItem>
      <NavListItem>Post-Cubicle Gallery</NavListItem>
      <NavListItem>Press</NavListItem>
      <NavListItem>About</NavListItem>
      <NavListItem>
        <Link to='/contact'>Contact</Link>
      </NavListItem>
    </NavList>
    <SocialIcons />
  </Nav>
);
