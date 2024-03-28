import styled from 'styled-components';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { FaFacebookF } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';

export const FooterSection = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  border-top: 1px solid black;
`;

export const FooterInfoList = styled.ul`
  font-size: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px 0;
`;

export const Link = styled(NavLink)`
  display: block;
  font-size: 18px;
  font-weight: 600;
  color: var(--main-dark-text-color);
`;

export const AnchorLink = styled.a`
  display: block;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
`;

export const ContactList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const Item = styled.li`
  display: flex;
  gap: 10px;
`;

export const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(85, 107, 47, 0.2);
`;

export const LocationIcon = styled(FaLocationDot)`
  width: 30px;
  height: 30px;
  fill: #556b2f;
`;

export const EmailIcon = styled(MdEmail)`
  width: 30px;
  height: 30px;
  fill: #556b2f;
`;

export const PhoneIcon = styled(FaPhoneAlt)`
  width: 30px;
  height: 30px;
  fill: #556b2f;
`;

export const ContactInfoWrapper = styled.div`
  font-size: 15px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 200px;
  color: var(--main-dark-text-color);
`;

export const ContactInfo = styled.a`
  font-size: 18px;
  font-weight: 600;
  color: var(--main-dark-text-color);
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
  width: 30px;
  height: 30px;
  fill: #556b2f;
`;

export const FacebookIcon = styled(FaFacebookF)`
  width: 26px;
  height: 26px;
  fill: #556b2f;
`;

export const TelegramIcon = styled(FaTelegramPlane)`
  width: 30px;
  height: 30px;
  fill: #556b2f;
`;
