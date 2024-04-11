import styled from 'styled-components';
import Slider from 'react-slick';
import img1 from '../../images/wedding-bouquet.jpg';
import img2 from '../../images/wedd.jpg';

export const WeddingHero = styled.section`
  height: 400px;
`;

export const CustomSlider = styled(Slider)`
  position: relative;

  .slick-track {
    display: flex;
  }
  .slick-list {
    position: relative;
    overflow: hidden;
  }

  .slick-dots {
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
  }
  .slick-dots li {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0 14px;
    cursor: pointer;
  }
  .slick-dots li button {
    font-size: 0;
    display: block;
    width: 20px;
    height: 20px;
    color: transparent;
    padding: 5px;
    border: none;
    background: transparent;
  }

  .slick-dots li button:before {
    content: '';
    display: block;
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
  font-weight: 400;
  line-height: 1.3;
  text-align: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  padding: 0 10px;
`;
