import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Main } from './Layout.styled';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<Loader width={80} height={80} />}>
        <Main>
          <Outlet />
        </Main>
      </Suspense>
      <Footer />
    </Container>
  );
};
