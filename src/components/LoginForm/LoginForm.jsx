import * as Yup from 'yup';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import RegisterModal from 'components/RegisterForm/RegisterForm';
import {
  BackDrop,
  Modal,
  ModalContainer,
  CloseIcon,
  StyledForm,
  StyledLabel,
  StyledInput,
  ErrorMessageStyled,
  InputWrapper,
  StyledTitle,
  StyledLoginButton,
  StyledRegisterButton,
  StyledText,
} from './LoginForm.styled';

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(7, 'Password must be at least 7 characters')
    .required('Password is required'),
});

const LoginModal = ({ onLoginClose }) => {
  const dispatch = useDispatch();
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  useEffect(() => {
    const handleCloseOnKeydown = e => {
      if (e.key === 'Escape') {
        onLoginClose();
      }
    };
    window.addEventListener('keydown', handleCloseOnKeydown);

    return () => {
      window.removeEventListener('keydown', handleCloseOnKeydown);
    };
  }, [onLoginClose]);

  const handleCloseOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      onLoginClose();
    }
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const handleRegisterClose = () => {
    setIsRegisterModalOpen(false);
    onLoginClose();
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
    onLoginClose();
  };

  return (
    <>
      <BackDrop
        open={isRegisterModalOpen ? false : true}
        onClick={handleCloseOnBackdrop}
      >
        <Modal>
          <ModalContainer>
            <CloseIcon onClick={onLoginClose} />
            <StyledTitle>Please sign in</StyledTitle>
            <InputWrapper>
              <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={schema}
              >
                {({ handleSubmit }) => (
                  <StyledForm onSubmit={handleSubmit} autoComplete="off">
                    <StyledLabel htmlFor="email">
                      <StyledInput
                        type="email"
                        name="email"
                        placeholder="Email"
                      />
                      <ErrorMessageStyled name="email" component="div" />
                    </StyledLabel>
                    <StyledLabel htmlFor="firstName">
                      <StyledInput
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                      <ErrorMessageStyled name="password" component="div" />
                    </StyledLabel>
                    <StyledLoginButton
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      Log In
                    </StyledLoginButton>
                  </StyledForm>
                )}
              </Formik>
              <StyledText>If you don't have an account yet please </StyledText>
              <StyledRegisterButton type="button" onClick={openRegisterModal}>
                Sign up
              </StyledRegisterButton>
            </InputWrapper>
          </ModalContainer>
        </Modal>
      </BackDrop>

      {isRegisterModalOpen && <RegisterModal onClose={handleRegisterClose} />}
    </>
  );
};

export default LoginModal;
