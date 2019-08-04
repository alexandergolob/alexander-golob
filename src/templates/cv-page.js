import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import { media } from '../components/ThemeProvider';
import Layout from '../components/Layout';
import Header from '../components/PageHeader';
import PageHeading from '../components/PageHeading';
import ExternalLink from '../components/ExternalLink';
import UnstyledFinalCTA from '../components/FinalCTA';

import LightMarble from '../components/LightMarble';

const CVDownloadContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CVDownloadButton = styled(PageHeading).attrs({
  as: ExternalLink
})`
  position: relative;
  margin: 1em 0;
  min-width: auto;
  background: none;
  display: inline-block;
  font-size: 1.25em;

  ${media.tablet`width: 100%; padding: 5px 30px; font-size: 1.25em;`}
`;

const CVContainer = styled.section`
  margin: 0 auto 1em;
  width: 80%;
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  padding: 40px 60px;

  ${media.laptop`width: 95%;`}
  ${media.tablet`
    width: 100%;
    padding: 20px 30px;
    font-size: 0.9em;
  `}
  ${media.mobile`padding: 15px 20px; font-size: 0.75em;`}  
`;

const CVHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  margin-bottom: 1.25em;
  font-family: ${props => props.theme.fonts.serif};
  font-weight: 700;
  font-size: 1.05em;
`;

const Name = styled.h3`
  font-family: ${props => props.theme.fonts.serif};
  font-size: 1.05em;
  font-weight: 700;
`;

const PersonalDetails = styled.ul`
  margin-bottom: 1em;
  list-style-type: none;
`;

const PersonalDetail = styled.li`
  margin-bottom: 1px;
  :last-of-type {
    margin-bottom: 0;
  }
`;

const Photo = styled(Image)`
  display: block;
  width: 175px;
  height: 175px;

  ${media.tablet`width: 150px; height: 150px;`}
  ${media.mobile`width: 125px; height: 125px;`}
  ${media.mobileL`width: 100px; height: 100px;`}
`;

const CVSection = styled.div`
  margin-bottom: 1.15em;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h3`
  margin-bottom: 2px;
  font-family: ${props => props.theme.fonts.serif};
  font-size: 1.05em;
  font-weight: 700;
`;

const Item = styled.div`
  margin-bottom: 2px;
  :last-of-type {
    margin-bottom: 0;
  }
  display: flex;
`;

const ItemYear = styled.div`
  margin-right: 3.5em;

  ${media.mobile`margin-right: 2em;`}
`;

const ItemContent = styled.ul`
  flex-grow: 1;
  list-style-type: none;
`;

const ItemContentLine = styled.li`
  margin-bottom: 2px;
  :last-of-type {
    margin-bottom: 0;
  }
`;

const FinalCTAContainer = styled.div`
  margin: 2em 0;
  display: flex;
  justify-content: center;
`;

const FinalCTA = styled(UnstyledFinalCTA)`
  ${media.mobile`width: 100%; padding: 0.25em 1em;`}
`;

export const CVPageTemplate = ({
  title,
  description,
  ogImage,
  heading,
  links,
  CVButton,
  CV
}) => (
  <Layout head={{ title, description, ogImage }}>
    <Header heading={heading} pageLinks={links} />

    <CVDownloadContainer>
      <CVDownloadButton href={`${CVButton.filename.publicURL}`}>
        <LightMarble />
        {CVButton.content}
      </CVDownloadButton>
    </CVDownloadContainer>

    <CVContainer>
      <CVHeader>
        <div>
          <Title>{CV.title}</Title>
          <Name>{CV.name}</Name>
          <PersonalDetails>
            {CV.personalDetails.map((detail, i) => (
              <PersonalDetail key={i}>{detail}</PersonalDetail>
            ))}
          </PersonalDetails>
        </div>
        <Photo fluid={CV.image.childImageSharp.fluid} alt={CV.alt} />
      </CVHeader>

      {CV.sections.map((section, i) => (
        <CVSection key={i}>
          <SectionTitle>{section.title}</SectionTitle>
          {section.items.map((item, j) => (
            <Item key={j}>
              <ItemYear>{item.year}</ItemYear>
              <ItemContent>
                {item.bulletPoints.map((point, k) => (
                  <ItemContentLine key={k}>{point}</ItemContentLine>
                ))}
              </ItemContent>
            </Item>
          ))}
        </CVSection>
      ))}
    </CVContainer>

    <FinalCTAContainer>
      <FinalCTA />
    </FinalCTAContainer>
  </Layout>
);

export default ({ data }) => (
  <CVPageTemplate
    {...data.markdownRemark.frontmatter}
    ogImage={data.markdownRemark.frontmatter.ogImage.childImageSharp.fluid.src}
  />
);

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        ogImage {
          childImageSharp {
            fluid(maxWidth: 250, maxHeight: 250) {
              src
            }
          }
        }
        heading
        links {
          content
          path
        }
        CVButton {
          content
          filename {
            publicURL
          }
        }
        CV {
          title
          name
          personalDetails
          image {
            childImageSharp {
              fluid(maxWidth: 175) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          alt
          sections {
            title
            items {
              year
              bulletPoints
            }
          }
        }
      }
    }
  }
`;
