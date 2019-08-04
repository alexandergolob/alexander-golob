import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';

import { media } from './ThemeProvider';
import InternalLink from './InternalLink';

import LightMarble from '../components/LightMarble';

const Container = styled.section`
  display: flex;
  justify-content: space-between;

  ${media.tablet`flex-direction: column;`}
`;

const PostImage = styled(Image)`
  margin-right: 2em;
  flex: 1;
  border: 1px solid ${props => props.theme.colors.dark};

  /* override aspect ratio */
  > div {
    padding-bottom: 0 !important;
  }

  ${media.tablet`
    margin-right: 0;
    margin-bottom: 0.25em;
    flex: auto;
    height: 300px;
  `}

  ${media.mobile`
    height: 250px;
  `}
`;

const TextContainer = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  position: relative;
  margin-bottom: 0.25em;
  border: ${props => props.theme.misc.frameBorder};
  padding: 10px;
  text-align: center;
  font-family: ${props => props.theme.fonts.serif};
  font-weight: 600;
  font-size: 1.25em;

  ${media.mobile`font-size: 1.15em;`}
`;

const Body = styled.div`
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  padding: 15px;
  font-family: ${props => props.theme.fonts.serif};
`;

const Subtitle = styled.h3`
  margin-bottom: 1em;
  font-weight: 600;
  font-size: 1em;

  ${media.mobile`margin-bottom: 0.5em;`}
`;

const AuthorAndDate = styled.div`
  margin-bottom: 1em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  ${media.mobile`margin-bottom: 0.5em;`}
`;

const Content = styled.div`
  margin-bottom: 0.75em;

  ${media.tablet`display: none;`}
`;

const ReadMoreLink = styled(InternalLink)`
  position: relative;

  ::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0;
    height: 1px;
    background: ${props => props.theme.colors.dark};
  }
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
      <Title>
        <LightMarble />
        {title}
      </Title>
      <Body>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <AuthorAndDate>
          <div>by: {author}</div>
          <time>{date}</time>
        </AuthorAndDate>
        <Content>{content}</Content>
        <ReadMoreLink to={path}>read more &gt;&gt;</ReadMoreLink>
      </Body>
    </TextContainer>
  </Container>
);
