import styled from 'styled-components';
import img from '../../images/flowers.jpg';

export const HeroSection = styled.div`
  position: relative;
  height: 600px;
  background-image: url(${img});
  overflow: hidden;
  padding: 0 10px;

  @media screen and (min-width: 768px) {
    padding: 0 20px;
  }
`;

export const Title = styled.h1`
  position: absolute;
  top: 150px;
  right: 50px;
  font-size: 40px;
  font-weight: 700;
`;
