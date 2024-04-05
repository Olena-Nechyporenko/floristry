import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IoPersonSharp } from 'react-icons/io5';
export const AuthWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 60px;
`;
export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: white;

  }
`;
export const StyledIcon = styled(IoPersonSharp)`
  color: var(--main-green-color);
  font-size: 40px;
  border-radius: 50%;
  padding: 10px;
  transition: color var(--main-transition);

  &:hover {
    color: var(--main-pink-color);
  }
`;
