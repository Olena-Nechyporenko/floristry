import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBouquets } from 'redux/bouquets/operations';
import { Loader } from 'components/Loader/Loader';
import { Filters } from 'components/Filters/Filters';
import { BouquetItem } from 'components/BouquetItem/BouquetItem';
import {
  selectFilteredBouquets,
  selectIsLoading,
} from 'redux/bouquets/selectors';
import { CatalogWrapper, LoadingText } from './Catalog.styled';

export const Catalog = () => {
  const dispatch = useDispatch();
  const filteredBouquets = useSelector(selectFilteredBouquets);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchBouquets());
  }, [dispatch]);

  return (
    <section>
      <Filters />
      {isLoading ? (
        <LoadingText>
          Please wait. Collection of bouquets is loading...{' '}
          <Loader width={80} height={80} />
        </LoadingText>
      ) : (
        <CatalogWrapper>
          {filteredBouquets.map(bouquet => (
            <BouquetItem key={bouquet._id} bouquet={bouquet} />
          ))}
        </CatalogWrapper>
      )}
    </section>
  );
};
