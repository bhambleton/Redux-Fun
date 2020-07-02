import React, { useState } from 'react'
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';

import { addToBag, removeItems } from '../redux/actions';


//  Component Styles

//  Container for product price + stock count
const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 8px;
  font-size: 18px;
  font-family: 'Source Sans Pro';
  color: cornsilk;

  span {
    margin: 0px 5px;
  }
`;


//  Container for Product info
const ProductContainer = styled.div`
  margin: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 250px;
  height: 200px;
  background: linear-gradient(lightsalmon, #ff8e61, salmon);
  border-radius: 3px;

  img {
    height: 100px;
    width: auto;
    border-radius: 5px;
  }

  h3 {
    font-family: 'Source Sans Pro';
    font-size: 24px;
    color: cornsilk;
    font-kerning: none;
    margin: 3px 0px;
  }

`;


//  Form for label, input and button to add products to bag
const AddProductForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: ${props => props.disabled ? 'center' : 'flex-end' };
  align-items: center;
  margin: 3px 10px;
  padding: 0;
  height: 30px;
  font-family: 'Source Sans Pro';

  label {
    color: cornsilk;
  }

  input {
    width: 70px;
    margin: 0 10px;
    font-size: 20px;
    text-align: center;
    border: none;
    color: salmon;
    border-radius: 5px;
    appearance: textfield;
  }

  button {
    background-color: transparent;
    border: none;
    color: cornsilk;
    font-size: 48px;
    margin: 0;
    padding-bottom: 10px;
    cursor: pointer;
  }

  button:hover {
    color: skyblue;
  }
`;

//    Product component for individual products

function Product({id, name, photoUrl, inStock, price}){
  const [amount, setAmount ] = useState(0);
  const dispatch = useDispatch();

  return (
    <ProductContainer>
      <h3>{name}</h3>
      <img src={photoUrl} alt={name}/>
      <ProductInfo>
        <span>Price:&nbsp;&nbsp;${price}</span>
        <span>Available:&nbsp;&nbsp;{inStock}</span>
      </ProductInfo>
        {inStock > 0 ? (
          <AddProductForm onSubmit={(event) => {
            event.preventDefault();
            if (amount > 0) {
              dispatch(addToBag(id, name, price, amount));
              // console.log(id, " Add '", amount, "' ", name, " @ ", price);
              dispatch(removeItems(id, amount));
              // console.log("Removing: ", amount, " ", name);
              setAmount(0);
            }
          }}>
            <label htmlFor="amount">Add to bag:</label>
            <input type="number" id="amount" value={amount} min="0" max={inStock}
              onChange={(event) => setAmount(parseInt(event.target.value))}
            />
            <button>&#x002B;</button>
          </AddProductForm>
        ) : (
          <AddProductForm disabled>
          <label>Out of Stock</label>
          </AddProductForm>
        )}
    </ProductContainer>
  );
}

export default Product;
