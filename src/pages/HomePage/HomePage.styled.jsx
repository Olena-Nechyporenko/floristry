import styled from 'styled-components';

export const AboutUs = styled.section`
  display: flex;
  gap: 25px;
  padding: 70px 0;
`;

export const TitleWrapper = styled.div`
  width: 100px;
  border-radius: 0 30px 30px 0;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 180px;
    height: 180px;
    border-radius: 0 30% 30% 0;
  }

  @media screen and (min-width: 1200px) {
    width: 200px;
    height: 200px;
  }
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 30px;
  height: 100%;
  background-color: #e6b8ca;

  @media screen and (min-width: 768px) {
    transform: rotate(-90deg);
  }
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;
  text-align: left;
  display: flex;
  align-items: center;
  width: 230px;
  color: var(--main-dark-text-color);
  padding-right: 10px;

  @media screen and (min-width: 768px) {
    text-align: center;
    width: 500px;
    padding-right: 20px;
  }

  @media screen and (min-width: 1200px) {
    width: 950px;
  }
`;
