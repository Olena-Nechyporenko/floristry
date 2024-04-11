import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import { Form } from 'formik';

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
  width: 300px;
  border: 1px solid var(--main-green-color);
  border-radius: 8px;
  background-color: #f7f7f7;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 90%;
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

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    display: block;
    margin-bottom: 5px;
  }

  select {
    width: 180px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const SubmitButton = styled.button`
  font-family: inherit;
  font-weight: 400;
  padding: 10px 15px;
  height: 50px;
  background-color: var(--main-green-color);
  color: var(--main-light-text-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const ResetButton = styled.button`
  font-family: inherit;
  font-weight: 400;
  padding: 10px 15px;
  height: 50px;
  background-color: var(--main-green-color);
  color: var(--main-light-text-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
