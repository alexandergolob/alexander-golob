import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  position: relative;
  height: 100%;
  border: 5px solid hsl(30, 51%, 10%);
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

const ImgDescriptionContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: hsla(0, 0%, 10%, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  font-family: 'PT Mono', monospace;
  color: #fff;
`;

const Description = styled.caption``;

const Count = styled.div``;

const CycleButton = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  color: hsl(0, 0%, 90%);
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
  transition: opacity 300ms ease-in-out;
  font-size: 3rem;
`;

const LeftCycleButton = styled(CycleButton)`
  left: 10px;
`;
const RightCycleButton = styled(CycleButton)`
  right: 10px;
`;

const images = [
  {
    src: 'kaleidoscope.webp',
    description: 'Kaleidoscope, Boston, MA'
  },
  { src: 'pokecity.webp', description: 'PokeCity Mural, Cambridge' },
  { src: 'the-snap-gallery.webp', description: '#theSnapGallery at the PEM' }
];

export default ({ ...props }) => {
  const [index, setIndex] = useState(0);

  return (
    <Container {...props}>
      <Img src={`./assets/${images[index].src}`} alt='' />
      <ImgDescriptionContainer>
        <Description>{images[index].description}</Description>
        <Count>
          {index + 1}/{images.length}
        </Count>
      </ImgDescriptionContainer>
      <LeftCycleButton
        icon={faChevronLeft}
        onClick={() => setIndex((images.length + index - 1) % images.length)}
      />
      <RightCycleButton
        icon={faChevronRight}
        onClick={() => setIndex((index + 1) % images.length)}
      />
    </Container>
  );
};
