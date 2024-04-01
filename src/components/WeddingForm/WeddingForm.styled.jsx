import { Form } from 'formik';
import styled from 'styled-components';
import img from '../../images/background-form.jpg';

export const FormWrapper = styled.div`
  position: relative;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 30px;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 500;
  width: 800px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const Text = styled.p`
  position: absolute;
  top: 200px;
  left: 380px;
  font-size: 22px;
  font-weight: 400;
  width: 490px;
  color: var(--main-dark-text-color);
`;

export const StyledForm = styled(Form)`
  max-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const StyledFormField = styled.div`
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
  position: relative;
  font-family: inherit;
  font-size: 18px;
  padding: 8px 30px;
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
