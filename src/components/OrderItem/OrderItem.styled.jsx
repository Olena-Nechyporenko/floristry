import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 400px;
  padding: 20px;

  @media screen and (min-width: 768px) {
    max-width: 350px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 350px;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 16px;
  font-weight: 500;
`;

export const StyledListItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

export const StyledImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;
`;

export const StyledParagraph = styled.p`
  font-size: 12px;
`;

export const StyledDeliveryInfo = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;
