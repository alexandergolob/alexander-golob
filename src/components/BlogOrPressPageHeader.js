import React from 'react';
import styled from 'styled-components';

import Description from './BlogOrPressPageDescription';

const ImageAndPostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  & > * {
    width: 48%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  /* height: 100%; */
`;

export default ({ image, title, subtitle, author, date, content, ...rest }) => (
  <ImageAndPostContainer {...rest}>
    <ImageContainer>
      <Image src={image} alt='' />
    </ImageContainer>

    <Description
      title={title}
      subtitle={subtitle}
      author={author}
      date={date}
      content={content}
    />
  </ImageAndPostContainer>
);

/* <BlogOrPressDescription
        title='Title Golob Art is Cool'
        subtitle='After long studies and many experiments, it has been determined that Golob Art, is, in face, cool'
        author='Alexander Golob'
        date='March 4, 2019'
        content='Alexander Golob has experience engaging with communities, conducting research, and developing and implementing art and placemaking policy, strategy, and integration. His studio has worked with city governments on policy and implementation, non-profits embarking upon art initiative, and early stage start-ups looking for guidance. Art provides benefits for sense of community, business, marketing, and health. Sometimes, it helps to have an artist to integrate that perspective into a community, business, or project.'
      /> */
