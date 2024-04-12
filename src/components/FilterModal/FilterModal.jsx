import { useEffect } from 'react';
import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';
import {
  BackDrop,
  Modal,
  CloseIcon,
  ModalContainer,
  FormGroup,
  StyledForm,
  ButtonsWrapper,
  SubmitButton,
  ResetButton,
} from './FilterModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from 'redux/bouquets/bouquetSlice';
import { selectFilters } from 'redux/bouquets/selectors';

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

export const FilterModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  useEffect(() => {
    const handleCloseOnKeydown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleCloseOnKeydown);

    return () => {
      window.removeEventListener('keydown', handleCloseOnKeydown);
    };
  }, [onClose]);

  const handleCloseOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = values => {
    dispatch(
      setFilters({
        flowerType: values.flowerType,
        price: values.price,
        bouquetType: values.bouquetType,
      })
    );
    onClose();
  };

  const resetFilters = () => {
    dispatch(setFilters({ flowerType: '', price: '', bouquetType: '' }));
    onClose();
  };

  return (
    <BackDrop onClick={handleCloseOnBackdrop}>
      <Modal>
        <ModalContainer>
          <CloseIcon onClick={onClose} />

          <Formik
            initialValues={{
              flowerType: filters.flowerType,
              price: filters.price,
              bouquetType: filters.bouquetType,
            }}
            onSubmit={handleSubmit}
          >
            {({ values, resetForm }) => (
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
                <ButtonsWrapper>
                  <SubmitButton type="submit">Apply Filters</SubmitButton>
                  <ResetButton type="button" onClick={resetFilters}>
                    Reset Filters
                  </ResetButton>
                </ButtonsWrapper>
              </StyledForm>
            )}
          </Formik>
        </ModalContainer>
      </Modal>
    </BackDrop>
  );
};
