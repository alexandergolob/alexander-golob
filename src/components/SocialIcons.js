import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

const SocialIcons = styled.div`
  display: flex;
  &:hover a {
    opacity: 0.8;
  }

  &:hover a:hover {
    opacity: 1;
  }
`;

const UnstyledSocialIcon = ({ icon, href, ...rest }) => (
  <a href={href} target='_blank' rel='noopener noreferrer' {...rest}>
    <FontAwesomeIcon icon={icon} size='lg' />
  </a>
);

const SocialIcon = styled(UnstyledSocialIcon)`
  margin-right: 15px;
  &:last-of-type {
    margin-right: 0;
  }
  color: inherit;
  &:hover {
    opacity: 1;
    color: ${({ hoverColor }) => hoverColor};
  }
  transition: color 300ms ease-in-out, opacity 300ms ease-in-out;
`;

export default props => (
  <SocialIcons {...props}>
    <SocialIcon
      icon={faFacebookF}
      href='https://www.facebook.com/AlexanderGolobArt/'
      hoverColor='#3B5998'
    />
    <SocialIcon
      icon={faInstagram}
      href='https://www.instagram.com/alexandergolobart/'
      hoverColor='#833AB4'
    />
    <SocialIcon
      icon={faTwitter}
      href='https://twitter.com/GolobArtBoston'
      hoverColor='#00aced'
    />
    <SocialIcon
      icon={faLinkedinIn}
      href='https://www.linkedin.com/in/alexander-golob/'
      hoverColor='#0077B5'
    />
  </SocialIcons>
);
