import Notiflix from 'notiflix';
import { changeQuantity, removeFromCart } from 'redux/cart/cartProductsSlice';
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

const notiflixShowOptions = {
  width: '340px',
  titleFontSize: '20px',
  messageFontSize: '18px',
  titleColor: '#556b2f',
  okButtonBackground: '#556b2f',
};

const notiflixSuccessOptions = {
  fontSize: '17px',
  success: { background: '#e6b8ca', textColor: '#161616' },
};

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

  const handleRemoveFromCart = bouquet => {
    const { _id: productId, name } = bouquet;
    Notiflix.Confirm.show(
      'Removing',
      `Remove a ${name} from the cart?`,
      'Yes',
      'No',

      function () {
        dispatch(removeFromCart(productId));
        Notiflix.Notify.success(
          `${name} removed successfully from cart!`,
          notiflixSuccessOptions
        );
      },
      function () {
        return;
      },
      notiflixShowOptions
    );
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
        <Button onClick={() => handleRemoveFromCart({ _id, name })}>
          Remove
        </Button>
      </ButtonWrapper>
    </BouquetWrapper>
  );
};
