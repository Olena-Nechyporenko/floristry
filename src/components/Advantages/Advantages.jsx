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
            <Img
              src={
                'https://res.cloudinary.com/dzqlwkzwd/image/upload/v1712936103/images/wide-assortment_ucefbe.jpg'
              }
              alt="Wide assortment"
            />
          </ImageWrapperRight>
        </Item>
        <Item>
          <ImageWrapperLeft>
            <Img
              src={
                'https://res.cloudinary.com/dzqlwkzwd/image/upload/v1712936100/images/high-quality_j3dqkb.jpg'
              }
              alt="High quality"
            />
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
            <Img
              src={
                'https://res.cloudinary.com/dzqlwkzwd/image/upload/v1712936100/images/creative-arrangement_y9tvze.jpg'
              }
              alt="Creative arrangement"
            />
          </ImageWrapperRight>
        </Item>
        <Item>
          <ImageWrapperLeft>
            <Img
              src={
                'https://res.cloudinary.com/dzqlwkzwd/image/upload/v1712936101/images/professional-consultation_tdihuq.jpg'
              }
              alt="Professional consultation"
            />
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
