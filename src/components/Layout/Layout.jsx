import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Loader } from 'components/Loader/Loader';
import { useAuth } from 'components/hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { AuthNav } from 'components/AuthNav/AuthNav';
import { getCurrent, logIn, statusVerify } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

export const Layout = () => {
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchVerifyStatus = async () => {
      try {
        await dispatch(getCurrent());
        console.log(isLoggedIn, user);
        const result = await dispatch(statusVerify(user._id));
        if (result.verify) {
          dispatch(logIn());
        }
      } catch (error) {
        console.error('Error fetching verification status:', error);
      }
    };

    if (isLoggedIn) {
      fetchVerifyStatus();
    }
  }, [dispatch, isLoggedIn, user]);

  return (
    <Container>
      <Header />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}

      <Suspense fallback={<Loader width={80} height={80} />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </Container>
  );
};
