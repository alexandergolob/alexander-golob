import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

const Container = styled.div``;

const UnstyledSocialIcon = ({ hoverColor, ...rest }) => (
  <FontAwesomeIcon {...rest} />
);

const SocialIcon = styled(UnstyledSocialIcon)`
  ${Container}:hover &:not(:hover) {
    opacity: 0.75;
  }

  &:hover {
    color: ${({ hoverColor }) => hoverColor};
  }

  transition: all 300ms ease-in-out;
`;

export default ({ className, ...rest }) => (
  <Container className={className}>
    <SocialIcon icon={faFacebookF} hoverColor='hsl(221, 44%, 41%)' {...rest} />
    <SocialIcon icon={faInstagram} hoverColor='hsl(326, 57%, 48%)' {...rest} />
    <SocialIcon
      icon={faLinkedinIn}
      hoverColor='hsl(201, 100%, 35%)'
      {...rest}
    />
    <SocialIcon icon={faTwitter} hoverColor='hsl(196, 100%, 46%)' {...rest} />
  </Container>
);
