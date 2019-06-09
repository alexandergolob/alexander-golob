import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Image from "gatsby-image";

import { media } from "../components/ThemeProvider";
import Layout from "../components/Layout";
import Header from "../components/PageHeader";

const FormAndBanner = styled.section`
  margin-top: 2em;
  display: flex;

  ${media.laptop`
    margin-left: auto;
    margin-right: auto;
    max-width: 700px;
    flex-direction: column-reverse;
    align-items: center;    
    `}
  ${media.mobile`margin-top: 1em;`}
`;

const Form = styled.form`
  margin-right: 1em;
  width: 100%;
  max-width: 500px;
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  padding: 10px 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1em;
  grid-row-gap: 0.5em;
  grid-template-areas:
    "Email Email"
    "FName LName"
    "Subject Subject"
    "Message Message"
    "Submit Submit";

  ${media.laptop`
    margin-right: 0;
    margin-top: 2em;    
  `}

  ${media.tablet`margin-top: 1em;`}
`;

const Field = styled.label``;

const Label = styled.div`
  margin-bottom: 0.2em;
  font-family: ${props => props.theme.fonts.serif};
  font-weight: 600;
  font-size: 1.15em;

  ${media.mobile`font-size: 1em;`}
`;

const Input = styled.input`
  display: block;
  width: 100%;
  background: hsl(0, 0%, 85%);
  border: none;
  border-radius: 4px;
  padding: 6px 8px;
  font-size: 1em;
`;

const Textarea = styled(Input).attrs({ as: "textarea" })`
  resize: vertical;
  min-height: 150px;
  font-size: 1em;
  font-family: inherit;
`;

const Email = styled(Field)`
  grid-area: Email;
`;

const FName = styled(Field)`
  grid-area: FName;
`;

const LName = styled(Field)`
  grid-area: LName;
`;

const Subject = styled(Field)`
  grid-area: Subject;
`;

const Message = styled(Field)`
  grid-area: Message;
`;

const Submit = styled.button`
  grid-area: Submit;
  margin-top: 0.5em;
  margin-right: 2em;
  cursor: pointer;
  padding: 4px 8px;
  border: 1px solid #000;
  background-image: url("/assets/empty-square-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  font-family: ${props => props.theme.fonts.serif};
  font-size: 1.5rem;
  font-weight: 600;

  ${media.mobile`font-size: 1.15em;`}
`;

const Banner = styled.div`
  flex: 1;
  position: relative;
  border: 2px solid ${props => props.theme.colors.dark};

  ${media.laptop`
    flex: auto;
    width: 100%;
    padding: 125px 75px;
    display: grid;
    place-items: center;
  `}

  ${media.tablet`padding: 100px 50px;`}
  ${media.mobile`padding: 25px;`}
`;

const BannerBG = styled(Image)`
  /* override js-injected position */
  position: absolute !important;

  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const BannerText = styled.div`
  position: relative;
  z-index: 2;
  margin: auto;
  margin-top: 1.5em;
  width: 80%;
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  padding: 12px 20px;
  font-family: ${props => props.theme.fonts.serif};
  font-size: 1.15em;
  font-weight: 600;

  ${media.laptop`margin: 0; width: 100%;`}
  ${media.mobile`padding: 5px 10px; font-size: 1em;`}
`;

export const ContactPageTemplate = ({ heading, links, statement, image }) => (
  <Layout>
    <Header heading={heading} pageLinks={links} />
    <FormAndBanner>
      <Form>
        <Email>
          <Label>EMAIL</Label>
          <Input />
        </Email>
        <FName>
          <Label>FIRST NAME</Label>
          <Input />
        </FName>
        <LName>
          <Label>LAST NAME</Label>
          <Input />
        </LName>
        <Subject>
          <Label>SUBJECT</Label>
          <Input />
        </Subject>
        <Message>
          <Label>MESSAGE</Label>
          <Textarea />
        </Message>
        <Submit>SUBMIT</Submit>
      </Form>

      <Banner>
        <BannerBG fluid={image} />
        <BannerText>{statement}</BannerText>
      </Banner>
    </FormAndBanner>
  </Layout>
);

export default ({ data }) => (
  <ContactPageTemplate
    {...data.markdownRemark.frontmatter}
    image={data.markdownRemark.frontmatter.image.childImageSharp.fluid}
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
        statement
        image {
          childImageSharp {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
