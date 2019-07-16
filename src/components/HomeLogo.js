import React from 'react';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

import InternalLink from './InternalLink';

const Link = styled(InternalLink)`
  border: ${props => props.theme.misc.frameBorder};
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const LogoImg = styled(GatsbyImage)``;

const HomeLogoText = styled.div`
  font-family: ${props => props.theme.fonts.serif};
  font-size: 1.75em;
  text-align: center;
`;

export default ({ logo, text, ...rest }) => (
  <Link to='/' {...rest}>
    <LogoImg fixed={logo} alt='logo' />
    <HomeLogoText>{text}</HomeLogoText>
  </Link>
);
