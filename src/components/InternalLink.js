import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const InternalLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export default React.forwardRef(({ to, ...rest }, ref) => (
  <InternalLink to={to.replace('[workaround]', '')} {...rest} ref={ref} />
));
