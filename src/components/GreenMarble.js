import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';

const GreenMarble = styled(Image)`
  position: absolute !important;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const query = graphql`
  {
    file(
      sourceInstanceName: { eq: "texture-images" }
      relativePath: { eq: "green-marble.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default props => {
  const data = useStaticQuery(query);

  return <GreenMarble fluid={data.file.childImageSharp.fluid} {...props} />;
};
