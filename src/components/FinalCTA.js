import styled from 'styled-components';

import Link from './Link';

export default styled(Link)`
  padding: 8px 25px;
  background-image: url('/assets/empty-square-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  ${media.tablet`width: 100%;`}
`;
