import React from 'react';
import styled from 'styled-components';

import { media } from './ThemeProvider';
import UnstyledSubscriptionCTA from './SubscriptionCTA';
import UnstyledSupportCTA from './SupportCTA';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  ${media.laptop`
    flex-direction: column;
  `}
`;

const SubscriptionCTA = styled(UnstyledSubscriptionCTA)`
  margin: 0 2em;

  ${media.laptop`margin: 0; margin-bottom: 1em;`}
`;

const SupportCTA = styled(UnstyledSupportCTA)`
  ${media.mobile`width: 100%;`}
`;

export default ({ ...rest }) => (
  <Container {...rest}>
    <SubscriptionCTA />
    <SupportCTA />
  </Container>
);
