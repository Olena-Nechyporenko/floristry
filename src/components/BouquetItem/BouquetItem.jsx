import Notiflix from 'notiflix';
import { addToCart, increaseQuantity } from 'redux/cart/cartProductsSlice';
import {
  BouquetWrapper,
  Button,
  DescrWrapper,
  ImgWrapper,
  StyledDescription,
  StyledImg,
  StyledPrice,
  StyledTitle,
} from './BouquetItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartProducts } from 'redux/cart/selectors';

const notiflixSuccessOptions = {
  fontSize: '17px',
  success: { background: '#e6b8ca', textColor: '#161616' },
};

export const BouquetItem = ({ bouquet }) => {
  const { url, price, description, name } = bouquet; // Destructure bouquet
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectCartProducts);

  const handleAddToCart = () => {
    const existingProduct = cartProducts.find(item => item._id === bouquet._id);

    if (existingProduct) {
      dispatch(
        increaseQuantity({
          _id: existingProduct._id,
          quantity: existingProduct.quantity + 1,
        })
      );
      Notiflix.Notify.success(
        `You now have ${existingProduct.quantity + 1} ${
          existingProduct.name
        } in your cart!`,
        notiflixSuccessOptions
      );
    } else {
      dispatch(addToCart({ ...bouquet, quantity: 1 }));
      Notiflix.Notify.success(
        `${bouquet.name} added to cart successfully`,
        notiflixSuccessOptions
      );
    }
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
      <Button onClick={() => handleAddToCart(bouquet)}>Add to cart</Button>
    </BouquetWrapper>
  );
};
