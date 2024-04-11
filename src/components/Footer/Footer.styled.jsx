import styled from 'styled-components';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { FaFacebookF } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';

export const FooterSection = styled.footer`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid black;
  margin-top: auto;
  padding: 0 10px;

  @media screen and (min-width: 768px) {
    padding: 0 20px;
  }
`;

export const FooterNavigationList = styled.ul`
  font-size: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px 0;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const LinkNav = styled(NavLink)`
  display: block;
  font-size: 18px;
  font-weight: 500;
  color: var(--main-dark-text-color);
`;

export const AnchorLink = styled(Link)`
  display: block;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  color: var(--main-dark-text-color);
`;

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  gap: 20px;
  padding: 10px 0;

  @media screen and (min-width: 768px) {
    padding: 20px 0;
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
    gap: 50px;
  }
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1200px) {
    gap: 20px;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }
`;

export const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(85, 107, 47, 0.2);

  @media screen and (min-width: 1200px) {
    width: 60px;
    height: 60px;
  }
`;

export const LocationIcon = styled(FaLocationDot)`
  width: 16px;
  height: 16px;
  fill: var(--main-green-color);

  @media screen and (min-width: 1200px) {
    width: 30px;
    height: 30px;
  }
`;

export const EmailIcon = styled(MdEmail)`
  width: 16px;
  height: 16px;
  fill: var(--main-green-color);

  @media screen and (min-width: 1200px) {
    width: 30px;
    height: 30px;
  }
`;

export const PhoneIcon = styled(FaPhoneAlt)`
  width: 16px;
  height: 16px;
  fill: var(--main-green-color);

  @media screen and (min-width: 1200px) {
    width: 30px;
    height: 30px;
  }
`;

export const ContactInfoWrapper = styled.div`
  font-size: 12px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 3px;
  color: var(--main-dark-text-color);

  @media screen and (min-width: 1200px) {
    gap: 8px;
    font-size: 15px;
  }
`;

export const ContactInfo = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: var(--main-dark-text-color);

  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const SocialIconsList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const SocialIconsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InstagramIcon = styled(PiInstagramLogoFill)`
  width: 26px;
  height: 26px;
  fill: var(--main-green-color);

  @media screen and (min-width: 1200px) {
    width: 30px;
    height: 30px;
  }
`;

export const FacebookIcon = styled(FaFacebookF)`
  width: 22px;
  height: 22px;
  fill: var(--main-green-color);

  @media screen and (min-width: 1200px) {
    width: 26px;
    height: 26px;
  }
`;

export const TelegramIcon = styled(FaTelegramPlane)`
  width: 26px;
  height: 26px;
  fill: var(--main-green-color);

  @media screen and (min-width: 1200px) {
    width: 30px;
    height: 30px;
  }
`;
