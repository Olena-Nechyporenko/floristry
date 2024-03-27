import { CartItem } from 'components/CartItem/CartItem';
import { useSelector } from 'react-redux';
import { selectCartProducts } from 'redux/selectors';
import { PayButton, Wrapper } from './Cart.styled.jsx';

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
      <p>Total price: {calculateTotal()} eur</p>
      <PayButton>To pay</PayButton>
    </>
  );
};
