import { CartItem } from 'components/CartItem/CartItem';
import { useSelector } from 'react-redux';
import { selectCartProducts } from 'redux/cart/selectors.js';
import {
  TextEmptyCart,
  CartProductsList,
  PricePayWrapper,
  TotalPrice,
  PayButton,
} from './Cart.styled.jsx';
import { Link } from 'react-router-dom';
import { useAuth } from 'components/hooks/useAuth.js';
import Notiflix from 'notiflix';

export const Cart = () => {
  const products = useSelector(selectCartProducts);
  const calculateTotal = () => {
    let total = 0;
    products.forEach(product => {
      total += product.price * product.quantity;
    });
    return total;
  };
  const { isLoggedIn } = useAuth();

  return (
    <>
      {products.length === 0 ? (
        <TextEmptyCart>Your cart is empty</TextEmptyCart>
      ) : (
        <CartProductsList>
          {products.map(product => (
            <CartItem key={product._id} bouquet={product} />
          ))}
        </CartProductsList>
      )}

      <PricePayWrapper>
        <TotalPrice>Total price: {calculateTotal()} eur</TotalPrice>
        {isLoggedIn ? (
          <Link to="/payment">
            <PayButton>To pay</PayButton>
          </Link>
        ) : (
          <PayButton onClick={() => Notiflix.Notify.failure('Please login')}>
            To pay
          </PayButton>
        )}
      </PricePayWrapper>
    </>
  );
};
