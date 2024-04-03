import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(177, 177, 177, 0.5);
`;

export const Aside = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  height: 100vh;
  width: 50vw;
  background-color: var(--main-pink-color);
  transition: right 0.4s;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  background-color: transparent;
  border: none;
  padding: 0;
`;

export const CloseIcon = styled(IoClose)`
  fill: var(--main-dark-text-color);
  width: 22px;
  height: 22px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LinkNav = styled(NavLink)`
  display: block;
  font-size: 18px;
  font-weight: 500;
  color: var(--main-dark-text-color);
  padding: 20px 0;
`;

export const AnchorLink = styled(Link)`
  display: block;
  font-size: 18px;
  font-weight: 500;
  padding: 20px 0;
  color: var(--main-dark-text-color);
  cursor: pointer;
`;
