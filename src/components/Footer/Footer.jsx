import {
  FooterSection,
  FooterInfoList,
  Link,
  AnchorLink,
  ContactsWrapper,
  ContactList,
  Item,
  IconWrapper,
  LocationIcon,
  EmailIcon,
  PhoneIcon,
  ContactInfoWrapper,
  ContactInfo,
  SocialIconsList,
  SocialIconsItem,
  InstagramIcon,
  FacebookIcon,
  TelegramIcon,
} from './Footer.styled';

export const Footer = () => {
  return (
    <FooterSection>
      <FooterInfoList>
        Information
        <li>
          <AnchorLink href="#about-us">About us</AnchorLink>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li>
          <AnchorLink href="#reviews">Reviews</AnchorLink>
        </li>
      </FooterInfoList>
      <ContactsWrapper>
        <ContactList>
          <Item>
            <IconWrapper>
              <LocationIcon />
            </IconWrapper>
            <ContactInfoWrapper>
              Address :
              <ContactInfo
                href="https://maps.app.goo.gl/GXVBv67jBmpRhz9PA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lesi Ukrainky, 2, Kyiv, Ukraine
              </ContactInfo>
            </ContactInfoWrapper>
          </Item>
          <Item>
            <IconWrapper>
              <EmailIcon />
            </IconWrapper>
            <ContactInfoWrapper>
              Email :
              <ContactInfo href="mailto:bouquets@gmail.com">
                bouquets@gmail.com
              </ContactInfo>
            </ContactInfoWrapper>
          </Item>
          <Item>
            <IconWrapper>
              <PhoneIcon />
            </IconWrapper>
            <ContactInfoWrapper>
              Phone :
              <ContactInfo href="tel:+3800011111">+380 00 11 111</ContactInfo>
            </ContactInfoWrapper>
          </Item>
        </ContactList>

        <SocialIconsList>
          <SocialIconsItem>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
          </SocialIconsItem>
          <SocialIconsItem>
            <a
              href="https://uk-ua.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
          </SocialIconsItem>
          <SocialIconsItem>
            <a
              href="https://web.telegram.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon />
            </a>
          </SocialIconsItem>
        </SocialIconsList>
      </ContactsWrapper>
    </FooterSection>
  );
};
