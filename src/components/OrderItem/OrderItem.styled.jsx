import styled from 'styled-components';

export const StyledContainer = styled.li`
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  @media screen and (min-width: 768px) {
    width: 450px;
  }

  @media screen and (min-width: 1200px) {
    width: 600px;
  }
`;

export const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const StyledTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: var(--main-dark-text-color);
  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 16px;
  color: rgba(22, 22, 22, 0.7);
  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

export const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 130px;
    height: 130px;
  }
`;

export const StyledDeliveryInfo = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  color: var(--main-dark-text-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
