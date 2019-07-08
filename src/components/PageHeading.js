import styled from 'styled-components';

import { media } from './ThemeProvider';

export default styled.h1`
  min-width: 300px;
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  padding: 5px 20px;
  text-align: center;
  font-family: ${props => props.theme.fonts.serif};
  font-weight: 600;
  font-size: 2em;

  ${media.tablet`font-size: 1.5em;`}
  ${media.mobile`font-size: 1.25em;`}
  ${media.mobileL`min-width: auto;`}
`;
