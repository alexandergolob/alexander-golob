import React from 'react';
import styled from 'styled-components';

import SocialIcons from './SocialIcons';

const Footer = styled.footer`
  padding: 15px 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #242424;
  color: #fff;
`;

export default () => (
  <Footer>
    <SocialIcons />
    &copy; {new Date().getFullYear()} Alexander Golob
  </Footer>
);
