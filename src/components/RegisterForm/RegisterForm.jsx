import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import * as Yup from 'yup';
import {
  BackDrop,
  Modal,
  ModalContainer,
  CloseIcon,
  StyledInput,
  ErrorMessageStyled,
  InputWrapper,
  StyledForm,
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

          <InputWrapper>
            <Formik
              initialValues={initialValues}
              validationSchema={schema}
              onSubmit={handleSubmit}
            >
              {({ dirty, isValid }) => (
                <StyledForm autoComplete="off">
                  <StyledInput type="email" name="email" placeholder="Email" />
                  <ErrorMessageStyled name="email" component="div" />

                  <StyledInput
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <ErrorMessageStyled name="password" component="div" />

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
          </InputWrapper>
        </ModalContainer>
      </Modal>
    </BackDrop>
  );
};

export default RegisterModal;
