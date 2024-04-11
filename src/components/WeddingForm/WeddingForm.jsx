import Notiflix from 'notiflix';
import { Formik, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import {
  FormSection,
  Title,
  Text,
  FormWrapper,
  StyledButton,
  StyledForm,
  StyledFormField,
} from './WeddingForm.styled';
import { Loader } from 'components/Loader/Loader';
import { useState } from 'react';

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

const emailRegex = /^[^\s@]+@[^\s@]+\.(com|net|ua)$/i;

const initialValues = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Required field'),
  lastName: Yup.string().required('Required field'),
  phoneNumber: Yup.string().required('Required field'),
  email: Yup.string().matches(emailRegex, 'Invalid email format').required(),
});

export const WeddingForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (values, { resetForm }) => {
    const userData = {
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      email: values.email,
    };
    try {
      Notiflix.Confirm.show(
        'Sending contact information',
        `Send your contact details for a consultation?`,
        'Yes',
        'No',

        async function () {
          setIsLoading(true);
          const response = await axios.post(
            'https://floristry-backend.onrender.com/api/consultations',
            userData
          );
          console.log('Response from server:', response.data);
          Notiflix.Notify.success(
            'Your consultation request has been sent! Thank you!',
            notiflixSuccessOptions
          );
          resetForm();
          setIsLoading(false);
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
    <FormSection>
      <Title>
        You can order a consultation on wedding decoration or selection of
        bouquets
      </Title>
      <FormWrapper>
        <Text>
          After sending your contact details, our consultant will contact you as
          soon as possible. Thank you for choosing Bouquet Delivery!
        </Text>

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
                <Field type="tel" name="phoneNumber" />
                {errors.phoneNumber && touched.phoneNumber && (
                  <div className="error">{errors.phoneNumber}</div>
                )}
              </StyledFormField>

              <StyledFormField>
                <label htmlFor="email">Email</label>
                <Field name="email" />
                {errors.email && touched.email && (
                  <div className="error">{errors.email}</div>
                )}
              </StyledFormField>
              {isLoading ? (
                <StyledButton type="submit">
                  <Loader width={40} height={40} />
                </StyledButton>
              ) : (
                <StyledButton type="submit">Submit</StyledButton>
              )}
            </StyledForm>
          )}
        </Formik>
      </FormWrapper>
    </FormSection>
  );
};
