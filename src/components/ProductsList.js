import React from 'react';
import { ProductItem } from './ProductItem';

export function ProductsList({ products, deleteProduct }) {

  if (!products) {
    return 'No products yet';
  }

  return (
    <ul className="products__list">
      {products.map(product => 
      <ProductItem 
        key={product.id} 
        {...product} 
        deleteProduct={deleteProduct}
      />)}
    </ul>
  );
}
