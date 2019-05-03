import styled from 'styled-components';

const Hero = styled.div`
  margin: 0.5em 0;
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  display: inline-block;
  padding: 0.15em 0.25em;
  font-family: ${props => props.theme.fonts.monospace};
  font-size: 2.5em;
  font-style: italic;
  color: ${props => props.theme.colors.offLight};
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

export default Hero;
