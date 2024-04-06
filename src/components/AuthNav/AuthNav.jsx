import React, { useState } from 'react';
import { AuthWrapper, StyledIcon, StyledLink } from './AuthNav.styled';
import LoginModal from 'components/LoginForm/LoginForm';

export const AuthNav = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  console.log('login modal open', isLoginModalOpen);

  const openModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  return (
    <>
      <AuthWrapper>
        <StyledLink onClick={openModal}>
          <StyledIcon />
        </StyledLink>
      </AuthWrapper>
      {isLoginModalOpen && <LoginModal onLoginClose={openModal} />}
    </>
  );
};
