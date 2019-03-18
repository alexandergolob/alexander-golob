import React from 'react';
import styled from 'styled-components';

import FrameBox from './FrameBox';

const Container = styled(FrameBox)`
  padding: 20px;
  margin-bottom: 20px;
`;

export default ({ content, ...rest }) => (
  <Container {...rest}>{content}</Container>
);
