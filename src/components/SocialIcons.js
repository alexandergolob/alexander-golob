import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

const UnstyledSocialIcon = ({ hoverColor, ...rest }) => (
  <FontAwesomeIcon {...rest} />
);

const SocialIcon = styled(UnstyledSocialIcon)`
  &:hover {
    color: ${({ hoverColor }) => hoverColor};
  }

  transition: color 300ms ease-in-out;
`;

export default props => (
  <>
    <SocialIcon icon={faFacebookF} hoverColor='hsl(221, 44%, 41%)' {...props} />
    <SocialIcon icon={faInstagram} hoverColor='hsl(326, 57%, 48%)' {...props} />
    <SocialIcon
      icon={faLinkedinIn}
      hoverColor='hsl(201, 100%, 35%)'
      {...props}
    />
    <SocialIcon icon={faTwitter} hoverColor='hsl(196, 100%, 46%)' {...props} />
  </>
);
