import { BouquetItem } from 'components/BouquetItem/BouquetItem';
import { CatalogWrapper } from './Catalog.styled';
import bouquets from './bouquets.json';
import { nanoid } from 'nanoid';

export const Catalog = () => {
  return (
    <CatalogWrapper>
      {bouquets.map(bouquet => (
        <BouquetItem key={nanoid()} bouquet={bouquet} />
      ))}
    </CatalogWrapper>
  );
};
