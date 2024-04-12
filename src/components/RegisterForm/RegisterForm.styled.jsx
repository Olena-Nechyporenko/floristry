import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';
import { IoClose } from 'react-icons/io5';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(177, 177, 177, 0.5);
`;

export const Modal = styled.div`
  position: absolute;
  z-index: 20px;
  width: 340px;
  border: 1px solid var(--main-green-color);
  border-radius: 8px;
  background-color: #f7f7f7;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 90%;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  padding: 24px;
`;

export const CloseIcon = styled(IoClose)`
  font-size: 24px;
  fill: var(--main-dark-text-color);
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`;

export const StyledTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledLabel = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const StyledInput = styled(Field)`
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  width: 90%;
  padding: 10px;
  margin-bottom: 20px;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 90%;
  }
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  position: absolute;
  bottom: 4px;
  left: 5%;
  font-size: 13px;
  color: #ff0000;
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  text-align: center;
  background-color: var(--main-green-color);
  color: var(--main-light-text-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: var(--main-transition);
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background-color: var(--main-pink-color);
  }
`;
