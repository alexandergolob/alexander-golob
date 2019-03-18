import React from 'react';
import styled from 'styled-components';

import FrameBox from './FrameBox';

const Container = styled.div`
  margin-bottom: 10px;
`;

const Tags = styled(FrameBox)`
  display: inline-block;
  background-image: url('/assets/light-marble.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding: 8px;
  padding-right: 60px;
`;

export default ({ tags, ...rest }) => (
  <Container>
    <Tags {...rest}>{tags.join(' // ')}</Tags>
  </Container>
);
