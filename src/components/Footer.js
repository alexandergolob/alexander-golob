import React from 'react';
import styled from 'styled-components';

import SocialIcons from './SocialIcons';

const Footer = styled.footer`
  padding: 15px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #242424;
  color: #fff;
`;

const Copyright = styled.div`
  margin-top: 10px;
  font-size: 0.8rem;
`;

export default () => (
  <Footer>
    <SocialIcons />
    <Copyright>&copy; {new Date().getFullYear()} Alexander Golob</Copyright>
  </Footer>
);
