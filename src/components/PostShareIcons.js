import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  &:last-of-type {
    margin-right: 0;
  }
`;

export default ({ ...rest }) => (
  <Container {...rest}>
    <Icon icon={faEnvelope} />
    <Icon icon={faLink} />
    <Icon icon={faFacebookF} />
    <Icon icon={faLinkedinIn} />
    <Icon icon={faTwitter} />
  </Container>
);
