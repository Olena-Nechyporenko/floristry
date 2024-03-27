import {
  addToCart,
  changeQuantity,
  increaseQuantity,
  removeFromCart,
} from 'redux/cartProductsSlice';
import {
  BouquetWrapper,
  Button,
  DescrWrapper,
  ImgWrapper,
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
  const handleQuantityChange = (quantity, productId) => {
    dispatch(changeQuantity({ quantity, productId }));
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
        <input
          type="number"
          value={quantity || 0}
          onChange={e => handleQuantityChange(e.target.value, _id)}
        />
      </DescrWrapper>
      <Button onClick={() => handleRemoveFromCart(_id)}>Remove</Button>
    </BouquetWrapper>
  );
};
