import axios from 'axios';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import {
  Wrapper,
  Title,
  Link,
  ArrowIcon,
  CheckIcon,
} from './SuccessPage.styled';
import { selectCurrentOrder } from 'redux/cart/selectors';
import { useEffect } from 'react';
import { removeAllFromCurrentOrder } from 'redux/cart/cartProductsSlice';

const notiflixSuccessOptions = {
  fontSize: '17px',
  success: { background: '#e6b8ca', textColor: '#161616' },
};

export default function SuccessPage() {
  const dispatch = useDispatch();
  const currentOrder = useSelector(selectCurrentOrder);
  console.log(currentOrder);

  useEffect(() => {
    const sendOrder = async () => {
      await axios.post(
        'https://floristry-backend.onrender.com/api/orders',
        currentOrder
      );
      Notiflix.Notify.success(
        'Your order has been sent successfully! Thank you!',
        notiflixSuccessOptions
      );
      dispatch(removeAllFromCurrentOrder());
    };

    // Disable eslint rule for exhaustive-deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
    sendOrder();
  }, []);

  return (
    <Wrapper>
      <CheckIcon />
      <Title>Thank you for your order !</Title>
      <Link to="/">
        Go to homepage
        <ArrowIcon />
      </Link>
    </Wrapper>
  );
}
