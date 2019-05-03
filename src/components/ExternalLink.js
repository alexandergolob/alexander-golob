import styled from 'styled-components';

import InternalLink from './InternalLink';

const ExternalLink = styled(InternalLink).attrs({
  as: 'a',
  target: '_blank',
  rel: 'noopener noreferrer'
})``;

export default ExternalLink;
