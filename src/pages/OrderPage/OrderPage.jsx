import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from 'redux/orders/operations';
import { selectAllOrders } from 'redux/orders/selectors';

export default function OrderPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const orders = useSelector(selectAllOrders);

  return (
    <div>
      {orders.length > 0 &&
        orders[0].bouquets.map(bouquet => (
          <div key={nanoid()}>{bouquet.name}</div>
        ))}
    </div>
  );
}
