import styled from 'styled-components';
import img1 from '../../images/peonies.jpg';
import img2 from '../../images/wide-a.jpg';
import img3 from '../../images/consultation.jpg';
import Slider from 'react-slick';

export const HeroSection = styled.div`
  height: 600px;
  background-color: var(--secondary-bg-color);
`;

export const CustomSlider = styled(Slider)`
  .slick-track {
    display: flex;
  }

  .slick-dots {
    bottom: 20px;
  }
  .slick-dots li {
    margin: 0 14px;
  }

  .slick-dots li button:before {
    content: '';
    width: 35px;
    height: 8px;
    border-radius: 14px;
    font-size: 12px;
    background-color: rgba(255, 255, 255, 0.3);
  }

  .slick-dots li.slick-active button:before {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

const Slide = styled.div`
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  padding: 0 10px;
  width: 800px;
  height: 600px;
`;

export const Slide1 = styled(Slide)`
  background-image: url(${img1});
`;

export const Slide2 = styled(Slide)`
  background-image: url(${img2});
`;

export const Slide3 = styled(Slide)`
  background-image: url(${img3});
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
