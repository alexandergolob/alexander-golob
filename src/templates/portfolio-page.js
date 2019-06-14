import React from 'react';
// import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Carousel from '../components/Carousel';

export const Template = ({ images }) => (
  <Layout>
    <Carousel images={images} />
  </Layout>
);

export default ({ data: { portfolio } }) => (
  <Template
    {...portfolio.frontmatter}
    images={portfolio.frontmatter.carouselImages.map(carouselImage => ({
      ...carouselImage,
      image: carouselImage.image.childImageSharp.fluid
    }))}
  />
);

export const query = graphql`
  query($id: String!) {
    portfolio: markdownRemark(id: { eq: $id }) {
      frontmatter {
        carouselImages {
          description
          image {
            childImageSharp {
              fluid(maxWidth: 1050) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
