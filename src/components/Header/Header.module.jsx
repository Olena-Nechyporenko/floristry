import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--main-pink-color);
  background-color: #556b2f;
  width: 1160px;
  padding: 0 20px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 35px;
`;

export const LinkNav = styled(NavLink)`
  display: block;
  font-size: 20px;
  font-weight: 600;
  color: white;
  padding: 20px 0;

  &.active {
    color: var(--main-pink-color);
  }
`;

export const AnchorLink = styled(Link)`
  display: block;
  font-size: 20px;
  font-weight: 600;
  padding: 20px 0;
  cursor: pointer;
  color: white;
`;

export const CartIcon = styled(BsCart3)`
  fill: black;
  width: 25px;
  height: 25px;
`;
