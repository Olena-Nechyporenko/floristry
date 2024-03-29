import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import {
  Title,
  Text,
  FormWrapper,
  StyledButton,
  StyledForm,
  StyledFormField,
} from './WeddingForm.styled';

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
  const handleSubmit = values => {
    console.log('Form submitted:', values);
  };

  return (
    <>
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
                <label htmlFor="email">Email</label>
                <Field name="email" />
                {errors.email && touched.email && (
                  <div className="error">{errors.email}</div>
                )}
              </StyledFormField>
              <StyledButton type="submit">Submit</StyledButton>
            </StyledForm>
          )}
        </Formik>
      </FormWrapper>
    </>
  );
};
