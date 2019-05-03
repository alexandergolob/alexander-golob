// import React from 'react';
// import styled from 'styled-components';
// import { graphql } from 'gatsby';

// import Layout from '../components/Layout';
// import Heading from '../components/BlogOrPressPageHeading';
// import Header from '../components/BlogOrPressPageHeader';
// import Posts from '../components/BlogOrPressPagePosts';
// import FrameBox from '../components/FrameBox';
// import Link from '../components/Link';

// const LinksContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 20px;
// `;

// const LinkContainer = styled(Link)`
//   margin-right: 25px;
//   &:last-of-type {
//     margin-right: 0;
//   }
// `;

// const LinkBox = styled(FrameBox)`
//   padding: 10px 0;
//   width: 200px;
//   text-align: center;
//   font-weight: 900;
// `;

// const posts = [
//   {
//     title: 'Public art needs to be in public spaces',
//     author: 'Alexander Golob'
//   },
//   {
//     title: 'How to design a website with an artist',
//     subtitle:
//       'Take aways of patience, creativity, and inspiration after hours of work',
//     author: 'Khizer Baig'
//   },
//   {
//     title: 'Our favorite public artworks in Boston',
//     subtitle:
//       'Although it has less public art than other cities, there are treasures in beantown',
//     author: 'Alexander-Golob'
//   },
//   {
//     title: 'Public art needs to be in public spaces',
//     author: 'Alexander Golob'
//   },
//   {
//     title: 'How to design a website with an artist',
//     subtitle:
//       'Take aways of patience, creativity, and inspiration after hours of work',
//     author: 'Khizer Baig'
//   },
//   {
//     title: 'Our favorite public artworks in Boston',
//     subtitle:
//       'Although it has less public art than other cities, there are treasures in beantown',
//     author: 'Alexander-Golob'
//   },
//   {
//     title: 'Public art needs to be in public spaces',
//     author: 'Alexander Golob'
//   },
//   {
//     title: 'How to design a website with an artist',
//     subtitle:
//       'Take aways of patience, creativity, and inspiration after hours of work',
//     author: 'Khizer Baig'
//   },
//   {
//     title: 'Our favorite public artworks in Boston',
//     subtitle:
//       'Although it has less public art than other cities, there are treasures in beantown',
//     author: 'Alexander-Golob'
//   },
//   {
//     title: 'Public art needs to be in public spaces',
//     author: 'Alexander Golob'
//   },
//   {
//     title: 'How to design a website with an artist',
//     subtitle:
//       'Take aways of patience, creativity, and inspiration after hours of work',
//     author: 'Khizer Baig'
//   },
//   {
//     title: 'Our favorite public artworks in Boston',
//     subtitle:
//       'Although it has less public art than other cities, there are treasures in beantown',
//     author: 'Alexander-Golob'
//   }
// ];

// export const PressPageTemplate = ({ heading, links, image }) => (
//   <Layout>
//     <Heading>{heading}</Heading>
//     <LinksContainer>
//       {links.map(({ content, path }, i) => (
//         <LinkContainer key={i} to={path}>
//           <LinkBox>{content}</LinkBox>
//         </LinkContainer>
//       ))}
//     </LinksContainer>
//     <Header
//       image={image}
//       title='Title Golob Art is Cool'
//       subtitle='After long studies and many experiments, it has been determined that Golob Art, is, in face, cool'
//       author='Alexander Golob'
//       date='March 4, 2019'
//       content='Alexander Golob has experience engaging with communities, conducting research, and developing and implementing art and placemaking policy, strategy, and integration. His studio has worked with city governments on policy and implementation, non-profits embarking upon art initiative, and early stage start-ups looking for guidance. Art provides benefits for sense of community, business, marketing, and health. Sometimes, it helps to have an artist to integrate that perspective into a community, business, or project.'
//     />

//     <Posts posts={posts} />
//   </Layout>
// );

// export default ({ data }) => (
//   <PressPageTemplate {...data.markdownRemark.frontmatter} />
// );

// export const query = graphql`
//   query($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       frontmatter {
//         heading
//         links {
//           content
//           path
//         }
//         image
//       }
//     }
//   }
// `;
