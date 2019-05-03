import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  widths: { large: '1200px' },
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
