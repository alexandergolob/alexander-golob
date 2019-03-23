import React from 'react';
import { graphql } from 'gatsby';

export default ({ data }) => (
  <div>
    {data.allInstaNode.edges
      .map(edge => edge.node.thumbnails[0].src)
      .map(src => (
        <img src={src} alt='' />
      ))}
  </div>
);

export const query = graphql`
  query {
    allInstaNode {
      edges {
        node {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          caption
          # Only available with the public api scraper
          thumbnails {
            src
            config_width
            config_height
          }
          dimensions {
            height
            width
          }
        }
      }
    }
  }
`;
