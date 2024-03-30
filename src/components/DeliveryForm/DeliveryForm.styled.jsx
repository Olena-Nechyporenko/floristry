import { Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  max-width: 400px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const StyledFormField = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input,
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  .error {
    color: red;
    font-size: 14px;
  }
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  height: 50px;
  background-color: var(--main-green-color);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: var(--main-transition);

  &:hover {
    background-color: var(--main-pink-color);
  }
`;
