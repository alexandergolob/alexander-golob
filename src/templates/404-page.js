import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';

import { media } from '../components/ThemeProvider';
import Layout from '../components/Layout';
import UnstyledFinalCTA from '../components/FinalCTA';
import InternalLink from '../components/InternalLink';

const Container = styled.div`
  background: ${props => props.theme.colors.offLight};
  border: ${props => props.theme.misc.frameBorder};
  padding: 2em 3em;
  font-family: ${props => props.theme.fonts.serif};

  ${media.tablet`padding: 1em 1.5em; font-size: 0.8em;`}
  ${media.mobile`padding: 1em; font-size: 0.6em;`}
`;

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  font-weight: 600;
`;

const Subtitle = styled(Title).attrs({ as: 'div' })``;

const PreImage = styled(Subtitle)`
  margin: 1em 0;
  font-size: 1.75em;
`;

const Image = styled(GatsbyImage)`
  margin: auto;
  max-width: 500px;
  height: 250px;

  ${media.mobile`height: 200px;`}
`;

const PreLink = styled(PreImage)`
  margin-bottom: 0;
`;

const PreContact = styled(PreImage)`
  margin-bottom: 0.5em;
`;

const FinalCTAContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FinalCTA = styled(UnstyledFinalCTA)`
  font-size: 1.5em;
  ${media.mobile`width: 100%; padding: 0.25em 1em;`}
`;

const Links = styled.div`
  font-size: 1.75em;
  text-align: center;
  font-weight: 400;
`;

const PageLink = styled(InternalLink)``;

export const Template = ({
  title,
  subtitle,
  preImage,
  image,
  preLink,
  preContact
}) => (
  <Layout>
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <PreImage>{preImage}</PreImage>
      <Image fluid={image} alt='' />
      <PreLink>{preLink}</PreLink>
      <Links>
        <PageLink to='/'>Home</PageLink>
        {' - '}
        <PageLink to='/portfolio'>Portfolio</PageLink>
        {' - '}
        <PageLink to='/art'>Art</PageLink> -<PageLink to='/blog'>Blog</PageLink>
        {' - '}
        <PageLink to='/about'>About</PageLink>
      </Links>
      <PreContact>{preContact}</PreContact>
      <FinalCTAContainer>
        <FinalCTA />
      </FinalCTAContainer>
    </Container>
  </Layout>
);

export default ({ data }) => (
  <Template
    {...data.markdownRemark.frontmatter}
    image={data.markdownRemark.frontmatter.image.childImageSharp.fluid}
  />
);

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        preImage
        image {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        preLink
        preContact
      }
    }
  }
`;
