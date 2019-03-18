import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

import FrameBox from './FrameBox';

const Box = styled(FrameBox)`
  margin-bottom: 20px;
  background-image: url('/assets/light-marble.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding: 10px 20px 10px 30px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.h1``;

const ShareIcons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  &:last-of-type {
    margin-right: 0;
  }
`;

export default () => (
  <Box>
    <Container>
      <Heading>Haverhill Art Project</Heading>
      <ShareIcons>
        <Icon icon={faEnvelope} size='lg' />
        <Icon icon={faLink} size='lg' />
        <Icon icon={faFacebookF} size='lg' />
        <Icon icon={faLinkedinIn} size='lg' />
        <Icon icon={faTwitter} size='lg' />
      </ShareIcons>
    </Container>
  </Box>
);
