import styled from 'styled-components';

export const Container = styled.div`
  max-width: 375px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const Main = styled.main`
  padding-top: 70px;
`;
