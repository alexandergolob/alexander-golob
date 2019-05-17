import styled from 'styled-components';

import { media } from './ThemeProvider';

export default styled.h1`
  margin: 0.25em auto;
  min-width: 300px;
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  display: inline-block;
  padding: 5px 25px;
  text-align: center;
  font-family: ${props => props.theme.fonts.serif};
  font-weight: 700;
  font-size: 2em;

  ${media.tablet`font-size: 1.5em;`}
  ${media.mobile`font-size: 1.25em;`}
  ${media.mobileL`width: 90%;`}
`;
