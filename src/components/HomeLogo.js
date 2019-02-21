import React from 'react';
import styled from 'styled-components';

import FrameBox from './FrameBox';

const Container = styled(FrameBox)`
  width: 150px;
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 130px;
`;

const HomeLogoText = styled.div`
  margin-top: -10px;
  font-family: 'Enriqueta';
  font-size: 1.75rem;
  text-align: center;
`;

export default props => (
  <Container {...props}>
    <LogoImg src='/assets/logo.svg' alt='logo' />
    <HomeLogoText>Golob Art</HomeLogoText>
  </Container>
);
