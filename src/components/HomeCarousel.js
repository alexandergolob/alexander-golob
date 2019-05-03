import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  position: relative;
  border: 5px solid ${props => props.theme.colors.carouselBorder};
  height: 450px;
  background: ${props => props.theme.colors.dark};
`;

const Img = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
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
  padding: 10px;
  font-family: ${props => props.theme.fonts.monospace};
  color: ${props => props.theme.colors.light};
`;

const Description = styled.div``;

const Count = styled.div``;

const CycleButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  cursor: pointer;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }

  border: none;
  background: none;

  color: ${props => props.theme.colors.light};
  font-size: 3em;

  transition: opacity 300ms ease-in-out;
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
      <Img fluid={images[index].image.childImageSharp.fluid} alt='' />
      <ImgDescriptionContainer>
        <Description>{images[index].description}</Description>
        <Count>
          {index + 1}/{images.length}
        </Count>
      </ImgDescriptionContainer>

      <LeftCycleButton
        onClick={() => setIndex((images.length + index - 1) % images.length)}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </LeftCycleButton>

      <RightCycleButton onClick={() => setIndex((index + 1) % images.length)}>
        <FontAwesomeIcon icon={faChevronRight} />
      </RightCycleButton>
    </Container>
  );
};
