import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  widths: { laptop: '1024px' },
  colors: { background: 'hsl(0,0%,95%)' },
  fonts: { serif: `'PT Mono', serif`, sansSerif: `'Arial', sans-serif` }
};

export default props => <ThemeProvider theme={theme} {...props} />;
