import styled from 'styled-components';

export const CatalogWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 0 auto;
  margin-bottom: 80px;

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
  width: 340px;
  text-align: center;

  @media (min-width: 768px) {
    width: 600px;
  }
`;
