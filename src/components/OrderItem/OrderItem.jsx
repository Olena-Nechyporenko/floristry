import {
  StyledContainer,
  StyledDeliveryInfo,
  StyledImage,
  StyledListItem,
  StyledParagraph,
  StyledTitle,
} from './OrderItem.styled';

export default function OrderItem({ orders }) {
  return (
    <StyledContainer>
      <ul>
        {orders.bouquets.map(bouquet => (
          <StyledListItem key={bouquet._id}>
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
        Delivery address: {orders.address}
      </StyledDeliveryInfo>
      <StyledDeliveryInfo>
        Delivery date: {orders.deliveryDate.slice(0, 10)}
      </StyledDeliveryInfo>
    </StyledContainer>
  );
}
