import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';

import InternalLink from './InternalLink';

const Container = styled.section`
  display: flex;
  justify-content: space-between;
`;

const PostImage = styled(Image)`
  margin-right: 15px;
  flex: 1;
  display: block;
`;

const TextContainer = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  margin-bottom: 0.25em;
  border: ${props => props.theme.misc.frameBorder};
  background-image: url('/assets/light-marble.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding: 10px;
  text-align: center;
  font-family: ${props => props.theme.fonts.serif};
  font-weight: 700;
  font-size: 1.25em;
`;

const Description = styled.div`
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  padding: 15px;
  font-family: ${props => props.theme.fonts.serif};
`;

const Subtitle = styled.h3`
  font-weight: 700;
  font-size: 1em;
`;

const AuthorAndDate = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em 0;
`;

const Content = styled.div`
  margin-bottom: 10px;
`;

const ReadMoreLink = styled(InternalLink)`
  text-decoration: underline;
`;

export default ({
  date,
  image,
  title,
  subtitle,
  author,
  path,
  content,
  ...rest
}) => (
  <Container {...rest}>
    <PostImage fluid={image} />

    <TextContainer>
      <Title>{title}</Title>
      <Description>
        <Subtitle>{subtitle}</Subtitle>
        <AuthorAndDate>
          <div>by: {author}</div>
          <time>{date}</time>
        </AuthorAndDate>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
        <ReadMoreLink to={path}>read more >></ReadMoreLink>
      </Description>
    </TextContainer>
  </Container>
);
