import styled from 'styled-components';
import Slider from 'react-slick';
import { IoIosStar } from 'react-icons/io';

export const ReviewsSection = styled.section`
  padding: 20px 10px 70px;

  @media screen and (min-width: 768px) {
    padding: 30px 20px 70px;
  }
`;

export const Title = styled.h2`
  font-size: 23px;
  font-weight: 500;
  text-align: center;
  width: 300px;
  margin: 0 auto 10px;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    width: 730px;
  }

  @media screen and (min-width: 768px) {
    width: 750px;
  }
`;

export const CustomSlider = styled(Slider)`
  padding: 30px 0;

  .slick-track {
    display: flex;
    gap: 20px;
  }

  .slick-dots li button:before {
    color: var(--main-green-color);
    font-size: 12px;
  }

  .slick-dots li.slick-active button:before {
    color: var(--main-green-color);
  }
`;

export const Slide = styled.div`
  position: relative;
  width: 200px;
  height: 350px;
  background-color: var(--main-pink-color);
  border-radius: 10%;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  padding: 30px 0;
`;

export const Name = styled.h3`
  font-size: 22px;
  font-weight: 700;
  padding: 10px 20px;
  color: var(--main-light-text-color);
  background-color: var(--main-green-color);
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.3;
  color: var(--main-dark-text-color);
  padding: 20px;
`;

export const StarList = styled.ul`
  position: absolute;
  bottom: 30px;
  left: 0;
  display: flex;
  gap: 8px;
  padding-left: 20px;
`;

export const StarIcon = styled(IoIosStar)`
  width: 25px;
  height: 25px;
  fill: #ffff00;
`;
