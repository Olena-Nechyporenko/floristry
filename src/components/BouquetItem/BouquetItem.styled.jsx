import styled from 'styled-components';

export const BouquetWrapper = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--main-pink-color);
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 10px;

  @media (min-width: 768px) {
    flex-basis: calc((100% - 168px) / 2);
    margin-bottom: 20px;
  }

  @media (min-width: 1200px) {
    flex-basis: calc((100% - 240px) / 3);
  }
`;

export const ImgWrapper = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledImg = styled.img`
  width: 80%;
`;

export const StyledTitle = styled.h2`
  color: #e6b8ca;
  text-align: center;
  font-weight: 500;
`;

export const DescrWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledPrice = styled.p`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #e6b8ca;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const StyledDescription = styled.p`
  text-align: center;
`;
export const Button = styled.button`
  font-family: inherit;
  font-weight: 400;
  padding: 10px 20px;
  background-color: #556b2f;
  color: white;
  border: none;
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
