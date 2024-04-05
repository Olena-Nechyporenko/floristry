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
  width: 200px;
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
