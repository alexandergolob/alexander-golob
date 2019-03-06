import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import FrameBox from '../components/FrameBox';

const HeadingContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

const HeadingBox = styled(FrameBox)`
  padding: 10px 60px;
`;

const BannerAndPostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  & > * {
    width: 48%;
  }
`;

const Banner = styled.div`
  background: green;
`;

const MostRecentPostTitle = styled(FrameBox)`
  display: block;
  padding: 10px;
  text-align: center;
  margin-bottom: 10px;
`;

const MostRecentPostDescription = styled(FrameBox)`
  display: block;
  padding: 15px;
`;

const MostRecentPostSubtitle = styled.h3`
  margin-bottom: 10px;
`;

const AuthorAndDate = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const MostRecentPostContent = styled.div`
  margin-bottom: 10px;
`;

const MostRecentPost = ({ title, subtitle, author, date, content }) => (
  <div>
    <MostRecentPostTitle>
      <h2>{title}</h2>
    </MostRecentPostTitle>
    <MostRecentPostDescription>
      <MostRecentPostSubtitle>{subtitle}</MostRecentPostSubtitle>
      <AuthorAndDate>
        <div>by: {author}</div>
        <div>{date}</div>
      </AuthorAndDate>
      <MostRecentPostContent>{content}</MostRecentPostContent>
      <div>read more >>></div>
    </MostRecentPostDescription>
  </div>
);

const PostContainer = styled.div`
  border: 1px solid black;
`;

const PostImage = styled.div`
  height: 250px;
  background: green;
`;

const PostDescriptionContainer = styled.div`
  background: hsl(0, 0%, 93%);
  padding: 10px 20px;
`;

const PostTitle = styled.h4``;

const Post = ({ title, subtitle, author }) => (
  <div>
    <PostContainer>
      <PostImage />
      <PostDescriptionContainer>
        <PostTitle>{title}</PostTitle>
        {subtitle && <div>{subtitle}</div>}
        <div>- {author}</div>
      </PostDescriptionContainer>
    </PostContainer>
  </div>
);

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: max-content;
  grid-column-gap: 10px;
  grid-row-gap: 20px;
`;

export default () => (
  <Layout>
    <HeadingContainer>
      <HeadingBox>
        <h1>Golob Art Blog</h1>
      </HeadingBox>
    </HeadingContainer>
    <BannerAndPostContainer>
      <Banner />
      <MostRecentPost
        title='Title Golob Art is Cool'
        subtitle='After long studies and many experiments, it has been determined that Golob Art, is, in face, cool'
        author='Alexander Golob'
        date='March 4, 2019'
        content='Alexander Golob has experience engaging with communities, conducting research, and developing and implementing art and placemaking policy, strategy, and integration. His studio has worked with city governments on policy and implementation, non-profits embarking upon art initiative, and early stage start-ups looking for guidance. Art provides benefits for sense of community, business, marketing, and health. Sometimes, it helps to have an artist to integrate that perspective into a community, business, or project.'
      />
    </BannerAndPostContainer>

    <PostsContainer>
      <Post
        title='Public art needs to be in public spaces'
        author='Alexander Golob'
      />
      <Post
        title='How to design a website with an artist'
        subtitle='Take aways of patience, creativity, and inspiration after hours of work'
        author='Khizer Baig'
      />
      <Post
        title='Our favorite public artworks in Boston'
        subtitle='Although it has less public art than other cities, there are treasures in beantown'
        author='Alexander-Golob'
      />
      <Post
        title='Public art needs to be in public spaces'
        author='Alexander Golob'
      />
      <Post
        title='How to design a website with an artist'
        subtitle='Take aways of patience, creativity, and inspiration after hours of work'
        author='Khizer Baig'
      />
      <Post
        title='Our favorite public artworks in Boston'
        subtitle='Although it has less public art than other cities, there are treasures in beantown'
        author='Alexander-Golob'
      />
    </PostsContainer>
  </Layout>
);
