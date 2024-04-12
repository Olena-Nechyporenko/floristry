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
import { setFilters } from 'redux/bouquets/bouquetSlice';
import { useDispatch } from 'react-redux';

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

const initialValues = {
  flowerType: '',
  price: '',
  bouquetType: '',
};

export const Filters = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };

  const handleSubmit = values => {
    dispatch(
      setFilters({
        flowerType: values.flowerType,
        price: values.price,
        bouquetType: values.bouquetType,
      })
    );
  };

  return (
    <>
      <FilterWrapper>
        <FilterIconWrapper onClick={handleOpenModal}>
          <FilterButton>
            <FilterIcon />
          </FilterButton>
          Filters
        </FilterIconWrapper>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, handleSubmit, resetForm }) => (
            <StyledForm>
              <FormGroup>
                <label htmlFor="flowerType">Flower Type:</label>
                <Field as="select" name="flowerType">
                  <option value="">All</option>
                  {flowerTypes.map(type => (
                    <option key={nanoid()} value={type}>
                      {type}
                    </option>
                  ))}
                </Field>
              </FormGroup>
              <FormGroup>
                <label htmlFor="price">Price:</label>
                <Field as="select" name="price">
                  <option value=""></option>
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </Field>
              </FormGroup>
              <FormGroup>
                <label htmlFor="bouquetType">Bouquet Type:</label>
                <Field as="select" name="bouquetType">
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
      {isFilterModalOpen && <FilterModal onClose={handleOpenModal} />}
    </>
  );
};
