import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 15px;
`;

export const Link = styled(NavLink)`
  display: block;
  font-size: 20px;
  font-weight: 600;
  padding: 20px 0;
`;
