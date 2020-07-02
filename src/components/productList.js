import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import { getProducts } from '../redux/selectors';
import Product from './product';

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  border: 7px skyblue;
  border-style: dotted groove;
  border-radius: 15px;
  padding: 10px 5px;
  margin: 10px 25px 0px 25px;
  height: 75vh;
  background: linear-gradient(#FFF, ivory, #FFF);
  overflow-y: scroll;
`;


function ProductList() {
  const products = useSelector(getProducts);

  return (
    <div>
        <ProductsContainer>
          {products.map(
            product => <Product key={product.id} {...product} />
          )}
        </ProductsContainer>
    </div>
  );
}

export default ProductList;
