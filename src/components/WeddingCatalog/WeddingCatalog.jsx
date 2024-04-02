import { BouquetItem } from 'components/BouquetItem/BouquetItem';
import {
  WeddingCatalogSection,
  Title,
  CatalogWrapper,
  LoadingText,
} from './WeddingCatalog.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllBouquets, selectIsLoading } from 'redux/bouquets/selectors';
import { useEffect } from 'react';
import { fetchBouquets } from 'redux/bouquets/operations';
import { Loader } from 'components/Loader/Loader';

export const WeddingCatalog = () => {
  const dispatch = useDispatch();
  const bouquets = useSelector(selectAllBouquets);
  const isLoading = useSelector(selectIsLoading);

  const weddingBouquets = bouquets.filter(
    bouquet => bouquet.type === 'wedding'
  );

  useEffect(() => {
    dispatch(fetchBouquets());
  }, [dispatch]);

  return (
    <WeddingCatalogSection>
      <Title>Wedding bouquets collection</Title>;
      {isLoading ? (
        <LoadingText>
          Please wait. Collection of bouquets is loading...{' '}
          <Loader width={80} height={80} />
        </LoadingText>
      ) : (
        <CatalogWrapper>
          {weddingBouquets.map(bouquet => (
            <BouquetItem key={bouquet._id} bouquet={bouquet} />
          ))}
        </CatalogWrapper>
      )}
    </WeddingCatalogSection>
  );
};
