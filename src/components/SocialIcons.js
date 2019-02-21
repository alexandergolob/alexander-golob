import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

const SocialIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;

  &:last-of-type {
    margin-right: 0;
  }
`;

export default () => (
  <>
    <SocialIcon icon={faFacebookF} />
    <SocialIcon icon={faInstagram} />
    <SocialIcon icon={faLinkedinIn} />
    <SocialIcon icon={faTwitter} />
  </>
);
