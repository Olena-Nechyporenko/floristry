import { WeddingForm } from 'components/WeddingForm/WeddingForm';
import { WeddingCatalog } from 'components/WeddingCatalog/WeddingCatalog';
import {
  WeddingHero,
  CustomSlider,
  Slide1,
  Slide2,
  TitleWrapper,
  Title,
  Text,
} from './WeddingPage.styled';

export default function WeddingPage() {
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
    <>
      <WeddingHero>
        <CustomSlider {...settings}>
          <Slide1>
            <TitleWrapper>
              <Title>Wedding decoration</Title>
              <Text>
                We offer a wide selection of enchanting bouquets, as well as
                decoration services, to create a dream atmosphere on your
                special day.
              </Text>
            </TitleWrapper>
          </Slide1>
          <Slide2>
            <TitleWrapper>
              <Title>Bouquets for brides</Title>
              <Text>
                We are delighted to create stunning bridal bouquets to
                complement your special day and reflect your unique love story.
              </Text>
            </TitleWrapper>
          </Slide2>
        </CustomSlider>
      </WeddingHero>
      <WeddingCatalog />
      <WeddingForm />
    </>
  );
}
