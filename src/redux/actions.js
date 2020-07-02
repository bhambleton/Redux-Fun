export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const REMOVE_ITEMS = 'REMOVE_ITEMS';
export const ADD_ITEMS = 'ADD_ITEMS';

export const ADD_TO_BAG = 'ADD_TO_BAG';
export const REMOVE_FROM_BAG = 'REMOVE_FROM_BAG';
export const CLEAR_BAG = 'CLEAR_BAG';

export function receiveProducts(products) {
  return { type: RECEIVE_PRODUCTS, products };
}

export function removeItems(id, amount) {
  return { type: REMOVE_ITEMS, id, amount };
}

export function addItems(id, amount) {
  return { type: ADD_ITEMS, id, amount };
}

export function addToBag(id, name, price, amount) {
  return { type: ADD_TO_BAG, id, name, price, amount };
}

export function removeFromBag(id) {
  return { type: REMOVE_FROM_BAG, id };
}

export function clearBag() {
  return { type: CLEAR_BAG };
}
