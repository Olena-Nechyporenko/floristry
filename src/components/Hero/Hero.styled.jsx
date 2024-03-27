import styled from 'styled-components';
import img from '../../images/peonies.jpg';

export const HeroSection = styled.div`
  position: relative;
  height: 600px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  padding: 0 10px;
  background-color: var(--secondary-bg-color);

  @media screen and (min-width: 768px) {
    padding: 0 20px;
  }
`;

export const Title = styled.h1`
  font-family: 'Homemade Apple', cursive;
  font-size: 50px;
  font-weight: 400;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
  width: 600px;
  height: 300px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const Subtitle = styled.p`
  font-size: 30px;
  font-weight: 500;
`;
