import styled from 'styled-components';

export const TextEmptyCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  font-size: 36px;
  font-weight: 500;
  color: rgba(22, 22, 22, 0.7);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const Wrapper = styled.ul`
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
  font-size: 18px;
  font-weight: 400;
  width: 200px;
  height: 50px;
  background-color: var(--main-green-color);
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  transition: var(--main-transition);

  &:hover {
    background-color: var(--main-pink-color);
  }
`;
