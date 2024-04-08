import OrderItem from 'components/OrderItem/OrderItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from 'redux/orders/operations';
import { selectAllOrders } from 'redux/orders/selectors';
import { StyledList } from './Orders.styled';

export default function Orders() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const orders = useSelector(selectAllOrders);
  console.log(orders);

  return (
    <StyledList>
      {orders.length > 0 && orders.map(order => <OrderItem />)}
    </StyledList>
  );
}
