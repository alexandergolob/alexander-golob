import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';

import InternalLink from './InternalLink';

const Container = styled(InternalLink)`
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  display: flex;
  flex-direction: column;
`;

const Img = styled(Image)`
  height: 400px;
`;

const Text = styled.div`
  flex: 1;
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 1.15em;
`;

const Description = styled.div`
  margin: 0.4em 0;
`;

const Author = styled.div``;

export default ({ path, headerImage, title, subtitle, author, ...rest }) => (
  <Container to={`/blog${path}`} {...rest}>
    <Img fluid={headerImage.childImageSharp.fluid} />
    <Text>
      <Title>{title}</Title>
      <Description>{subtitle}</Description>
      <Author>- {author}</Author>
    </Text>
  </Container>
);
