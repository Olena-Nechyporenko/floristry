import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin: 30px auto;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const PricePayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 20px;
  padding-bottom: 70px;
`;

export const TotalPrice = styled.p`
  font-size: 28px;
  font-weight: 500;
  color: var(--main-dark-text-color);
`;

export const PayButton = styled.button`
  font-family: inherit;
  font-weight: 400;
  font-size: 18px;
  background-color: #556b2f;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;

  transition: background-color 0.3s;
  &:hover {
    background-color: #e6b8ca;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.5);
  }
`;
