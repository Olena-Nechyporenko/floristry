import { useEffect, useState } from 'react';
import {
  FooterSection,
  FooterInfoList,
  LinkNav,
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
  const [anchor, setAnchor] = useState('');

  useEffect(() => {
    const targetElement = document.getElementById(anchor?.id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [anchor]);

  const handleClick = e => {
    setAnchor({ id: e.target.name });
  };

  return (
    <FooterSection id="contacts">
      <FooterInfoList>
        Information
        <li>
          <AnchorLink to="/" name="about-us" onClick={handleClick}>
            About us
          </AnchorLink>
        </li>
        <li>
          <LinkNav to="/catalog">Catalog</LinkNav>
        </li>
        <li>
          <AnchorLink to="/" name="reviews" onClick={handleClick}>
            Reviews
          </AnchorLink>
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
