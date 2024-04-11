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
  color: var(--main-light-text-color);
`;
export const StyledIcon = styled(IoPersonSharp)`
  font-size: 40px;
  border-radius: 50%;
  color: var(--main-green-color);
  padding: 10px;
  transition: all var(--main-transition);

  &:hover {
    color: var(--main-pink-color);
  }
`;
