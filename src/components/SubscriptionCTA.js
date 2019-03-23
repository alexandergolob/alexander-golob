import React from 'react';
import styled from 'styled-components';

import FrameBox from './FrameBox';

const Box = styled(FrameBox)`
  padding: 0.33rem 1rem;
  display: inline-block;
`;

const Container = styled.div`
  display: flex;
  align-items: center;

  & div {
    margin-right: 1rem;
    font-size: 0.85rem;
    font-weight: 900;
  }

  & input {
    padding: 0.15rem 0.5rem;
    margin-right: 0.33rem;
    border: 1px solid #999;

    &::placeholder {
      text-align: right;
    }
  }

  & button {
    cursor: pointer;
    border: 1px solid #999;
    background-image: url('/assets/light-marble.svg');
    background-repeat: none;
    background-size: cover;
    background-position: center center;
    padding: 0.15rem 0.5rem;
  }
`;

export default ({ ...rest }) => (
  <Box {...rest}>
    <Container>
      <div>Get our updates</div>
      <input placeholder='email' />
      <button>Submit</button>
    </Container>
  </Box>
);
