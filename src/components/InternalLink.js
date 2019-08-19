import { Link } from 'gatsby';
import styled from 'styled-components';

const InternalLink = styled(Link).attrs(props => ({
  to: props.to && props.to.replace('../pages', '')
}))`
  color: inherit;
  text-decoration: none;
`;

export default InternalLink;
