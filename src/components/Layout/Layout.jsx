import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Main } from './Layout.styled';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Loader } from 'components/Loader/Loader';
import { useAuth } from 'components/hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { AuthNav } from 'components/AuthNav/AuthNav';
export const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      <Header />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}

      <Suspense fallback={<Loader width={80} height={80} />}>
        <Main>
          <Outlet />
        </Main>
      </Suspense>
      <Footer />
    </Container>
  );
};
