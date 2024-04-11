import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IoPersonSharp } from 'react-icons/io5';

export const AuthWrapper = styled.div`
  padding: 70px 10px 0;
  text-align: right;

  @media screen and (min-width: 768px) {
    padding: 70px 20px 0;
  }
`;
export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  color: white;
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
