import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import * as Yup from 'yup';
import {
  StyledInput,
  ErrorMessageStyled,
  InputWrapper,
  StyledForm,
  StyledButton,
  StyledTitle,
  StyledCloseIcon,
} from './RegisterForm.styled';
import { Formik } from 'formik';

const initialValues = { email: '', password: '' };

const schema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string()
    .min(7, 'Password must be at least 7 characters')
    .required('Password is required'),
});

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '400px',
  },
};

const RegisterModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(register(values));
      resetForm();
      setIsRegistered(true);
      onClose();
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
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

      <StyledCloseIcon onClick={onClose} />
    </Modal>
  );
};

export default RegisterModal;
