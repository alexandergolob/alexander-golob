import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import { media } from '../components/ThemeProvider';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
// import Header from '../components/PageHeader';

const Header = styled.header`
  margin-bottom: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.tablet`flex-direction: column;`}
`;

const Heading = styled(PageHeading)`
  background-image: url('/assets/light-marble.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  font-size: 1.5em;

  ${media.tablet`
    margin-bottom: 0.5em;
    width: 100%;
    padding: 15px 30px;
  `}
`;

const CVDownloadButton = styled(PageHeading).attrs({
  as: 'button'
})`
  font-size: 1.25em;
  min-width: auto;

  ${media.tablet`width: 100%; padding: 5px 30px;font-size: 1.25em;`}
`;

const CVContainer = styled.section`
  margin: auto;
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
  ${media.mobile`
    font-size: 0.75em;
  `}
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

export const CVPageTemplate = ({ heading, CVButton, CV }) => (
  <Layout>
    {/* <Header heading={heading} pageLinks={links} /> */}
    <Header>
      <Heading>{heading}</Heading>
      <CVDownloadButton>{CVButton.content}</CVDownloadButton>
    </Header>
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
        <Photo fluid={CV.image.childImageSharp.fluid} />
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
  </Layout>
);

export default ({ data }) => (
  <CVPageTemplate {...data.markdownRemark.frontmatter} />
);

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        heading
        CVButton {
          content
          file
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
