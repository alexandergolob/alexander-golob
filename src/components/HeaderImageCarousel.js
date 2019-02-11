import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

const Carousel = styled.div`
  margin: auto;
  width: 80%;
  height: 50vh;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  overflow: hidden;
`;

const CarouselButton = styled(FontAwesomeIcon)`
  color: purple;
  font-size: 2rem;
`;

const UnstyledPrev = props => (
  <CarouselButton icon={faChevronLeft} {...props} />
);

const UnstyledNext = props => (
  <CarouselButton icon={faChevronRight} {...props} />
);

const Prev = UnstyledPrev;
const Next = UnstyledNext;

const CarouselImage = styled.img`
  position: relative;
  z-index: -1;
`;

export default () => (
  <Carousel>
    <CarouselImage
      src='https://static.wixstatic.com/media/536bb2_b22bd326a28c4ece920e4a0ac3b2599f~mv2.jpg/v1/fill/w_980,h_475,al_c,q_85,usm_0.66_1.00_0.01/536bb2_b22bd326a28c4ece920e4a0ac3b2599f~mv2.webp'
      alt=''
    />
    <Prev />
    <Next />
  </Carousel>
);
