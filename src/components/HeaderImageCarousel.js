import React, { useState } from 'react';
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
  background: red;
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

// choosing to crop off sides if image not proper dimensions
const CarouselImage = styled.img`
  position: relative;
  z-index: 1;
  height: 100%;
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
  font-family: 'Lato', sans-serif;
  font-size: 0.85rem;
  color: #fff;
`;

const ImageCaption = styled.div``;

const ImageIndex = styled.div``;

const images = [
  {
    src:
      'https://static.wixstatic.com/media/536bb2_b22bd326a28c4ece920e4a0ac3b2599f~mv2.jpg/v1/fill/w_980,h_475,al_c,q_85,usm_0.66_1.00_0.01/536bb2_b22bd326a28c4ece920e4a0ac3b2599f~mv2.webp',
    caption: 'Kaleidoscope, Boston, MA'
  },
  {
    src:
      'https://static.wixstatic.com/media/536bb2_ca4269c6695646d6872f5f14c78132e2~mv2_d_6000_4000_s_4_2.jpeg/v1/fill/w_980,h_475,al_c,q_85,usm_0.66_1.00_0.01/536bb2_ca4269c6695646d6872f5f14c78132e2~mv2_d_6000_4000_s_4_2.webp',
    caption: '#theSnapGallery at the PEM'
  },
  {
    src:
      'https://static.wixstatic.com/media/536bb2_be08c009b33148169a4fe4f0516f97df~mv2.jpg/v1/fill/w_946,h_458,al_c,lg_1,q_85/536bb2_be08c009b33148169a4fe4f0516f97df~mv2.webp',
    caption: 'unnamed (2)'
  }
];

export default () => {
  const [index, setIndex] = useState(0);

  return (
    <Carousel>
      <CarouselImage src={images[index].src} alt='' />
      <CarouselUIContainer>
        <Prev
          onClick={() => setIndex((index - 1 + images.length) % images.length)}
        />
        <Next onClick={() => setIndex((index + 1) % images.length)} />
      </CarouselUIContainer>
      <ImageCaptionRow>
        <ImageCaption>{images[index].caption}</ImageCaption>
        <ImageIndex>
          {index + 1}/{images.length}
        </ImageIndex>
      </ImageCaptionRow>
    </Carousel>
  );
};
