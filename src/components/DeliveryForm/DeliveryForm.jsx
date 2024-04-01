import React from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import {
  StyledButton,
  StyledForm,
  StyledFormField,
} from './DeliveryForm.styled';
import { useSelector } from 'react-redux';
import { selectCartProducts } from 'redux/selectors';

const notiflixShowOptions = {
  width: '340px',
  titleFontSize: '20px',
  messageFontSize: '18px',
  titleColor: '#556b2f',
  okButtonBackground: '#556b2f',
};

const notiflixSuccessOptions = {
  fontSize: '17px',
  success: { background: '#e6b8ca', textColor: '#161616' },
};

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
  const orderedBouquets = useSelector(selectCartProducts);

  const handleSubmit = async values => {
    const newOrder = {
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      address: values.address,
      deliveryDate: values.deliveryDate,
      bouquets: [...orderedBouquets],
    };
    try {
      Notiflix.Confirm.show(
        'Sending the order',
        `Send your order?`,
        'Yes',
        'No',
        async function () {
          const response = await axios.post(
            'https://floristry-backend.onrender.com/api/orders',
            newOrder
          );
          console.log('Response from server:', response.data);
          Notiflix.Notify.success(
            'Your order has been sent successfully! Thank you!',
            notiflixSuccessOptions
          );
        },
        function () {
          return;
        },
        notiflixShowOptions
      );
    } catch (error) {
      console.error('Error:', error.message);
    }
    // console.log('Form submitted:', newOrder);
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
