import React from 'react';
import { Helmet } from 'react-helmet';

import favicon from '../images/logo.png';

export default () => (
  <Helmet>
    <title>Golob Art</title>
    <link rel='shortcut icon' type='image/png' href={favicon} />
    <meta
      name='viewport'
      content='width=device-width, initial-scale=1, shrink-to-fit=no'
    />
  </Helmet>
);
