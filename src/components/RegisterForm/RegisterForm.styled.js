import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';
import { IoCloseSharp } from 'react-icons/io5';

export const StyledCloseIcon = styled(IoCloseSharp)`
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  @media (min-width: 1440px) {
    width: 450px;
    margin: 0 auto;
    margin-top: 45px;
  }
`;
export const StyledTitle = styled.h2`
  text-align: center;
`;
export const StyledInput = styled(Field)`
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;

  @media (min-width: 1440px) {
    width: 450px;
  }
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: red;
`;

export const StyledForm = styled(Form)`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1440px) {
    width: 450px;
    margin: 0 auto;
  }
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  text-align: center;
  background-color: var(--main-green-color);
  color: #fff;
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

export const StyledMessage = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-top: 10px;
`;
