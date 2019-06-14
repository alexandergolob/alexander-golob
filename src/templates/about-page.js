import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import { media } from '../components/ThemeProvider';
import Layout from '../components/Layout';
import Header from '../components/PageHeader';
import Link from '../components/Link';
import ExpandableContent from '../components/ExpandableContent';
import FinalCTA from '../components/FinalCTA';

const Section = styled.section``;

const Heading = styled.h2`
  border: ${props => props.theme.misc.frameBorder};
  background-image: url('/assets/light-marble.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding: 8px 10px;
  text-align: center;
  font-family: ${props => props.theme.fonts.serif};
  font-size: 1.5em;
  font-weight: 600;

  ${media.tablet`padding: 5px 10px; font-size: 1.25em;`}
  ${media.mobile`font-size: 1.15em;`}
`;

const Content = styled.div`
  *:first-of-type {
    margin-top: 0;
  }
  *:last-of-type {
    margin-bottom: 0;
  }
  p {
    margin: 0.5em 0;
  }
`;

const MainSection = styled(Section)`
  margin: 1em 0;
`;

const MainContent = styled(Content)`
  margin: 0.25em auto 0;
  width: 95%;
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  padding: 15px;
  text-align: center;
  font-family: ${props => props.theme.fonts.serif};

  ${media.tablet`width: 100%; text-align: left; font-size: 0.90em;`}
`;

const TeamSection = styled(Section)`
  width: 97.5%;
  margin: 0.5em 0;

  ${media.tablet`width: 100%;`}
`;

const TeamMember = styled.div`
  display: flex;
  margin-bottom: 0.75em;

  ${media.tablet`flex-direction: column-reverse;`}
`;

const TeamMemberDescription = styled.div`
  margin-right: 0.75em;
  flex: 1;

  ${media.tablet`margin-right: 0;`}
`;

const TeamHeadingContainer = styled(Heading).attrs({ as: 'div' })`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TeamHeading = styled.h2`
  flex: 1;
  text-align: center;
  font-size: 1em;
`;

const TeamLink = styled(Link)`
  min-width: 75px;
  border: ${props => props.theme.misc.frameBorder};
  background-image: url('/assets/empty-square-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding: 2px 10px;
  text-align: center;
  font-size: 0.75em;
`;

const TeamContent = styled(ExpandableContent)`
  margin-top: 0.25em;
`;

const TeamImage = styled(Image)`
  display: block;
  border: ${props => props.theme.misc.frameBorder};
  width: 300px;
  height: 300px;

  ${media.tablet`margin: 0.25em 0; width: 100%;`}
  ${media.mobile`height: 200px;`}
`;

const FinalCTAContainer = styled.div`
  margin: 2em 0;
  display: flex;
  justify-content: center;
`;

export const AboutPageTemplate = ({
  heading,
  links,
  companyDescription,
  teamSection
}) => (
  <Layout>
    <Header heading={heading} pageLinks={links} />

    <MainSection>
      <Heading>{companyDescription.heading}</Heading>
      <MainContent
        dangerouslySetInnerHTML={{ __html: companyDescription.content }}
      />
    </MainSection>

    <TeamSection>
      {teamSection.map(
        ({ heading, CVLink, image, contentHeading, content }, i) => (
          <TeamMember key={i}>
            <TeamMemberDescription>
              <TeamHeadingContainer>
                <TeamHeading>{heading}</TeamHeading>
                <TeamLink external={CVLink.external} path={CVLink.path}>
                  {CVLink.content}
                </TeamLink>
              </TeamHeadingContainer>
              <TeamContent heading={contentHeading} content={content} />
            </TeamMemberDescription>
            <TeamImage alt='' fluid={image.childImageSharp.fluid} />
          </TeamMember>
        )
      )}
    </TeamSection>
    <FinalCTAContainer>
      <FinalCTA />
    </FinalCTAContainer>
  </Layout>
);

export default ({ data }) => (
  <AboutPageTemplate
    {...data.markdownRemark.frontmatter}
    companyDescription={{
      ...data.markdownRemark.frontmatter.companyDescription,
      content: data.markdownRemark.fields.companyDescription.content
    }}
    teamSection={data.markdownRemark.frontmatter.teamSection.map(
      (section, i) => ({
        ...section,
        content: data.markdownRemark.fields.teamSection[i].content
      })
    )}
  />
);

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        heading
        links {
          content
          path
        }
        companyDescription {
          heading
        }
        teamSection {
          heading
          CVLink {
            content
            external
            path
          }
          image {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          contentHeading
        }
      }
      fields {
        companyDescription {
          content
        }
        teamSection {
          content
        }
      }
    }
  }
`;
