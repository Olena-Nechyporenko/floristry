import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import {
  StyledButton,
  StyledForm,
  StyledFormField,
} from './DeliveryForm.styled';

const initialValues = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  address: '',
  deliveryDate: '',
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  phoneNumber: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  deliveryDate: Yup.date().required('Required'),
});

export const PaymentForm = () => {
  const handleSubmit = values => {
    console.log('Form submitted:', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <StyledForm>
          <StyledFormField>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" />
            {errors.firstName && touched.firstName && (
              <div className="error">{errors.firstName}</div>
            )}
          </StyledFormField>
          <StyledFormField>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" />
            {errors.lastName && touched.lastName && (
              <div className="error">{errors.lastName}</div>
            )}
          </StyledFormField>
          <StyledFormField>
            <label htmlFor="phoneNumber">Phone Number</label>
            <Field
              type="tel"
              name="phoneNumber"
              placeholder="Enter phone number"
            />
            {errors.phoneNumber && touched.phoneNumber && (
              <div className="error">{errors.phoneNumber}</div>
            )}
          </StyledFormField>

          <StyledFormField>
            <label htmlFor="address">Address</label>
            <Field name="address" />
            {errors.address && touched.address && (
              <div className="error">{errors.address}</div>
            )}
          </StyledFormField>
          <StyledFormField>
            <label htmlFor="deliveryDate">Delivery Date</label>
            <Field type="date" name="deliveryDate" />
            {errors.deliveryDate && touched.deliveryDate && (
              <div className="error">{errors.deliveryDate}</div>
            )}
          </StyledFormField>
          <StyledButton type="submit">Continue</StyledButton>
        </StyledForm>
      )}
    </Formik>
  );
};
