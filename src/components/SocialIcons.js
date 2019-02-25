import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

const SocialIcon = styled(FontAwesomeIcon)``;

export default props => (
  <>
    <SocialIcon icon={faFacebookF} {...props} />
    <SocialIcon icon={faInstagram} {...props} />
    <SocialIcon icon={faLinkedinIn} {...props} />
    <SocialIcon icon={faTwitter} {...props} />
  </>
);
