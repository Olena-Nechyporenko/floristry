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

export const FilterModal = ({ onClose, onFilter, filters, onReset }) => {
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
    onFilter(values);
  };

  const handleReset = () => {
    onReset();
    onClose();
  };

  return (
    <BackDrop onClick={handleCloseOnBackdrop}>
      <Modal>
        <ModalContainer>
          <CloseIcon onClick={onClose} />

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
                <ButtonsWrapper>
                  <SubmitButton type="submit">Apply Filters</SubmitButton>
                  <ResetButton type="button" onClick={handleReset}>
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
