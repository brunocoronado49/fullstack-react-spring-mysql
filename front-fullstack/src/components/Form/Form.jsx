import { useState, useEffect } from 'react';
import { initialData } from '../../helpers/index';
import { Inputs } from '../Inputs/Inputs';
import './form.css';

export const Form = ({productSelected, handlerCreateProduct}) => {
  const [form, setForm] = useState(initialData);

  const {
    id,
    productName,
    productDescription,
    productCategory,
    productPrice
  } = form;

  useEffect(() => {
    setForm(productSelected);
  }, [productSelected]);

  const onSubmit = event => {
    event.preventDefault();

    if (!productName || !productCategory || !productDescription || !productPrice) {
        alert('Ingrese los datos completos por favor');
        return;
    }

    handlerCreateProduct(form);
    setForm(initialData);
  }

  return (
    <>
    <h1 className='form-title'>Crear Producto</h1>
    <form onSubmit={onSubmit}>
      <Inputs
        placeholder='Nombre'
        type='text'
        name='productName'
        value={productName}
        onChange={event => setForm({
          ...form,
          productName: event.target.value
        })} />

      <Inputs
        placeholder='Descripcion'
        type='text'
        name='productDescription'
        value={productDescription}
        onChange={event => setForm({
          ...form,
          productDescription: event.target.value
        })} />

      <Inputs
        placeholder='Categoria'
        type='text'
        name='productCategory'
        value={productCategory}
        onChange={event => setForm({
          ...form,
          productCategory: event.target.value
        })} />

      <Inputs
        placeholder='Precio'
        type='number'
        name='productPrice'
        value={productPrice}
        onChange={event => setForm({
          ...form,
          productPrice: event.target.value
        })} />
      <button type='submit' className='btn-form'>
        { id > 0 ? 'Update' : 'Create'}
      </button>
    </form>
    </>
  );
}
