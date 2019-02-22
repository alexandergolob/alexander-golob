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

export default ({ src, text, ...rest }) => (
  <Container {...rest}>
    <LogoImg src={src} alt='logo' />
    <HomeLogoText>{text}</HomeLogoText>
  </Container>
);
