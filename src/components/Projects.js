import React from 'react';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

import { media } from './ThemeProvider';
import InternalLink from './InternalLink';

import LightMarble from '../components/LightMarble';

const Project = styled(InternalLink)`
  display: flex;
  flex-direction: column;
`;

const Image = styled(GatsbyImage)`
  flex: 1;
  border: 1px solid ${props => props.theme.colors.dark};
  border-bottom: none;

  ${media.mobile`flex: auto; height: 225px;`}
`;

const Title = styled.div`
  background: ${props => props.theme.colors.offLight};
  border: 1px solid ${props => props.theme.colors.dark};
  padding: 5px;
  text-align: center;
  font-family: ${props => props.theme.fonts.serif};

  /* elipses after one line */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${media.mobile`white-space: initial;`}
`;

const YearMarker = styled(Project).attrs({ as: 'div' })``;

const Year = styled(Image).attrs({ as: 'div' })`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${props => props.theme.fonts.serif};
  font-weight: 600;
  font-size: 1.5em;
`;

const YearTitle = styled(Title)`
  display: grid;
  place-items: center;
`;

export default ({ projects, refs }) => {
  let nextRef = 1;
  return projects.reduce((acc, { date, path, image, title }, i) => {
    const currentYear = new Date(date).getFullYear();
    const nextYear =
      i < projects.length - 1
        ? new Date(projects[i + 1].date).getFullYear()
        : currentYear;

    const markup = (
      <Project to={path} key={i} {...(refs && i === 0 ? { ref: refs[0] } : {})}>
        <Image alt='' fluid={image} />
        <Title>{title}</Title>
      </Project>
    );

    let restOfRefs = {};
    if (refs && i !== 0 && currentYear > nextYear) {
      restOfRefs.ref = refs[nextRef];
      nextRef++;
    }

    return currentYear > nextYear
      ? [
          ...acc,
          markup,
          <YearMarker key={i + 0.5} {...restOfRefs}>
            <Year>
              <LightMarble />
              {nextYear}
            </Year>
            <YearTitle>Year</YearTitle>
          </YearMarker>
        ]
      : [...acc, markup];
  }, []);
};
