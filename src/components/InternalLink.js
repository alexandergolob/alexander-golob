import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const InternalLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export default ({ to, ...rest }) => (
  <InternalLink to={to.replace('/pages', '')} {...rest} />
);
