import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import { media } from '../components/ThemeProvider';
import Layout from '../components/Layout';
import Header from '../components/PageHeader';

import LightMarble from '../components/LightMarble';
import GreenMarble from '../components/GreenMarble';

const Statement = styled.div`
  position: relative;
  margin: 1em auto;
  border: ${props => props.theme.misc.frameBorder};
  padding: 10px;
  text-align: center;
  font-family: ${props => props.theme.fonts.serif};
  font-weight: 600;
  font-size: 1.35rem;

  ${media.mobile`font-size: 1.15em;`}
`;

const Form = styled(FormikForm)`
  display: grid;
  grid-template-columns: 250px 300px auto;
  grid-template-rows: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  grid-template-areas:
    'Image Fields Fields'
    '. Submit .';

  ${media.tablet`
    display: flex;
    flex-direction: column;
  `}
`;

const Image = styled(GatsbyImage)`
  grid-area: Image;
  border: ${props => props.theme.misc.frameBorder};

  ${media.tablet`
    margin-bottom: 1em;
    height: 300px;
  `}

  ${media.mobile`
    height: 200px;
  `}
`;

const Fields = styled.div`
  grid-area: Fields;
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  padding: 15px 15px 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 0.5em;
  grid-row-gap: 2.15em;
  grid-template-areas:
    'Email Email .'
    'FName LName .';
  font-family: ${props => props.theme.fonts.serif};

  ${media.laptop`
    grid-template-columns: 1fr 1fr;
  `}
`;

const Label = styled.label`
  position: relative;
`;

const Email = styled(Label)`
  grid-area: Email;
  width: 85%;

  ${media.mobile`
    width: 100%;
  `}
`;

const FName = styled(Label)`
  grid-area: FName;
`;

const LName = styled(Label)`
  grid-area: LName;
`;

const LabelText = styled.div`
  margin-bottom: 1em;
  font-weight: 600;

  ${media.mobile`
    margin-bottom: 0.25em;
  `}
`;

const Input = styled(Field)`
  display: block;
  width: 100%;
  background: ${props => props.theme.colors.inputBackground};
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-family: ${props => props.theme.fonts.sansSerif};
`;

const ErrorContainer = styled.div`
  position: absolute;
  top: 100%;
  font-size: 0.9em;
  left: 16px;

  ${media.mobile`
    font-size: 0.8em;
  `}
`;

const Submit = styled.button.attrs({ type: 'submit' })`
  grid-area: Submit;
  position: relative;
  z-index: 1;
  margin-top: 0.5em;
  width: 100%;
  cursor: pointer;
  border: ${props => props.theme.misc.frameBorder};
  background: none;
  padding: 4px 0;
  font-family: ${props => props.theme.fonts.serif};
  font-weight: 600;
  font-size: 1.2rem;

  :disabled {
    cursor: auto;
    color: inherit;
  }

  ${media.tablet`
    margin: 0.5em auto auto;
    width: 40%;
  `}

  ${media.mobile`width: 100%;`}
`;

const initialValues = {
  email: '',
  FNAME: '',
  LNAME: ''
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  FNAME: Yup.string().required('Required'),
  LNAME: Yup.string().required('Required')
});

const onSubmit = async (
  values,
  { setStatus, setSubmitting, setFieldError, errors }
) => {
  console.log({ errors, values });
  setSubmitting(true);
  const { email, ...fields } = values;

  try {
    const response = await addToMailchimp(email, fields);

    setSubmitting(false);
    setStatus({ success: response.result === 'success' });

    // set error if api returns error (always returns 200), and concat some errors
    if (response.result === 'error') {
      if (response.msg.includes(`${email} is already subscribed`)) {
        setFieldError('email', `${email} is already subscribed.`);
      } else if (
        response.msg.includes(`${email} is an invalid email address`)
      ) {
        setFieldError('email', `${email} is an invalid email address.`);
      } else if (
        response.msg.includes(
          `Recipient "${email}" has too many recent signup requests`
        )
      ) {
        setFieldError('email', 'Something went wrong. Please try again.');
      } else if (response.msg.includes('Too many subscribe attempts')) {
        setFieldError('email', `Too many subscription requests!`);
      } else {
        setFieldError('email', response.msg);
      }
    }
  } catch (e) {
    setSubmitting(false);
    setStatus({ success: false });
    setFieldError('email', 'Something went wrong. Please try again.');
  }
};

export const SubscribePageTemplate = ({
  title,
  description,
  ogImage,
  heading,
  links,
  statement,
  image
}) => (
  <Layout head={{ title, description, ogImage }}>
    <Header heading={heading} pageLinks={links} />

    <Statement>
      <LightMarble />
      {statement}
    </Statement>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, status }) => (
        <Form>
          <Image fluid={image} />

          <Fields>
            <Email>
              <LabelText>EMAIL</LabelText>
              <Input name='email' />
              <ErrorContainer>
                <ErrorMessage name='email' />
              </ErrorContainer>
            </Email>
            <FName>
              <LabelText>FIRST NAME</LabelText>
              <Input name='FNAME' />
              <ErrorContainer>
                <ErrorMessage name='FNAME' />
              </ErrorContainer>
            </FName>
            <LName>
              <LabelText>LAST NAME</LabelText>
              <Input name='LNAME' />
              <ErrorContainer>
                <ErrorMessage name='LNAME' />
              </ErrorContainer>
            </LName>
          </Fields>

          <Submit disabled={isSubmitting} success={status && status.success}>
            <GreenMarble />
            {isSubmitting
              ? 'SUBMITTING...'
              : status && status.success
              ? 'SUBSCRIBED !'
              : 'SUBMIT'}
          </Submit>
        </Form>
      )}
    </Formik>
  </Layout>
);

export default ({ data }) => (
  <SubscribePageTemplate
    {...data.markdownRemark.frontmatter}
    ogImage={data.markdownRemark.frontmatter.ogImage.childImageSharp.fluid.src}
    image={data.markdownRemark.frontmatter.image.childImageSharp.fluid}
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
