import styled from 'styled-components';

export const WeddingCatalogSection = styled.section`
  position: relative;
  min-height: 300px;
  padding: 70px 0;
`;

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
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LoadingText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: 400;
  width: 340px;
  text-align: center;

  @media (min-width: 768px) {
    width: 600px;
  }
`;
