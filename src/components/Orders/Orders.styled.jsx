import styled from 'styled-components';

export const StyledList = styled.ul`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 40px;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 50px;
  }
`;
