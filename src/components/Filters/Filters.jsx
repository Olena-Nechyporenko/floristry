// В компоненте Filters
import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';
import {
  FilterIconWrapper,
  FilterButton,
  FilterIcon,
  FormGroup,
  SubmitButton,
  FilterWrapper,
  StyledForm,
  ResetButton,
} from './Filters.styled';
import { FilterModal } from 'components/FilterModal/FilterModal';

const flowerTypes = [
  'Roses',
  'Daisies',
  'Tulips',
  'Sunflowers',
  'Daffodils',
  'Lilies',
  'Carnations',
  'Chrysanthemums',
  'Lavender',
  'Irises',
  'Peonies',
  'Violets',
  'Hyacinths',
  'Hydrangeas',
  'Cornflowers',
  'Delphiniums',
];

export const Filters = ({ onFilter, filters, onReset }) => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };

  const handleSubmit = values => {
    onFilter(values);
  };

  return (
    <>
      <FilterWrapper>
        <FilterIconWrapper>
          <FilterButton onClick={handleOpenModal}>
            <FilterIcon />
          </FilterButton>
          Filters
        </FilterIconWrapper>
        <Formik initialValues={filters} onSubmit={handleSubmit}>
          {({ values, setFieldValue, resetForm }) => (
            <StyledForm>
              <FormGroup>
                <label htmlFor="flowerType">Flower Type:</label>
                <Field
                  as="select"
                  name="flowerType"
                  onChange={e => setFieldValue('flowerType', e.target.value)}
                >
                  <option value="">All</option>
                  {flowerTypes.map(type => (
                    <option key={nanoid()} value={type}>
                      {type}
                    </option>
                  ))}
                </Field>
              </FormGroup>
              <FormGroup>
                <label htmlFor="sortByPrice">Price:</label>
                <Field
                  as="select"
                  name="sortByPrice"
                  onChange={e => setFieldValue('sortByPrice', e.target.value)}
                >
                  <option value=""></option>
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </Field>
              </FormGroup>
              <FormGroup>
                <label htmlFor="bouquetType">Bouquet Type:</label>
                <Field
                  as="select"
                  name="bouquetType"
                  onChange={e => setFieldValue('bouquetType', e.target.value)}
                >
                  <option value="">All</option>
                  <option value="everyday">Everyday</option>
                  <option value="wedding">Wedding</option>
                  <option value="spring">Spring</option>
                </Field>
              </FormGroup>
              <SubmitButton type="submit">Apply Filters</SubmitButton>
              <ResetButton type="submit" onClick={resetForm}>
                Reset Filters
              </ResetButton>
            </StyledForm>
          )}
        </Formik>
      </FilterWrapper>
      {isFilterModalOpen && (
        <FilterModal
          onFilter={onFilter}
          filters={filters}
          onClose={handleOpenModal}
          onReset={onReset}
        />
      )}
    </>
  );
};
