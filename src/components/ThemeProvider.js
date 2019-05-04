import React from 'react';
import { ThemeProvider, css } from 'styled-components';

const sizes = {
  large: '1200px',
  laptop: '1024px',
  tablet: '768px',
  mobile: '500px',
  mobileL: '425px',
  mobileM: '375px',
  mobileS: '320px'
};

const theme = {
  widths: sizes,
  colors: {
    background: 'hsl(0,0%,95%)',
    carouselBorder: 'hsl(30, 51%, 10%)',
    light: '#fff',
    offLight: 'hsl(0, 0%, 92%)',
    dark: 'hsl(0,0%, 20%)'
  },
  fonts: {
    monospace: `'PT Mono', monospace`,
    sansSerif: `'Arial', sans-serif`
  },
  misc: {
    frameBorder: '4px ridge hsl(0,0%,60%)'
  }
};

export default props => <ThemeProvider theme={theme} {...props} />;

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
