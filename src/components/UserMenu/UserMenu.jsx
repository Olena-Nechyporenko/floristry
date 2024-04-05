import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { StyledWrapper, StyledButton, LinkNav } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <StyledWrapper>
      <LinkNav to="/orders">My orders</LinkNav>
      <StyledButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </StyledButton>
    </StyledWrapper>
  );
};
