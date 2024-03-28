// В компоненте Filters
import React from 'react';
import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';
import {
  FormGroup,
  SubmitButton,
  FilterWrapper,
  StyledForm,
  ResetButton,
} from './Filters.styled';

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
  'Daisies',
  'Tulips',
  'Sunflowers',
  'Daffodils',
  'Daffodils',
  'Irises',
  'Peonies',
  'Violets',
  'Hyacinths',
  'Lavender',
  'Hydrangeas',
  'Cornflowers',
  'Delphiniums',
  'Cornflowers',
  'Hydrangeas',
  'Daisies',
];

export const Filters = ({ onFilter, filters }) => {
  const handleSubmit = values => {
    onFilter(values);
  };

  return (
    <FilterWrapper>
      <Formik initialValues={filters} onSubmit={handleSubmit}>
        {({ values, setFieldValue, resetForm }) => (
          <StyledForm>
            <FormGroup>
              <label htmlFor="flowerType">Select Flower Type:</label>
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
              <label htmlFor="sortByPrice">Sort by Price:</label>
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
              <label htmlFor="bouquetType">Select Bouquet Type:</label>
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
  );
};
