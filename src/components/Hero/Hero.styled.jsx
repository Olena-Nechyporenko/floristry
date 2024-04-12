import styled from 'styled-components';
import img1 from '../../images/home-hero-1.jpg';
import img2 from '../../images/home-hero-2.jpg';
import img3 from '../../images/home-hero-3.jpg';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

export const HeroSection = styled.section`
  height: 400px;
  background-color: var(--main-green-color);
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
  height: 400px;
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

export const TitleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0);

  @media screen and (min-width: 768px) {
    top: 140px;
    left: 50px;
    width: 400px;
    height: auto;
  }
`;

export const Title = styled.h1`
  font-family: 'Praise', sans-serif;
  font-size: 60px;
  text-align: center;
  font-weight: 400;
  color: var(--main-light-text-color);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.3;
  text-align: center;
  color: var(--main-light-text-color);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  padding: 0 10px;
`;

export const OrderButton = styled(Link)`
  display: inline-block;
  font-size: 18px;
  text-align: center;
  background-color: var(--main-green-color);
  color: var(--main-light-text-color);
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 15px;
  transition: all var(--main-transition);
  cursor: pointer;

  &:hover {
    background-color: var(--main-pink-color);
  }
`;
