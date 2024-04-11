import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  ReviewsSection,
  Title,
  CustomSlider,
  Slide,
  Wrapper,
  Name,
  Text,
  StarIcon,
  StarList,
} from './Reviews.styled';

const starsArray = ['1', '2', '3', '4', '5'];

export const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <ReviewsSection id="reviews">
      <Title>
        We value the opinion of our customers and are always inspired by your
        feedback about our store.
      </Title>

      <CustomSlider {...settings}>
        <Slide>
          <Wrapper>
            <Name>Jessica Davis</Name>
            <Text>
              I'm very pleased with my order from this store! The bouquet was
              incredibly beautiful and fresh. Delivery was fast and hassle-free!
            </Text>
          </Wrapper>
          <StarList>
            {starsArray.map(star => (
              <li key={star}>
                <StarIcon />
              </li>
            ))}
          </StarList>
        </Slide>
        <Slide>
          <Wrapper>
            <Name>Sarah Wilson</Name>
            <Text>
              Fantastic selection of flowers and bouquets to suit every taste!
              I've ordered several times already, and each time I received
              impeccable service and stunning flower quality.!
            </Text>
          </Wrapper>
          <StarList>
            {starsArray.map(star => (
              <li key={star}>
                <StarIcon />
              </li>
            ))}
          </StarList>
        </Slide>
        <Slide>
          <Wrapper>
            <Name>Jennifer Martinez</Name>
            <Text>
              I wholeheartedly recommend this store! They always pay attention
              to every detail, and their bouquets always make an impression.
              Many thanks for the excellent service.
            </Text>
          </Wrapper>
          <StarList>
            {starsArray.map(star => (
              <li key={star}>
                <StarIcon />
              </li>
            ))}
          </StarList>
        </Slide>
        <Slide>
          <Wrapper>
            <Name>Elizabeth Thompson</Name>
            <Text>
              It's very convenient to order flowers online from this store. You
              can always choose the perfect bouquet for any occasion. Many
              thanks for the wonderful shopping experience!
            </Text>
          </Wrapper>
          <StarList>
            {starsArray.map(star => (
              <li key={star}>
                <StarIcon />
              </li>
            ))}
          </StarList>
        </Slide>
        <Slide>
          <Wrapper>
            <Name>Michael Williams</Name>
            <Text>
              My bouquet was incredibly beautiful! It exactly matched the photos
              on the website, and even exceeded them in reality. Very grateful
              for the excellent selection and quality of flowers.
            </Text>
          </Wrapper>
          <StarList>
            {starsArray.map(star => (
              <li key={star}>
                <StarIcon />
              </li>
            ))}
          </StarList>
        </Slide>
        <Slide>
          <Wrapper>
            <Name>William Taylor</Name>
            <Text>
              A big thank you to the team of this store for the quality flowers
              and excellent delivery service. You can always count on them in
              the toughest moments. I will definitely be ordering from them
              again!
            </Text>
          </Wrapper>
          <StarList>
            {starsArray.map(star => (
              <li key={star}>
                <StarIcon />
              </li>
            ))}
          </StarList>
        </Slide>
      </CustomSlider>
    </ReviewsSection>
  );
};
