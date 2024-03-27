import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const PayButton = styled.button`
  background-color: #556b2f;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;
  &:hover {
    background-color: #e6b8ca;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.5);
  }
`;
