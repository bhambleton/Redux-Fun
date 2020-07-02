export function getProducts(state){
  return state.products;
}

export function getBag(state){
  return state.bag;
}

export function getBagCount(state) {
  return getBag(state).length;
}
