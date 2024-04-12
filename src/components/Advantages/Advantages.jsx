import firstImg from '../../images/wide-assortment.jpg';
import secondImg from '../../images/high-quality.jpg';
import thirdImg from '../../images/creative-arrangement.jpg';
import fourthImg from '../../images/professional-consultation.jpg';
import {
  AdvantagesSection,
  List,
  Item,
  DescriptionWrapper,
  Img,
  DescrTitle,
  Text,
  ImageWrapperRight,
  ImageWrapperLeft,
} from './Advantages.styled';

export const Advantages = () => {
  return (
    <AdvantagesSection>
      <List>
        <Item>
          <DescriptionWrapper>
            <DescrTitle>Wide assortment</DescrTitle>
            <Text>
              We offer a diverse range of flower varieties, plants, and bouquets
              to cater to every taste and customer preference
            </Text>
          </DescriptionWrapper>
          <ImageWrapperRight>
            <Img src={firstImg} alt="Wide assortment" />
          </ImageWrapperRight>
        </Item>
        <Item>
          <ImageWrapperLeft>
            <Img src={secondImg} alt="High quality" />
          </ImageWrapperLeft>
          <DescriptionWrapper>
            <DescrTitle>High quality</DescrTitle>
            <Text>
              We guarantee the freshness and longevity of our flowers, thanks to
              close relationships with the best suppliers
            </Text>
          </DescriptionWrapper>
        </Item>
        <Item>
          <DescriptionWrapper>
            <DescrTitle>Creative arrangement</DescrTitle>
            <Text>
              Our florists have extensive experience in creating unique bouquets
              and compositions, adding a special charm to any event
            </Text>
          </DescriptionWrapper>
          <ImageWrapperRight>
            <Img src={thirdImg} alt="Creative arrangement" />
          </ImageWrapperRight>
        </Item>
        <Item>
          <ImageWrapperLeft>
            <Img src={fourthImg} alt="Professional consultation" />
          </ImageWrapperLeft>
          <DescriptionWrapper>
            <DescrTitle>Professional consultation</DescrTitle>
            <Text>
              Our experts are delighted to assist you in selecting the perfect
              flowers for any occasion or event, providing personalized advice
              on their care
            </Text>
          </DescriptionWrapper>
        </Item>
      </List>
    </AdvantagesSection>
  );
};
