import { Header } from 'components/Header/Header';
import { HeroSection, Title } from './Hero.styled';

export const Hero = () => {
  return (
    <HeroSection>
      <Header />
      <Title>Choose your best bouquet</Title>
    </HeroSection>
  );
};
