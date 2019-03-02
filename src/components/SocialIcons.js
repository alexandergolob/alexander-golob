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

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
`;

const SocialLink = ({ href, ...rest }) => (
  <Anchor href={href} target='_blank' rel='noopener noreferrer'>
    <SocialIcon {...rest} />
  </Anchor>
);

export default ({ className, ...rest }) => (
  <Container className={className}>
    <SocialLink
      href='https://www.facebook.com/AlexanderGolobArt/'
      icon={faFacebookF}
      hoverColor='hsl(221, 44%, 41%)'
      {...rest}
    />
    <SocialLink
      href='https://www.instagram.com/alexandergolobart/'
      icon={faInstagram}
      hoverColor='hsl(326, 57%, 48%)'
      {...rest}
    />
    <SocialLink
      href='https://www.linkedin.com/in/alexander-golob/'
      icon={faLinkedinIn}
      hoverColor='hsl(201, 100%, 35%)'
      {...rest}
    />
    <SocialLink
      href='https://twitter.com/GolobArtBoston'
      icon={faTwitter}
      hoverColor='hsl(196, 100%, 46%)'
      {...rest}
    />
  </Container>
);
