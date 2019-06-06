import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import { media } from '../components/ThemeProvider';
import Layout from '../components/Layout';
import Header from '../components/PageHeader';

const Statement = styled.div`
  margin: 1em auto;
  border: ${props => props.theme.misc.frameBorder};
  background-image: url('/assets/light-marble.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding: 10px;
  text-align: center;
  font-family: ${props => props.theme.fonts.serif};
  font-weight: 600;
  font-size: 1.35rem;

  ${media.mobile`font-size: 1.15em;`}
`;

// const Form = styled.form`
//   margin: auto;
//   width: 90%;
//   display: grid;
//   grid-template-columns: 200px 300px auto;
//   grid-template-rows: auto auto;
//   grid-column-gap: 20px;
//   grid-row-gap: 10px;
//   grid-template-areas:
//     'Image Fields Fields'
//     '. Submit .';
// `;

// const ImageContainer = styled(FrameBox)`
//   grid-area: Image;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   /* overflow: hidden; */
// `;

// const Image = styled.img`
//   display: block;
//   width: 100%;
//   height: 100%;
// `;

// const FieldsContainer = styled(FrameBox)`
//   grid-area: Fields;
//   padding: 15px 15px 30px;
// `;

// const Fields = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   grid-column-gap: 10px;
//   grid-row-gap: 20px;
//   grid-template-areas:
//     'Email Email .'
//     'FName LName .';
// `;

// const Field = styled.label`
//   /* background: blue;
//   display: block; */
// `;

// const Email = styled(Field)`
//   grid-area: Email;
//   width: 85%;
// `;

// const FName = styled(Field)`
//   grid-area: FName;
// `;

// const LName = styled(Field)`
//   grid-area: LName;
// `;

// const Label = styled.div`
//   margin-bottom: 15px;
//   font-weight: 900;
// `;

// const Input = styled.input`
//   display: block;
//   width: 100%;
//   background: hsl(0, 0%, 85%);
//   border: none;
//   border-radius: 4px;
//   padding: 8px 16px;
// `;

// const SubmitContainer = styled(FrameBox)`
//   grid-area: Submit;
//   margin-top: 10px;
// `;

// const Submit = styled.button`
//   width: 100%;
//   cursor: pointer;
//   padding: 4px 0;
//   border: 1px solid #000;
//   background-image: url('/assets/empty-square-bg.png');
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center center;
//   font-weight: 900;
//   font-size: 1.2rem;
// `;

export const SubscribePageTemplate = ({ heading, links, statement, image }) => (
  <Layout>
    <Header heading={heading} pageLinks={links} />

    <Statement>{statement}</Statement>
    {/* <Form>
      <ImageContainer>
        <Image src={image} alt='' />
      </ImageContainer>
      <FieldsContainer>
        <Fields>
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
        </Fields>
      </FieldsContainer>

      <SubmitContainer>
        <Submit type='button'>SUBMIT</Submit>
      </SubmitContainer>
    </Form> */}
  </Layout>
);

export default ({ data }) => (
  <SubscribePageTemplate
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
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
