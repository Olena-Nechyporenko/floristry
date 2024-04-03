import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';

export const LinkNavHome = styled(NavLink)`
  font-family: 'Praise', sans-serif;

  display: block;
  font-size: 25px;
  color: white;
  padding: 20px 0;

  // &.active {
  //   color: var(--main-pink-color);
  // }
`;

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
  width: 350px;
  padding: 0 15px;

  @media screen and (min-width: 768px) {
    width: 728px;
    padding: 0 20px;
  }

  @media screen and (min-width: 1200px) {
    width: 1160px;
    padding: 0 20px;
  }
`;

export const NavList = styled.ul`
  display: none;
  gap: 35px;

  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

export const LinkNav = styled(NavLink)`
  display: block;
  font-size: 18px;
  // font-weight: 600;
  color: white;
  padding: 20px 0;

  &.active {
    color: var(--main-pink-color);
  }
`;

export const AnchorLink = styled(Link)`
  display: block;
  font-size: 18px;
  // font-weight: 600;
  padding: 20px 0;
  cursor: pointer;
  color: white;
`;

export const CartIcon = styled(BsCart3)`
  fill: black;
  width: 25px;
  height: 25px;
`;

export const MobileNavList = styled(NavList)`
  display: flex;
  gap: 15px;
  align-items: center;

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const BurgerIcon = styled(RxHamburgerMenu)`
  fill: white;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
