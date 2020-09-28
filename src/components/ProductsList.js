import React from 'react';
import { ProductItem } from './ProductItem';
import { deleteProduct } from '../products';
import { connect } from 'react-redux';
import {  getRole } from '../store';

const getData = state => ({
  getRole: getRole(state),
});

const getMethods = dispatch => ({
  deleteProduct: (value) => dispatch(deleteProduct(value)),
});

const ConnectedProductItem = connect(getData, getMethods)(ProductItem);

export function ProductsList({ products }) {

  if (products.length === 0) {
    return 'No products yet';
  }

  return (
    <>
      <h1>Catalog</h1>
      <ul className="products__list">
        {products.map(product => 
          <ConnectedProductItem 
            key={product.id} 
            {...product} 
          />
        )}
      </ul>
    </>
  );
}
