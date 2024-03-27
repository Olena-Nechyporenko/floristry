import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import CatalogPage from 'pages/CatalogPage/CatalogPage';
import CartPage from 'pages/CartPage/CartPage';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
};
