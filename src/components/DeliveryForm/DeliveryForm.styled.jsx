import { Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  max-width: 350px;
  margin: 0 auto;
  padding: 30px 0;
`;

export const StyledFormField = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input,
  select {
    width: 320px;
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
