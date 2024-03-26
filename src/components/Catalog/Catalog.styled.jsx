import styled from 'styled-components';

export const CatalogWrapper = styled.div`
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
