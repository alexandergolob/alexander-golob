import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

const Carousel = styled.div`
  margin: 20px auto;
  width: 980px;
  height: 475px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const CarouselButton = styled(FontAwesomeIcon)`
  position: relative;
  z-index: 2;
  color: #fff;
  cursor: pointer;
`;

const Prev = props => (
  <CarouselButton icon={faChevronLeft} {...props} size='3x' />
);

const Next = props => (
  <CarouselButton icon={faChevronRight} {...props} size='3x' />
);

const CarouselImage = styled.img`
  position: relative;
  z-index: 1;
`;

const CarouselUIContainer = styled.div`
  position: absolute;
  left: 20px;
  right: 20px;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImageCaptionRow = styled.div`
  background: hsla(0, 0%, 30%, 0.4);
  padding: 10px 15px;
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const ImageCaption = styled.div``;

const ImageIndex = styled.div``;

export default () => (
  <Carousel>
    <CarouselImage
      src='https://static.wixstatic.com/media/536bb2_b22bd326a28c4ece920e4a0ac3b2599f~mv2.jpg/v1/fill/w_980,h_475,al_c,q_85,usm_0.66_1.00_0.01/536bb2_b22bd326a28c4ece920e4a0ac3b2599f~mv2.webp'
      alt=''
    />
    <CarouselUIContainer>
      <Prev />
      <Next />
    </CarouselUIContainer>
    <ImageCaptionRow>
      <ImageCaption>Kaleidoscope, Boston, MA</ImageCaption>
      <ImageIndex>1/9</ImageIndex>
    </ImageCaptionRow>
  </Carousel>
);
