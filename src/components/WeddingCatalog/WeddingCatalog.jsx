import { BouquetItem } from 'components/BouquetItem/BouquetItem';
import { Title, CatalogWrapper } from './WeddingCatalog.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllBouquets } from 'redux/bouquets/selectors';
import { useEffect } from 'react';
import { fetchBouquets } from 'redux/bouquets/operations';

export const WeddingCatalog = () => {
  const dispatch = useDispatch();
  const bouquets = useSelector(selectAllBouquets);

  const weddingBouquets = bouquets.filter(
    bouquet => bouquet.type === 'wedding'
  );

  useEffect(() => {
    dispatch(fetchBouquets());
  }, [dispatch]);

  return (
    <>
      <Title>Wedding collection</Title>;
      <CatalogWrapper>
        {weddingBouquets.map(bouquet => (
          <BouquetItem key={bouquet._id} bouquet={bouquet} />
        ))}
      </CatalogWrapper>
    </>
  );
};
