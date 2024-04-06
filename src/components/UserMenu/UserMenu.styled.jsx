import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: absolute;
  top: 59px;
  right: 0%;
  z-index: 1000;

  @media screen and (min-width: 1200px) {
    top: 70px;
  }
`;
export const StyledButton = styled.button`
  padding: 10px 20px;
  text-align: center;
  background-color: var(--main-green-color);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: var(--main-transition);
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background-color: var(--main-pink-color);
  }
`;

export const LinkNav = styled(NavLink)`
  display: block;
  font-size: 18px;
  color: var(--main-green-color);
  padding: 20px 0;

  &.active {
    color: var(--main-pink-color);
  }
`;
