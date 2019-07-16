import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import { media } from './ThemeProvider';

const Container = styled(Form)`
  position: relative;
  width: 425px;
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  padding: 8px 15px;
  display: inline-flex;
  align-items: center;
  font-size: 0.85em;

  ${media.mobile`flex-direction: column; width: 100%;`}
`;

const Statement = styled.div`
  margin-right: 5px;
  font-weight: 600;

  ${media.mobile`margin: 0;`}
`;

const Input = styled(Field)`
  flex: 1;
  padding: 4px 8px;
  margin-right: 0.5em;
  border: 1px solid #999;
  font-size: inherit;

  ::placeholder {
    text-align: right;
  }
  ${media.mobile`margin: 0.5em 0; width: 100%; ::placeholder { text-align: center; }`}
`;

const ErrorContainer = styled.div`
  position: absolute;
  bottom: -35px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 3px;
  background: ${props => props.theme.colors.dark};
  padding: 5px;
  text-align: center;
  color: ${props => props.theme.colors.offLight};

  ::after {
    content: '';
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;

    border-bottom: 10px solid ${props => props.theme.colors.dark};
  }
`;

const Submit = styled.button.attrs({ type: 'submit' })`
  cursor: pointer;
  border: 1px solid #999;
  background-image: url('/assets/light-marble.svg');
  background-repeat: none;
  background-size: cover;
  background-position: center center;
  padding: 4px 8px;
  font-size: inherit;
  font-weight: 600;

  ${media.mobile`width: 100%;`}
`;

const initialValues = {
  email: ''
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
});

const onSubmit = async (
  values,
  { setStatus, setSubmitting, setFieldError, errors }
) => {
  console.log({ errors, values });
  setSubmitting(true);
  const { email } = values;

  try {
    const response = await addToMailchimp(email);

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

export default ({ ...rest }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({ isSubmitting, status, errors }) => (
      <Container {...rest}>
        <Statement>Get our updates</Statement>
        <Input placeholder='email' name='email' />
        {errors.email && (
          <ErrorContainer>
            <ErrorMessage name='email' />
          </ErrorContainer>
        )}
        <Submit disabled={isSubmitting} success={status && status.success}>
          {isSubmitting
            ? 'Submitting...'
            : status && status.success
            ? 'Subscribed!'
            : 'Submit'}
        </Submit>
      </Container>
    )}
  </Formik>
);
