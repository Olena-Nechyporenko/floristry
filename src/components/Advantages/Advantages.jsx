import {
  AdvantagesSection,
  List,
  Item,
  DescriptionWrapper,
  DescrTitle,
  Text,
  ImageWrapperRight,
  ImageWrapperLeft,
} from './Advantages.styled';
import firstimg from '../../images/wide-a.jpg';
import secondimg from '../../images/high.jpg';
import thirdimg from '../../images/creative.jpg';
import fourthimg from '../../images/consultation.jpg';

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
            <img src={firstimg} alt="" width={500} height={400} />
          </ImageWrapperRight>
        </Item>
        <Item>
          <ImageWrapperLeft>
            <img src={secondimg} alt="" width={500} height={400} />
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
            <img src={thirdimg} alt="" width={500} height={400} />
          </ImageWrapperRight>
        </Item>
        <Item>
          <ImageWrapperLeft>
            <img src={fourthimg} alt="" width={500} height={400} />
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