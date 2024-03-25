import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Suspense fallback={<p>Loading...</p>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </Container>
  );
};
