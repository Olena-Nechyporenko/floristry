import { addToCart, increaseQuantity } from 'redux/cartProductsSlice';
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
import { selectCartProducts } from 'redux/selectors';

export const BouquetItem = ({ bouquet }) => {
  // <-- Accept bouquet as props
  const { url, price, description, name } = bouquet; // Destructure bouquet
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectCartProducts);

  const handleAddToCart = () => {
    const existingProduct = cartProducts.find(item => item._id === bouquet._id);
    console.log(existingProduct);

    if (existingProduct) {
      dispatch(
        increaseQuantity({
          _id: existingProduct._id,
          quantity: existingProduct.quantity + 1,
        })
      );
    } else {
      dispatch(addToCart({ ...bouquet, quantity: 1 }));
      console.log(cartProducts);
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