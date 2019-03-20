import React from 'react';
import styled from 'styled-components';
import { Link as UnstyledLink } from 'gatsby';

import FrameBox from './FrameBox';

const Link = styled(UnstyledLink)`
  color: inherit;
  text-decoration: none;
`;

const Container = styled(FrameBox)`
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const LogoImg = styled.img`
  height: 8rem;
`;

const HomeLogoText = styled.div`
  font-family: 'Enriqueta';
  font-size: 1.75rem;
  text-align: center;
`;

export default ({ src, text, ...rest }) => (
  <Link to='/' {...rest}>
    <Container>
      <LogoImg src={src} alt='logo' />
      <HomeLogoText>{text}</HomeLogoText>
    </Container>
  </Link>
);
