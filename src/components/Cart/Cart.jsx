import { CartItem } from 'components/CartItem/CartItem';
import { useSelector } from 'react-redux';
import { selectCartProducts } from 'redux/cart/selectors.js';
import {
  PayButton,
  Wrapper,
  PricePayWrapper,
  TotalPrice,
} from './Cart.styled.jsx';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const products = useSelector(selectCartProducts);
  const calculateTotal = () => {
    let total = 0;
    products.forEach(product => {
      total += product.price * product.quantity;
    });
    return total;
  };
  return (
    <>
      <Wrapper>
        {products.map(product => (
          <CartItem key={product._id} bouquet={product} />
        ))}
      </Wrapper>
      <PricePayWrapper>
        <TotalPrice>Total price: {calculateTotal()} eur</TotalPrice>
        <Link to="/payment">
          <PayButton>To pay</PayButton>
        </Link>
      </PricePayWrapper>
    </>
  );
};
