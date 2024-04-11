import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding: 30px 0;

  @media screen and (min-width: 1200px) {
    padding: 40px 0;
  }
`;
