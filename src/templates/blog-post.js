import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Header from '../components/BlogOrPressPostHeader';
import Tags from '../components/BlogOrPressPostTags';
import Title from '../components/BlogOrPressPostTitle';
import BodyTop from '../components/BlogOrPressPostBodyTop';
import BodyBottom from '../components/BlogOrPressPostBodyBottom';
import CTAs from '../components/BlogOrPressPostCTAs';
import Pagination from '../components/BlogOrPressPostPagination';

const stories = [
  {
    title: 'read more and speak for yourself now or ...'
  },
  {
    title: 'read more and speak for yourself now or ...'
  },
  {
    title: 'read more and speak for yourself now or ...'
  }
];

const topBody = {
  subtitle:
    'After long studies and many experiments, it has been determined that Golob Art, is, in face, cool',
  author: 'Alexander Golob',
  date: 'March 4, 2019',
  content:
    'Alexander Golob has experience engaging with communities, conducting research, and developing and implementing art and placemaking policy, strategy, and integration. His studio has worked with city governments on policy and implementation, non-profits embarking upon art initiative, and early stage start-ups looking for guidance. Art provides benefits for sense of community, business, marketing, and health. Sometimes, it helps to have an artist to integrate that perspective into a community, business, or project.'
};

const botBody = {
  content:
    'Alexander Golob has experience engaging with communities, conducting research, and developing and implementing art and placemaking policy, strategy, and integration. His studio has worked with city governments on policy and implementation, non-profits embarking upon art initiative, and early stage start-ups looking for guidance. Art provides benefits for sense of community, business, marketing, and health. Sometimes, it helps to have an artist to integrate that perspective into a community, business, or project.'
};

const pagination = {
  prev: 'read more and speak for yourself now or never learn about the end...',
  next: 'Out favorite public artwork in Boston'
};

const BodyContainer = styled.div`
  width: 85%;
`;

export default () => (
  <Layout>
    <Header stories={stories} />
    <Tags tags={['Blog', 'Public Art', 'Mural']} />
    <BodyContainer>
      <Title />
      <BodyTop {...topBody} />
      <CTAs />
      <BodyBottom {...botBody} />
      <CTAs />
      <Pagination {...pagination} />
    </BodyContainer>
  </Layout>
);
