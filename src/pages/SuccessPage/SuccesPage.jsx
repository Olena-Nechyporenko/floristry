import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { sendOrder } from 'redux/orders/operations';
import { selectCurrentOrder } from 'redux/orders/selectors';
import { removeAllFromCart } from 'redux/cart/cartProductsSlice';
import {
  Wrapper,
  Title,
  Button,
  Link,
  ArrowIcon,
  CheckIcon,
} from './SuccessPage.styled';

const notiflixSuccessOptions = {
  fontSize: '17px',
  success: { background: '#e6b8ca', textColor: '#161616' },
};

export default function SuccessPage() {
  const currentOrder = useSelector(selectCurrentOrder);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(sendOrder(currentOrder));

    Notiflix.Notify.success(
      'Your order has been successfully sent !',
      notiflixSuccessOptions
    );

    dispatch(removeAllFromCart());
  };

  return (
    <Wrapper>
      <CheckIcon />
      <Title>Thank you for your payment !</Title>
      <Button
        disabled={currentOrder ? false : true}
        type="button"
        onClick={handleSubmit}
      >
        Send order
      </Button>
      <Link to="/">
        Go to homepage
        <ArrowIcon />
      </Link>
    </Wrapper>
  );
}
