import React, { useEffect, useState } from 'react';
import { BouquetItem } from 'components/BouquetItem/BouquetItem';
import { CatalogWrapper } from './Catalog.styled';
import { nanoid } from 'nanoid';
import { fetchBouquets } from 'redux/bouquets/operations';
import { selectAllBouquets } from 'redux/bouquets/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Filters } from 'components/Filters/Filters';

export const Catalog = () => {
  const dispatch = useDispatch();
  const bouquets = useSelector(selectAllBouquets);
  const [filters, setFilters] = useState({
    flowerType: '',
    sortByPrice: '',
    bouquetType: '',
  });

  useEffect(() => {
    dispatch(fetchBouquets());
  }, [dispatch]);

  const applyFilters = ({ flowerType, sortByPrice, bouquetType }) => {
    setFilters({ flowerType, sortByPrice, bouquetType });
  };

  const handleReset = () => {
    setFilters({
      flowerType: '',
      sortByPrice: '',
      bouquetType: '',
    });
  };

  const filteredBouquets = bouquets
    .filter(bouquet => {
      if (
        filters.flowerType &&
        !bouquet.composition.includes(filters.flowerType)
      ) {
        return false;
      }
      if (filters.bouquetType && bouquet.type !== filters.bouquetType) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (filters.sortByPrice === 'asc') {
        return a.price - b.price;
      } else if (filters.sortByPrice === 'desc') {
        return b.price - a.price;
      } else {
        return 0;
      }
    });

  return (
    <>
      <Filters
        onFilter={applyFilters}
        filters={filters}
        onReset={handleReset}
      />
      <CatalogWrapper>
        {filteredBouquets.map(bouquet => (
          <BouquetItem key={nanoid()} bouquet={bouquet} />
        ))}
      </CatalogWrapper>
    </>
  );
};
