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
            <Name>Olena</Name>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
              dicta fugit nisi odio pariatur reiciendis, in enim dolores magni
              id!
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
            <Name>Olena</Name>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
              dicta fugit nisi odio pariatur reiciendis, in enim dolores magni
              id!
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
            <Name>Olena</Name>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
              dicta fugit nisi odio pariatur reiciendis, in enim dolores magni
              id!
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
            <Name>Olena</Name>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
              dicta fugit nisi odio pariatur reiciendis, in enim dolores magni
              id!
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
            <Name>Olena</Name>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
              dicta fugit nisi odio pariatur reiciendis, in enim dolores magni
              id!
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
            <Name>Olena</Name>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
              dicta fugit nisi odio pariatur reiciendis, in enim dolores magni
              id!
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
