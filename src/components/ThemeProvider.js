import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  widths: { large: '1200px' },
  colors: {
    background: 'hsl(0,0%,95%)',
    carouselBorder: 'hsl(30, 51%, 10%)',
    light: '#fff'
  },
  fonts: {
    monospace: `'PT Mono', monospace`,
    sansSerif: `'Arial', sans-serif`
  }
};

export default props => <ThemeProvider theme={theme} {...props} />;
