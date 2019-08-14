import styled from 'styled-components';
import { media } from './ThemeProvider';

const Hero = styled.div`
  margin: 0.5em 0;
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  display: inline-block;
  padding: 0.15em 0.25em;
  text-align: center;
  font-family: ${props => props.theme.fonts.monospace};
  font-size: 2.5em;
  font-style: italic;

  ${media.laptop`font-size: 2.25em;`}
  ${media.tablet`
    margin: 1em 0;
    width: 100%;
    font-size: 1.75em;
  `}
  ${media.mobileM`font-size: 1.25em;`}
`;

export default Hero;
