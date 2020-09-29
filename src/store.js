import { combineReducers, createStore } from 'redux';
import productsReducer from './products';
import roleReducer from './role';

export const initialState = {
  products: [],
  role: 'admin',
};

const reducer = combineReducers({
  products: productsReducer,
  role: roleReducer,
});

const store = createStore(reducer);

export const getProducts = state => state.products;
export const getRole = state => state.role;
export const getProductsCount = state => state.products
  ? state.products.length
  : 0;
export const getSumOfPrices = state => state.products 
  ? state.products.reduce((sum, product) => sum += parseInt(product.price), 0)
  : 0;

export default store;
