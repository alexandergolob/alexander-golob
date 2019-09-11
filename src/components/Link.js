import React from 'react';

import InternalLink from './InternalLink';
import ExternalLink from './ExternalLink';

export default React.forwardRef(({ external, path, ...rest }, ref) =>
  external ? (
    <ExternalLink href={path} ref={ref} {...rest} />
  ) : (
    <InternalLink to={path} ref={ref} {...rest} />
  )
);
