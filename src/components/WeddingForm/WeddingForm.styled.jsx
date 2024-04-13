import { Form } from 'formik';
import styled from 'styled-components';
// import img from '../../images/background-form.jpg';

export const FormSection = styled.section`
  padding-bottom: 70px;
`;

export const FormWrapper = styled.div`
  position: relative;
  background-image: url('https://res.cloudinary.com/dzqlwkzwd/image/upload/v1712936100/images/background-form_wmgi6q.jpg');
  background-size: cover;
  background-position: right 80% top 0;
  background-repeat: no-repeat;
  padding: 20px 0 90px;

  @media (min-width: 768px) {
    padding: 20px;
  }

  @media (min-width: 1200px) {
    background-position: center;
    padding: 30px;
  }
`;

export const Title = styled.h2`
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  padding: 0 10px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    font-size: 30px;
    padding: 0 20px;
    margin: 0 auto;
    margin-bottom: 30px;
  }

  @media (min-width: 1200px) {
    width: 800px;
    padding: 0;
  }
`;

export const Text = styled.p`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 15px;
  font-weight: 400;
  line-height: 1.3;
  text-align: center;
  width: 340px;
  color: var(--main-dark-text-color);

  @media (min-width: 768px) {
    top: 200px;
    left: 330px;
    transform: none;
    font-size: 18px;
    text-align: left;
    width: 340px;
  }

  @media (min-width: 1200px) {
    left: 380px;
    font-size: 22px;
    width: 490px;
  }
`;

export const StyledForm = styled(Form)`
  max-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const StyledFormField = styled.div`
  position: relative;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 200px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  input:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;
  }

  .error {
    position: absolute;
    bottom: -16px;
    right: 0;
    color: #ff0000;
    font-size: 14px;
  }
`;

export const StyledButton = styled.button`
  position: relative;
  font-family: inherit;
  font-size: 18px;
  width: 140px;
  height: 50px;
  background-color: var(--main-green-color);
  color: var(--main-light-text-color);
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  transition: all var(--main-transition);

  &:hover {
    background-color: var(--main-pink-color);
  }
`;
