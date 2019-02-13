import React from 'react';
import styled from 'styled-components';
import { Formik, Form as UnstyledForm, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';

const Form = styled(UnstyledForm)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(4, auto);
`;

const SubmitButton = styled.button`
  grid-area: SubmitButton;
`;

const UnstyledFieldWithLabelAndError = ({ name, className, ...rest }) => (
  <label className={className}>
    <div>{name}</div>
    <Field name={name} {...rest} />
    <ErrorMessage name={name} />
  </label>
);

const FieldWithLabelAndError = styled(UnstyledFieldWithLabelAndError)`
  /* grid-area: ${({ name }) => name}; */
`;

const validationSchema = object().shape({
  name: string().required(),
  email: string()
    .email()
    .required(),
  subject: string().required(),
  message: string().required()
});

export default () => (
  <Formik
    initialValues={{ name: '', email: '', subject: '', message: '' }}
    validationSchema={validationSchema}
    onSubmit={values => console.log(values)}
  >
    {() => (
      <Form>
        <FieldWithLabelAndError name='name' />
        <FieldWithLabelAndError name='email' />
        <FieldWithLabelAndError name='subject' />
        <FieldWithLabelAndError name='message' component='textarea' />
        <SubmitButton type='submit'>Send</SubmitButton>
      </Form>
    )}
  </Formik>
);
