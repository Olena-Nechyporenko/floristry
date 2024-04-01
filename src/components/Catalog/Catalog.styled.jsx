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

export const LoadingText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: 400;
`;
