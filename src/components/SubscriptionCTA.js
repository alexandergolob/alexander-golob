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
  font-size: 0.85rem;

  & div {
    margin-right: 1rem;
    font-weight: 700;
  }

  & input {
    padding: 0.15rem 0.5rem;
    margin-right: 0.5rem;
    border: 1px solid #999;
    font-size: inherit;

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
    height: 100%;
    padding: 0.15rem 0.33rem;
    font-size: inherit;
    font-weight: 700;
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
