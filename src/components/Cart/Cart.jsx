import Notiflix from 'notiflix';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth } from 'hooks/useAuth.js';
import { selectCartProducts } from 'redux/cart/selectors.js';
import { CartItem } from 'components/CartItem/CartItem';
import {
  TextEmptyCart,
  CartProductsList,
  PricePayWrapper,
  TotalPrice,
  PayButton,
} from './Cart.styled.jsx';

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
          products.length !== 0 ? (
            <Link to="/payment">
              <PayButton>To pay</PayButton>
            </Link>
          ) : (
            <PayButton
              onClick={() => Notiflix.Notify.failure('Your cart is empty')}
            >
              To pay
            </PayButton>
          )
        ) : (
          <PayButton onClick={() => Notiflix.Notify.failure('Please login')}>
            To pay
          </PayButton>
        )}
      </PricePayWrapper>
    </>
  );
};
