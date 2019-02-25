import React from 'react';
import styled from 'styled-components';

import SocialIcons from './SocialIcons';

const Footer = styled.footer`
  padding: 20px 25px 7px;
  background: hsl(22, 100%, 58%);

  display: grid;
  grid-template-columns: 1fr 35% 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    'SupportUs Logo SocialIconsContainer'
    'DevCredit Logo SocialIconsContainer'
    'Copyright Copyright Copyright';

  font-family: 'Enriqueta', serif;
`;

const SupportUs = styled.div`
  grid-area: SupportUs;
  font-weight: 700;
  align-self: end;
  margin-bottom: 5px;
`;

const DevCredit = styled.div`
  grid-area: DevCredit;
`;

const Logo = styled.div`
  grid-area: Logo;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 2.75rem;
`;

const LogoImg = styled.img`
  display: block;
  height: 70px;
  margin-right: -10px;
`;

const SocialIconsContainer = styled.div`
  grid-area: SocialIconsContainer;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > * {
    margin-right: 15px;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const Copyright = styled.div`
  grid-area: Copyright;
  text-align: center;
  font-family: sans-serif;
  font-size: 0.85rem;
`;

export default props => (
  <Footer {...props}>
    <SupportUs>Support our work with Patreon</SupportUs>
    <DevCredit>website created by kbaig</DevCredit>
    <Logo>
      <LogoImg src='./assets/logo.svg' alt='' />
      Golob Art
    </Logo>
    <SocialIconsContainer>
      <SocialIcons size='2x' />
    </SocialIconsContainer>
    <Copyright>&copy; {new Date().getFullYear()}</Copyright>
  </Footer>
);
