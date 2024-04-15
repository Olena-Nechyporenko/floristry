import React from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import Notiflix from 'notiflix';
import { Formik, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartProducts } from 'redux/cart/selectors';
import { loadStripe } from '@stripe/stripe-js';
import { addToOrder } from 'redux/orders/ordersSlice';
import {
  StyledButton,
  StyledForm,
  StyledFormField,
} from './PaymentForm.styled';

const notiflixShowOptions = {
  width: '340px',
  titleFontSize: '20px',
  messageFontSize: '18px',
  titleColor: '#556b2f',
  okButtonBackground: '#556b2f',
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
  const dispatch = useDispatch();
  const orderedBouquets = useSelector(selectCartProducts);

  const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

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
        'Order payment',
        `Go to order payment?`,
        'Yes',
        'No',
        async function () {
          dispatch(addToOrder(newOrder));
          const lineItems = orderedBouquets.map(item => {
            return {
              price_data: {
                currency: 'eur',
                product_data: {
                  name: item.name,
                  description: item.description,
                  images: [item.url],
                },
                unit_amount: item.price * 100,
              },
              quantity: item.quantity,
            };
          });

          const { data } = await axios.post(
            'https://floristry-backend.onrender.com/api/checkout',
            {
              lineItems,
            }
          );

          const stripe = await stripePromise;
          await stripe.redirectToCheckout({ sessionId: data.id });
        },
        function () {
          return;
        },
        notiflixShowOptions
      );
    } catch (error) {
      console.error('Error:', error.message);
    }
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
