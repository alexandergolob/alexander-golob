import React from 'react';
import styled from 'styled-components';

import FrameBox from './FrameBox';
import SocialIcons from './SocialIcons';

const LogoImg = styled.img`
  height: 130px;
`;

const UnstyledSecondaryLogo = ({ src, ...rest }) => (
  <FrameBox {...rest}>
    <LogoImg src={src} alt='logo' />
  </FrameBox>
);

const SecondaryLogo = styled(UnstyledSecondaryLogo)`
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const UnstyledNavListItem = props => <FrameBox as='li' {...props} />;

const NavListItem = styled(UnstyledNavListItem)`
  padding: 10px;
  text-align: center;
  font-family: 'Enriqueta', serif;
  font-weight: 700;

  margin-bottom: 15px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const SocialIconsContainer = styled(NavListItem)`
  display: flex;
  justify-content: space-around;
`;

const Contact = styled(NavListItem)`
  margin-top: 15px;
  padding: 20px 10px;

  background: url('./assets/contact-button-bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;

  color: hsl(148, 93%, 5%);
`;

const EmptyMarbleSquare = styled(FrameBox)`
  margin-top: 15px;
  background: url('./assets/empty-square-bg.png'), hsl(148, 93%, 5%);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  height: 120px;
`;

export default ({ secondary_nav_logo, ...rest }) => (
  <div {...rest}>
    {/* <SecondaryLogo src={secondary_nav_logo} /> */}
    <SecondaryLogo src={'./assets/logo.svg'} />
    <nav>
      <NavList>
        <SocialIconsContainer>
          <SocialIcons size='lg' style={{}} />
        </SocialIconsContainer>
        <NavListItem>Portfolio</NavListItem>
        <NavListItem>About</NavListItem>
        <NavListItem>Press</NavListItem>
        <Contact>Contact</Contact>
      </NavList>
    </nav>
    <EmptyMarbleSquare />
  </div>
);
