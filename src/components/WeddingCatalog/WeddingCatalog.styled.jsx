import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 30px;
`;

export const CatalogWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 80px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
