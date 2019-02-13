import React from 'react';
import styled from 'styled-components';

const Heading = styled.h2`
  margin: 10px 0;
  text-align: center;
  font-family: 'Special Elite', cursive;
  font-size: 2.5rem;
  letter-spacing: 0.25rem;
`;

const NewsPieceContainer = styled.div`
  padding: 20px 40px;
  margin: auto;
  max-width: 600px;
  border: 2px solid #000;
`;

const UnstyledNewsPiece = ({ date, heading, description, className }) => (
  <div className={className}>
    <NewsPieceHeading>{heading}</NewsPieceHeading>
    <NewsPieceDate>{date}</NewsPieceDate>
    <NewsPieceDescription>{description}</NewsPieceDescription>
  </div>
);

const NewsPiece = styled(UnstyledNewsPiece)`
  margin-bottom: 15px;
  &:last-of-type {
    margin-bottom: 0;
  }

  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 2fr;
  grid-gap: 5px 20px;
  grid-template-areas:
    'Date Heading'
    '. Description';
`;

// wrapping in span to achieve highlighted text effect since grid children can't be inline
const UnstyledNewsPieceHeading = ({ children, ...rest }) => (
  <span {...rest}>
    <h3>{children}</h3>
  </span>
);

const NewsPieceHeading = styled(UnstyledNewsPieceHeading)`
  grid-area: Heading;

  & h3 {
    display: inline;
    background: #000;
    font-family: 'Domine', serif;
    font-size: 1.15rem;
    color: #fff;
    line-height: 1.38rem;
  }
`;
const NewsPieceDate = styled.div`
  grid-area: Date;
  font-family: 'Special Elite', cursive;
  font-size: 1.1rem;
`;

const NewsPieceDescription = styled.p`
  grid-area: Description;
  font-family: 'Domine', serif;
  font-size: 0.9rem;
  line-height: 1rem;
`;

export default () => (
  <section>
    <Heading>NEWS</Heading>
    <NewsPieceContainer>
      <NewsPiece
        date='Jun 18 2018'
        heading='OPEN CALL FOR COLLABORATORS: 1st Annual International Symposium'
        description='INEMS-1 celebrates memes and web culture from the dawn of the internet to the current year. Submit at bit.ly/INEMS-1 by Friday, July 13th at 11.59 pm.'
      />
      <NewsPiece
        date='May 04, 2018'
        heading='Tales from the Gut'
        description="Post-Cubicle Gallery's first exhibition called for art that told stories from the soul."
      />
      <NewsPiece
        date='May 04, 2018'
        heading='Consulting'
        description='Golob Art has experience in grant writing, transforming spaces, event planning, researching...'
      />
    </NewsPieceContainer>
  </section>
);
