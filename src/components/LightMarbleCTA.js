import React from 'react';
import styled from 'styled-components';

import FrameBox from './FrameBox';

const Box = styled(FrameBox)`
  padding: 0.33rem 1rem;
  background-image: url('/assets/light-marble.svg');
  background-repeat: none;
  background-size: cover;
  background-position: center center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;

  & div {
    margin-right: 0.33rem;
    font-weight: 700;
  }

  & button {
    cursor: pointer;
    border: 1px solid #999;
    background-image: url('/assets/empty-square-bg.png');
    background-repeat: none;
    background-size: cover;
    background-position: center center;
    padding: 0.15rem 0.75rem;
    font-size: inherit;
    color: #fff;
  }
`;

export default ({ ...rest }) => (
  <Box {...rest}>
    <Container>
      <div>Support our work on patreon</div>
      <button>here</button>
    </Container>
  </Box>
);
