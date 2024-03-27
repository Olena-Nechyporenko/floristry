import { BouquetItem } from 'components/BouquetItem/BouquetItem';
import { CatalogWrapper } from './Catalog.styled';
// import bouquets from './bouquets.json';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { fetchBouquets } from 'redux/bouquets/operations';
import { selectAllBouquets } from 'redux/bouquets/selectors';
import { useSelector } from 'react-redux';

export const Catalog = () => {
  useEffect(() => {
    fetchBouquets();
  }, []);

  const bouquets = useSelector(selectAllBouquets);
  console.log(bouquets);

  return (
    <CatalogWrapper>
      {bouquets.map(bouquet => (
        <BouquetItem key={nanoid()} bouquet={bouquet} />
      ))}
    </CatalogWrapper>
  );
};
