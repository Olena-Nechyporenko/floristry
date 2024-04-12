import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  padding: 70px 10px 0;

  @media screen and (min-width: 768px) {
    padding: 70px 20px 0;
  }
`;
export const StyledButton = styled.button`
  font-family: inherit;
  font-size: 15px;
  text-align: center;
  background-color: var(--main-green-color);
  color: var(--main-light-text-color);
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all var(--main-transition);

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
