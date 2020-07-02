import React from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';

import { addItems, removeFromBag } from '../redux/actions';

const TableCell = styled.tr`
font-family: 'Source Sans Pro';
width: 25%;

td {
  color: #FFF;
  font-size: 16px;
}

button {
  border: none;
  background-color: transparent;
  color: coral;
  width: 20px;
  height: 20px;
  font-size: 24px;
  cursor: pointer;
  padding-bottom: 3px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

button:hover {
  background-color: coral;
  color: #FFF !important;
}
`;

function BagItem({ name, id, cost, amount }) {
  const dispatch = useDispatch();
  const price = amount * cost;
  const rCost = Number((cost).toFixed(2));

  return (
    <TableCell>
      <td>
        <button onClick={(event) => {
          event.preventDefault();
          dispatch(removeFromBag(id));
          dispatch(addItems(id, amount));
        }}>
          &#x2212;
        </button>
      </td>
      <td>{name}</td>
      <td>{amount}&nbsp; @ &nbsp; ${rCost}</td>
      <td>${price}</td>
    </TableCell>
  );
}

export default BagItem;
