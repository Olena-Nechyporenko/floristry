import { Advantages } from 'components/Advantages/Advantages';
import { Hero } from 'components/Hero/Hero';
import { AboutUs, Text, TitleWrapper, Title } from './HomePage.styled';
import { Reviews } from 'components/Reviews/Reviews';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs id="about-us">
        <TitleWrapper>
          <Title>About us</Title>
        </TitleWrapper>

        <Text>
          Our store specializes in creating unique bouquets that reflect the
          refined taste and individuality of our clients. Thanks to our love for
          flowers and experience in the field of floristry, we guarantee the
          highest quality of each bouquet we create.
        </Text>
      </AboutUs>
      <Advantages />
      <Reviews />
    </>
  );
}
