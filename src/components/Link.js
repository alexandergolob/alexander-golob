import React from 'react';

import InternalLink from './InternalLink';
import ExternalLink from './ExternalLink';

export default ({ external, path, ...rest }) =>
  external ? (
    <ExternalLink href={path} {...rest} />
  ) : (
    <InternalLink to={path} {...rest} />
  );
