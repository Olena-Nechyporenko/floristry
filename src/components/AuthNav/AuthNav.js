import React, { useState } from 'react';
import { AuthWrapper, StyledIcon, StyledLink } from './AuthNav.styled';
import LoginModal from 'components/LoginForm/LoginForm';

export const AuthNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <AuthWrapper>
      <StyledLink onClick={openModal}>
        <StyledIcon />
      </StyledLink>
      {isModalOpen && <LoginModal isOpen={isModalOpen} onClose={closeModal} />}
    </AuthWrapper>
  );
};
