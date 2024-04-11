import { Form } from 'formik';
import { VscFilter } from 'react-icons/vsc';
import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #f7f7f7;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 1200px) {
    padding: 20px;
    margin-bottom: 50px;
  }
`;
export const FilterIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const FilterButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
`;

export const FilterIcon = styled(VscFilter)`
  width: 30px;
  height: 30px;
`;

export const StyledForm = styled(Form)`
  display: none;

  @media screen and (min-width: 1200px) {
    display: flex;
    gap: 30px;
    align-items: center;
  }
`;
export const SubmitButton = styled.button`
  font-family: inherit;
  font-weight: 400;
  padding: 10px 15px;
  height: 50px;
  background-color: var(--main-green-color);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--main-pink-color);
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  label {
    display: block;
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
  font-family: inherit;
  font-weight: 400;
  padding: 10px 15px;
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
