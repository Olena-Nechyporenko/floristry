import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  HeroSection,
  Title,
  TitleWrapper,
  CustomSlider,
  Slide1,
  Slide2,
  Slide3,
  OrderButton,
  Text,
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
    arrows: false,
  };
  return (
    <HeroSection>
      <CustomSlider {...settings}>
        <Slide1>
          <TitleWrapper>
            <Title>Floristic Paradise</Title>
            <Text>
              We provide convenient and thoughtful service that allows you to
              send beautifully arranged flowers to your loved ones with ease.
            </Text>
            <OrderButton to="/catalog">Order now</OrderButton>
          </TitleWrapper>
        </Slide1>
        <Slide2>
          <TitleWrapper>
            <Title>Floristic Paradise</Title>
            <Text>
              Let us help you brighten someone's day with the timeless beauty of
              flowers, delivered right to their doorstep.
            </Text>
            <OrderButton to="/catalog">Order now</OrderButton>
          </TitleWrapper>
        </Slide2>
        <Slide3>
          <TitleWrapper>
            <Title>Floristic Paradise</Title>
            <Text>
              Let us help you create unforgettable moments and lasting memories
              with the enchanting beauty of floral decor for your special
              occasions.
            </Text>
            <OrderButton to="/catalog">Order now</OrderButton>
          </TitleWrapper>
        </Slide3>
      </CustomSlider>
    </HeroSection>
  );
};
