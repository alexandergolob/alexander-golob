import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight
} from '@fortawesome/free-solid-svg-icons';

import { media } from './ThemeProvider';
import InternalLink from './InternalLink';

import LightMarble from './LightMarble';

const Container = styled.div`
  position: relative;
  border: ${props => props.theme.misc.frameBorder};
  padding: 10px;
  font-family: ${props => props.theme.fonts.serif};
`;

const Heading = styled.div`
  margin-bottom: 0.5em;
  font-weight: 700;

  ${media.mobile`text-align: center;`}
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

const Link = styled(InternalLink)`
  width: 45%;
  display: flex;
  align-items: center;

  ${media.tablet`width: 48%; font-size: 85%;`}
`;

const PrevLink = styled(Link)``;
const NextLink = styled(Link)`
  margin-left: auto;
`;

const Prev = styled.div`
  flex: 1;
`;

const Next = styled.div`
  flex: 1;
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
    <LightMarble />
    <Heading>Recent Stories</Heading>
    <LinkContainer>
      {prev && (
        <PrevLink to={prev.path}>
          <LeftArrows>
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </LeftArrows>
          <Prev>{prev.title}</Prev>
        </PrevLink>
      )}
      {next && (
        <NextLink to={next.path}>
          <Next>{next.title}</Next>
          <RightArrows>
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </RightArrows>
        </NextLink>
      )}
    </LinkContainer>
  </Container>
);
