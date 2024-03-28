import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  background-color: #fdfdfd;
  width: 1160px;
  padding: 0 20px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 35px;
`;

export const Link = styled(NavLink)`
  display: block;
  font-size: 20px;
  font-weight: 600;
  color: var(--main-dark-text-color);
  padding: 20px 0;
`;

export const AnchorLink = styled.a`
  display: block;
  font-size: 20px;
  font-weight: 600;
  padding: 20px 0;
  cursor: pointer;
`;

export const CartIcon = styled(BsCart3)`
  fill: black;
  width: 25px;
  height: 25px;
`;
