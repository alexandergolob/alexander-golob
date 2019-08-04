import React from 'react';
import styled from 'styled-components';

import UnstyledSocialIcons from './SocialIcons';

const SocialIcons = styled(UnstyledSocialIcons)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  > * {
    margin-right: 10px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export default ({ ...rest }) => <SocialIcons {...rest} />;
