import styled from 'styled-components';
import Slider from 'react-slick';
import { IoIosStar } from 'react-icons/io';

export const ReviewsSection = styled.section`
  padding: 100px 20px;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  width: 750px;
  margin: 0 auto 10px;
`;

export const CustomSlider = styled(Slider)`
  padding: 30px 0;

  .slick-track {
    display: flex;
    gap: 20px;
  }

  .slick-dots li button:before {
    color: #556b2f;
    font-size: 12px;
  }
`;

export const Slide = styled.div`
  width: 200px;
  height: 350px;
  background-color: #e6b8ca;
  border-radius: 10%;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  padding: 30px 0;
`;

export const Name = styled.h3`
  font-size: 26px;
  font-weight: 700;
  padding: 10px 20px;
  color: #fff;
  background-color: #556b2f;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: var(--main-dark-text-color);
  padding: 20px;
`;

export const StarList = styled.ul`
  display: flex;
  gap: 8px;
  padding-left: 20px;
`;

export const StarIcon = styled(IoIosStar)`
  width: 25px;
  height: 25px;
  fill: #ffff00;
`;
