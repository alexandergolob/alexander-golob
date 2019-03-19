import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import FrameBox from '../components/FrameBox';
import Link from '../components/Link';

const HeadingContainer = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

const Heading = styled(FrameBox)`
  display: inline-block;
  padding: 10px 100px;
  font-size: 2.5rem;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const LinkContainer = styled(Link)`
  margin-right: 25px;
  &:last-of-type {
    margin-right: 0;
  }
`;

const LinkBox = styled(FrameBox)`
  padding: 10px 0;
  width: 200px;
  text-align: center;
  font-weight: 900;
`;

const FormAndBanner = styled.div`
  display: flex;
`;

const FormContainer = styled(FrameBox)`
  width: 45%;
  margin-right: 10px;
`;

const Form = styled.form`
  background: hsl(0, 0%, 93%);
  padding: 10px 15px;
  display: grid;
  grid-template-columns: 50% auto 30px;
  grid-column-gap: 8px;
  grid-row-gap: 5px;
  grid-template-areas:
    'Email Email Email'
    'FName LName LName'
    'Subject Subject Subject'
    'Message Message Message'
    'Submit Submit .';
`;

const Field = styled.label`
  /* background: blue; */
`;

const Label = styled.div`
  margin-bottom: 2px;
  font-weight: 900;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  background: hsl(0, 0%, 85%);
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
`;

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  min-height: 100px;
  resize: vertical;
  background: hsl(0, 0%, 85%);
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
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
  margin-top: 10px;
  padding: 4px 0;
  border: 1px solid #000;
  background-image: url('/assets/empty-square-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  font-weight: 900;
  font-size: 1.2rem;
`;

const Banner = styled.div`
  flex-grow: 1;
  background: green;
  border: 2px solid #000;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: canvas;
  background-position: center center;
`;

const BannerText = styled(FrameBox)`
  width: 80%;
  margin: auto;
  margin-top: 20px;
  padding: 15px;
  font-weight: 900;
`;

export const ContactPageTemplate = ({ heading, links, statement, image }) => (
  <Layout>
    <HeadingContainer>
      <Heading>{heading}</Heading>
    </HeadingContainer>
    <LinksContainer>
      {links.map(({ content, path }, i) => (
        <LinkContainer key={i} to={path}>
          <LinkBox>{content}</LinkBox>
        </LinkContainer>
      ))}
    </LinksContainer>
    <FormAndBanner>
      <FormContainer>
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
      </FormContainer>
      <Banner image={image}>
        <BannerText>{statement}</BannerText>
      </Banner>
    </FormAndBanner>
  </Layout>
);

export default ({ data }) => (
  <ContactPageTemplate {...data.markdownRemark.frontmatter} />
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
        image
      }
    }
  }
`;
