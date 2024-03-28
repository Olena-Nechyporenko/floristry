import { Form } from 'formik';
import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
  margin-bottom: 50px;
`;
export const StyledForm = styled(Form)`
  display: flex;
  gap: 30px;
  align-items: center;
`;
export const SubmitButton = styled.button`
  padding: 10px 20px;
  height: 50px;
  background-color: #556b2f;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e6b8ca;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
  }
`;
export const ResetButton = styled.button`
  padding: 10px 20px;
  height: 50px;
  background-color: #556b2f;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e6b8ca;
  }
`;
