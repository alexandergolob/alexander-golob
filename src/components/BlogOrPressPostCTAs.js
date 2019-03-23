import React from 'react';
import styled from 'styled-components';

import FrameBox from './FrameBox';
import LightMarbleCTA from './LightMarbleCTA';

const Container = styled.div`
  margin-bottom: 20px;
  display: flex;
`;

const UpdatesBox = styled(FrameBox)`
  padding: 5px 15px;
  padding-right: 30px;
  margin: 0 20px;
  display: inline-box;
`;

const UpdatesContainer = styled.div`
  display: flex;
  align-items: center;

  & div {
    margin-right: 15px;
    font-size: 0.85rem;
    font-weight: 900;
  }

  & input {
    padding: 2px 10px;
    margin-right: 5px;
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
    padding: 2px 10px;
  }
`;

const PatreonCTA = styled(LightMarbleCTA)``;

export default ({ ...rest }) => (
  <Container {...rest}>
    <UpdatesBox>
      <UpdatesContainer>
        <div>Get our updates</div>
        <input placeholder='email' />
        <button>Submit</button>
      </UpdatesContainer>
    </UpdatesBox>

    <PatreonCTA />
  </Container>
);
