import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

import { media } from '../components/ThemeProvider';

const Container = styled.div`
  position: relative;
  border: 5px solid ${props => props.theme.colors.carouselBorder};
  height: 450px;
  background: ${props => props.theme.colors.dark};
  overflow: hidden;

  ${media.tablet`height: 300px;`}
  ${media.mobileL`height: 250px;`}
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

  ${media.tablet`font-size: 0.85em;`}
  ${media.mobileL`font-size: 0.70em;`}
`;

const Description = styled.div`
  margin-right: 10px;
`;

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

const Cards = styled.div.attrs(({ index }) => ({
  style: { left: `${-index * 100}%` }
}))`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${props => props.cardCount * 100}%;
  display: flex;

  transition: left 300ms linear;
`;

const CardContainer = styled.div`
  flex: 1;
  position: relative;
`;

const Card = ({ image, description, count }) => (
  <CardContainer>
    <Img fluid={image.childImageSharp.fluid} alt='' />
    <ImgDescriptionContainer>
      <Description>{description}</Description>
      <Count>{count}</Count>
    </ImgDescriptionContainer>
  </CardContainer>
);

export default ({ images, ...rest }) => {
  const [index, setIndex] = React.useState(0);

  const setPrevIndex = () =>
    setIndex((images.length + index - 1) % images.length);
  const setNextIndex = () => setIndex((index + 1) % images.length);

  React.useEffect(() => {
    const id = setTimeout(setNextIndex, 5000);
    return () => clearTimeout(id);
  }, [index]);

  return (
    <Container {...rest}>
      <Cards cardCount={images.length} index={index}>
        {images.map(({ image, description }, i) => (
          <Card
            key={i}
            image={image}
            description={description}
            count={`${i + 1}/${images.length}`}
          />
        ))}
      </Cards>
      <LeftCycleButton onClick={setPrevIndex}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </LeftCycleButton>

      <RightCycleButton onClick={setNextIndex}>
        <FontAwesomeIcon icon={faChevronRight} />
      </RightCycleButton>
    </Container>
  );
};
