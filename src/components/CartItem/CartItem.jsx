import { changeQuantity, removeFromCart } from 'redux/cartProductsSlice';
import {
  BouquetWrapper,
  Button,
  ButtonWrapper,
  DescrWrapper,
  ImgWrapper,
  QuantityInput,
  StyledDescription,
  StyledImg,
  StyledPrice,
  StyledTitle,
} from './CartItem.styled';
import { useDispatch } from 'react-redux';

export const CartItem = ({
  bouquet: { _id, url, name, price, description, quantity },
}) => {
  const dispatch = useDispatch();
  const handleQuantityChange = event => {
    const newQuantity = parseInt(event.target.value) || 0;
    if (newQuantity <= 0) {
      dispatch(removeFromCart(_id));
    } else {
      dispatch(changeQuantity({ quantity: newQuantity, productId: _id }));
    }
  };

  const handleRemoveFromCart = productId => {
    dispatch(removeFromCart(productId));
  };

  return (
    <BouquetWrapper>
      <ImgWrapper>
        <StyledImg src={url} alt={name} />{' '}
      </ImgWrapper>
      <DescrWrapper>
        <StyledTitle>{name}</StyledTitle>
        <StyledPrice>{price} €</StyledPrice>
        <StyledDescription>{description}</StyledDescription>
      </DescrWrapper>
      <ButtonWrapper>
        <QuantityInput
          type="number"
          value={quantity || 0}
          onChange={handleQuantityChange}
        />
        <Button onClick={() => handleRemoveFromCart(_id)}>Remove</Button>
      </ButtonWrapper>
    </BouquetWrapper>
  );
};
