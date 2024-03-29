import styled from 'styled-components';
import Slider from 'react-slick';
import img1 from '../../images/wedding-bouquet.jpg';
import img2 from '../../images/wedd.jpg';

export const WeddingHero = styled.section`
  padding-top: 70px;
  height: 400px;
  margin-bottom: 80px;
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
  height: 400px;
`;

export const Slide1 = styled(Slide)`
  background-image: url(${img1});
`;

export const Slide2 = styled(Slide)`
  background-image: url(${img2});
`;

// export const ImgWrapper = styled.div`
//   position: relative;
//   background-image: url(${img});
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
//   width: 1200px;

// `;

export const TitleWrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 450px;
  height: 300px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.6);
`;

export const Title = styled.h1`
  // font-family: 'Homemade Apple', cursive;
  font-size: 40px;
  font-weight: 400;
  color: var(--main-dark-color);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Text = styled.p`
  font-size: 23px;
  font-weight: 500;
  padding: 0 15px;
  text-align: center;
`;
