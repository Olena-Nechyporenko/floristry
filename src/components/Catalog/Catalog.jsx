import React, { useEffect } from 'react';
import { BouquetItem } from 'components/BouquetItem/BouquetItem';
import { CatalogWrapper, LoadingText } from './Catalog.styled';
import { nanoid } from 'nanoid';
import { fetchBouquets } from 'redux/bouquets/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Filters } from 'components/Filters/Filters';
import { Loader } from 'components/Loader/Loader';
import {
  selectFilteredBouquets,
  selectIsLoading,
} from 'redux/bouquets/selectors';

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
            <BouquetItem key={nanoid()} bouquet={bouquet} />
          ))}
        </CatalogWrapper>
      )}
    </section>
  );
};
