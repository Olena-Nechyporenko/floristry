import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrent, register } from 'redux/auth/operations';
import * as Yup from 'yup';
import {
  BackDrop,
  Modal,
  ModalContainer,
  CloseIcon,
  StyledForm,
  StyledLabel,
  StyledInput,
  ErrorMessageStyled,
  StyledButton,
  StyledTitle,
} from './RegisterForm.styled';
import { Formik } from 'formik';

const initialValues = { email: '', password: '' };

const schema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string()
    .min(7, 'Password must be at least 7 characters')
    .required('Password is required'),
});

const RegisterModal = ({ onClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleCloseOnKeydown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleCloseOnKeydown);

    return () => {
      window.removeEventListener('keydown', handleCloseOnKeydown);
    };
  }, [onClose]);

  const handleCloseOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(register(values));
      await dispatch(getCurrent);
      resetForm();

      onClose();
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <BackDrop onClick={handleCloseOnBackdrop}>
      <Modal>
        <ModalContainer>
          <CloseIcon onClick={onClose} />
          <StyledTitle>Please sign up</StyledTitle>

          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            {({ dirty, isValid }) => (
              <StyledForm autoComplete="off">
                <StyledLabel htmlFor="email">
                  <StyledInput type="email" name="email" placeholder="Email" />
                  <ErrorMessageStyled name="email" component="div" />
                </StyledLabel>
                <StyledLabel htmlFor="password">
                  <StyledInput
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <ErrorMessageStyled name="password" component="div" />
                </StyledLabel>
                <StyledButton
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!dirty || !isValid}
                >
                  Register
                </StyledButton>
              </StyledForm>
            )}
          </Formik>
        </ModalContainer>
      </Modal>
    </BackDrop>
  );
};

export default RegisterModal;
