import data from './data';

let initialData = data;

if (JSON.parse(localStorage.getItem('products'))) {
  initialData = JSON.parse(localStorage.getItem('products'));
}

const ADD_PRODUCT = 'addProduct';
const DELETE_PRODUCT = 'deleteProduct';
const CLEAR_PRODUCTS = 'clearProducts';

export const addProduct = value => ({
  type: ADD_PRODUCT,
  value,
});

export const deleteProduct = value => ({
  type: DELETE_PRODUCT,
  value,
});

export const clearProducts = () => ({
  type: CLEAR_PRODUCTS,
});

const productsReducer = (state = initialData, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      localStorage.setItem('products', JSON.stringify(state));
      return [
          ...state,
          action.value,
        ];
    case DELETE_PRODUCT:
      return state.filter(product => product.id !== action.value);
    case CLEAR_PRODUCTS:
      return [];
    default:
      return state;
  }
};

export default productsReducer;
