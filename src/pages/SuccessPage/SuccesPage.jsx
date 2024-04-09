import { useDispatch, useSelector } from 'react-redux';
import {
  Wrapper,
  Title,
  Link,
  ArrowIcon,
  CheckIcon,
} from './SuccessPage.styled';
import { useEffect } from 'react';
import { selectCurrentOrder } from 'redux/orders/selectors';
import { sendOrder } from 'redux/orders/operations';

export default function SuccessPage() {
  const currentOrder = useSelector(selectCurrentOrder);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendOrder(currentOrder));
  }, [dispatch, currentOrder]);

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
