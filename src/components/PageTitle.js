import React from 'react';
import styled from 'styled-components';

import FrameBox from './FrameBox';

const HeadingContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

const HeadingBox = styled(FrameBox)`
  padding: 10px 60px;
`;

export default ({ children, ...rest }) => (
  <HeadingContainer {...rest}>
    <HeadingBox>
      <h1>{children}</h1>
    </HeadingBox>
  </HeadingContainer>
);
