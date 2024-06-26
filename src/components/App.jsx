import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useAuth } from '../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { Loader } from './Loader/Loader';
import SuccessPage from 'pages/SuccessPage/SuccesPage';
import FailurePage from 'pages/FailurePage/FailurePage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('pages/CatalogPage/CatalogPage'));
const CartPage = lazy(() => import('pages/CartPage/CartPage'));
const PaymentPage = lazy(() => import('pages/PaymentPage/PaymentPage'));
const WeddingPage = lazy(() => import('pages/WeddingPage/WeddingPage'));
const OrderPage = lazy(() => import('pages/OrderPage/OrderPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/orders"
          element={<PrivateRoute redirectTo="/" component={<OrderPage />} />}
        />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/weddings" element={<WeddingPage />} />{' '}
      </Route>
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/failure" element={<FailurePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
