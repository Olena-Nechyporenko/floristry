import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  StyledInput,
  ErrorMessageStyled,
  InputWrapper,
  StyledCloseIcon,
  StyledTitle,
  StyledButton,
} from './LoginForm.styled';
import RegisterModal from 'components/RegisterForm/RegisterForm';

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

const LoginModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleCloseLoginModal = () => {
    onClose();
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
    console.log('open');
    console.log(isRegisterModalOpen);
    // handleCloseLoginModal();
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
    handleCloseLoginModal();
  };

  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(7, 'Password must be at least 7 characters')
      .required('Password is required'),
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseLoginModal}
      style={customStyles}
    >
      <StyledTitle>Please sign in</StyledTitle>
      <InputWrapper>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          {({ handleSubmit }) => (
            <StyledForm onSubmit={handleSubmit} autoComplete="off">
              <StyledInput type="email" name="email" placeholder="Email" />
              <ErrorMessageStyled name="email" component="div" />
              <StyledInput
                type="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessageStyled name="password" component="div" />
              <StyledButton type="submit" variant="contained" color="primary">
                Log In
              </StyledButton>
            </StyledForm>
          )}
        </Formik>
      </InputWrapper>
      <p>
        If you don't have account yet please{' '}
        <button
          onClick={() => {
            openRegisterModal();
          }}
        >
          sign up
        </button>
      </p>
      <StyledCloseIcon onClick={handleCloseLoginModal} />

      {isRegisterModalOpen && (
        <RegisterModal
          isOpen={isRegisterModalOpen}
          onClose={() => setIsRegisterModalOpen(false)}
        />
      )}
    </Modal>
  );
};

export default LoginModal;
