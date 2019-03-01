import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  position: relative;
  border: 5px solid hsl(30, 51%, 10%);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(0.48 * (0.8 * 87.5vw));
  max-height: 600px;
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

const Description = styled.div``;

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

export default ({ images, ...rest }) => {
  const [index, setIndex] = useState(0);

  return (
    <Container {...rest}>
      <Img src={images[index].image} alt='' />
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
