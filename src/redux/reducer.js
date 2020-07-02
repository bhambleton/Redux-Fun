import {combineReducers} from 'redux';

import {
  RECEIVE_PRODUCTS,
  REMOVE_ITEMS,
  ADD_ITEMS,
  ADD_TO_BAG,
  REMOVE_FROM_BAG,
  CLEAR_BAG
} from './actions';

import initialProducts from '../data/products.json';

function productsReducer(state = initialProducts, action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return [
        ...action.products,
        ...state
      ];
    case REMOVE_ITEMS:
      return state.map(product => (
        product.id === action.id ? {
          ...product,
          inStock: product.inStock -= action.amount
        } : product
      ));
    case ADD_ITEMS:
      return state.map(product => (
        product.id === action.id ? {
          ...product,
          inStock: product.inStock += action.amount
        } : product
      ));
    default:
      return state;
  }
}

function bagReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_BAG:
      if (state.length === 0) {
        return [
            {
              name: action.name,
              id: action.id,
              cost: action.price,
              amount: action.amount
            },
            ...state
          ];
      } else {
        let products = state.filter(product => product.id === action.id);
        if (products.length === 0) {
          return [
              ...state,
              {
                name: action.name,
                id: action.id,
                cost: action.price,
                amount: action.amount
              }
            ];
        } else {
          return state.map(product => (
            product.id === action.id ? {
              ...product,
              amount: product.amount += action.amount
            } : product
          ));
        }
      }
    case REMOVE_FROM_BAG:
      return state.filter(product => product.id !== action.id);
    case CLEAR_BAG:
      return [];
    default:
      return state;
  }
}

 const rootReducer = combineReducers({
    products: productsReducer,
    bag: bagReducer
});

export default rootReducer;
