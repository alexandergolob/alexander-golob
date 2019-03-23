import React from 'react';
import styled from 'styled-components';

import FrameBox from './FrameBox';

const Box = styled(FrameBox)`
  padding: 5px 15px;
  background-image: url('/assets/light-marble.svg');
  background-repeat: none;
  background-size: cover;
  background-position: center center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;

  & div {
    margin-right: 5px;
    font-size: 0.85rem;
    font-weight: 900;
  }

  & button {
    cursor: pointer;
    border: 1px solid #999;
    background-image: url('/assets/empty-square-bg.png');
    background-repeat: none;
    background-size: cover;
    background-position: center center;
    padding: 2px 10px;
    color: #eee;
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
