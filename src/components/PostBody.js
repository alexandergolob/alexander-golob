import React from 'react';
import styled from 'styled-components';

import { media } from './ThemeProvider';
import PostShareIcons from './PostShareIcons';

const Container = styled.article`
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  padding: 20px;

  ${media.mobile`padding: 15px;`}
  ${media.mobile`font-size: 0.9em;`}
`;

const Subtitle = styled.div`
  font-family: ${props => props.theme.fonts.serif};
  margin-bottom: 1em;
  font-weight: 700;
`;

const AuthorAndDate = styled.div`
  margin-bottom: 0.5em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Date = styled.time`
  display: block;
  margin-right: 20px;
`;

const Content = styled.div`
  margin-top: 1.5em;
  p {
    margin-bottom: 1em;
    :last-of-type {
      margin-bottom: 0;
    }
    line-height: 1.15em;
  }
`;

const ShareIcons = styled(PostShareIcons)`
  display: none;
  font-size: 18px;

  ${media.mobile`display: inline-block;`}
`;

export default ({ subtitle, author, date, content, ...rest }) => (
  <Container {...rest}>
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
    <AuthorAndDate>
      <div>by: {author}</div>
      <Date>{date}</Date>
    </AuthorAndDate>
    <ShareIcons />
    <Content dangerouslySetInnerHTML={{ __html: content }} />
  </Container>
);
