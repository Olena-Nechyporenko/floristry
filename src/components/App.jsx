import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
// import CatalogPage from 'pages/CatalogPage/CatalogPage';
import CartPage from 'pages/CartPage/CartPage';
import PaymentPage from 'pages/PaymentPage/PaymentPage';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('pages/CatalogPage/CatalogPage'));
const WeddingPage = lazy(() => import('pages/WeddingPage/WeddingPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/weddings" element={<WeddingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
