import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight
} from '@fortawesome/free-solid-svg-icons';

import FrameBox from './FrameBox';

const Container = styled(FrameBox)`
  background-image: url('/assets/light-marble.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding: 10px;
`;

const Heading = styled.div`
  font-weight: 900;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Link = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Prev = styled.div`
  flex-grow: 1;
`;

const Next = styled.div`
  flex-grow: 1;
  text-align: right;
`;

const LeftArrows = styled.div`
  margin-right: 10px;
`;

const RightArrows = styled.div`
  margin-left: 10px;
`;

export default ({ prev, next, ...rest }) => (
  <Container {...rest}>
    <Heading>Recent Stories</Heading>
    <LinkContainer>
      <Link>
        <LeftArrows>
          <FontAwesomeIcon icon={faAngleDoubleLeft} />
        </LeftArrows>
        <Prev>{prev}</Prev>
      </Link>
      <Link>
        <Next>{next}</Next>
        <RightArrows>
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </RightArrows>
      </Link>
    </LinkContainer>
  </Container>
);
