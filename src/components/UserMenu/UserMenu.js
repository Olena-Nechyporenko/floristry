import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import css from './UserMenu.module.css';
import { useAuth } from 'components/hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
