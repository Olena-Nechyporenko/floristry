import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  HeroSection,
  Title,
  TitleWrapper,
  Subtitle,
  CustomSlider,
  Slide1,
  Slide2,
  Slide3,
} from './Hero.styled';

export const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    pauseOnHover: true,
  };
  return (
    <HeroSection>
      <CustomSlider {...settings}>
        <Slide1>
          <TitleWrapper>
            <Title>Bouquet Delivery</Title>
            <Subtitle>Choose your best bouquet</Subtitle>
          </TitleWrapper>
        </Slide1>
        <Slide2>
          <TitleWrapper>
            <Title>Bouquet Delivery</Title>
            <Subtitle>Choose your best bouquet</Subtitle>
          </TitleWrapper>
        </Slide2>
        <Slide3>
          <TitleWrapper>
            <Title>Bouquet Delivery</Title>
            <Subtitle>Choose your best bouquet</Subtitle>
          </TitleWrapper>
        </Slide3>
      </CustomSlider>
    </HeroSection>
  );
};
