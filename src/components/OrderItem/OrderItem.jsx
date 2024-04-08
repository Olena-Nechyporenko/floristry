import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from 'redux/orders/operations';
import { selectAllOrders } from 'redux/orders/selectors';
import {
  StyledContainer,
  StyledDeliveryInfo,
  StyledImage,
  StyledListItem,
  StyledParagraph,
  StyledTitle,
} from './OrderItem.styled';

export default function OrderItem() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const orders = useSelector(selectAllOrders);
  console.log(orders);
  return (
    <>
      {orders.length > 0 && (
        <StyledContainer>
          <ul>
            {orders[0].bouquets.map(bouquet => (
              <StyledListItem key={nanoid()}>
                <div>
                  <StyledTitle>{bouquet.name}</StyledTitle>
                  <StyledParagraph>{bouquet.description}</StyledParagraph>
                  <StyledParagraph>{bouquet.quantity} p.</StyledParagraph>
                </div>
                <StyledImage src={bouquet.url} alt={bouquet.name} />
              </StyledListItem>
            ))}
          </ul>
          <StyledDeliveryInfo>
            Delivery address: {orders[0].address}
          </StyledDeliveryInfo>
          <StyledDeliveryInfo>
            Delivery date: {orders[0].deliveryDate.slice(0, 10)}
          </StyledDeliveryInfo>
        </StyledContainer>
      )}
    </>
  );
}
