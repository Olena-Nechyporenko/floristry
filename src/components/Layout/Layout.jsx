import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Main } from './Layout.styled';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Main>
          <Outlet />
        </Main>
      </Suspense>
      <Footer />
    </Container>
  );
};
