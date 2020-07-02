import React from 'react';
import styled from '@emotion/styled';

import { useSelector, useDispatch } from 'react-redux';

import { getBag, getBagCount } from '../redux/selectors';
import { clearBag } from '../redux/actions';

import BagItem from './bagItem';

const CheckoutButton = styled.button`
  border: none;
  background-color: #FFF;
  color: steelblue;
  font-size: 20px;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 10px;
`;

const BagContainer = styled.div`
  position: absolute;
  right: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => props.count > 0 ? 'space-around' : 'flex-start'};
  max-height: ${props => props.show === true ? 400 : 0}px;
  width: ${props => props.show === true ? 30 : 0}vw;
  padding: ${props => props.show === true ? 15 : 0}px;
  margin: 0 auto;
  background: linear-gradient(to bottom, skyblue, steelblue);
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.6);
  z-index: 100;
  overflow-y: scroll;
  transition: max-height 0.6s ease;

  h1 {
    margin: 0;
    font-family: 'Source Sans Pro';
    font-size: 24px;
    color: ${props => props.show === false ? 'rgba(0, 0, 0, 0.0)' : '#FFF'};
    transition: color 0.3s ease 0.2s;
  }
`;

const TableContainer = styled.div`
  max-height: ${props => props.show === true ? 250 : 0}px;
  overflow-y: scroll;
  overflow-x: hidden;
  margin: 10px auto;
`;

const ItemsTable = styled.table`
  width: 100%;
  overflow-y: scroll;
  margin: 10px;

  tr {
    margin: 0;
    height: 30px;
  }

  tr td + td {
    text-align: left;
    padding: 0 1em;
  }

  td:first-of-type {
    font-size: 14px !important;
  }
`;

function Bag({ show }) {
  const bagItems = useSelector(getBag);
  const count = useSelector(getBagCount);
  const dispatch = useDispatch();

  return (
    <BagContainer count={count} show={show}>
      {count > 0 ? (
        <>
        <TableContainer show={show}>
          <ItemsTable show={show}>
            <tbody>
            {bagItems.map(
              item => <BagItem key={item.id} {...item} />
            )}
            </tbody>
          </ItemsTable>
        </TableContainer>
        <CheckoutButton onClick={(event) => {
          event.preventDefault();
          dispatch(clearBag());
        }}>
          Checkout
        </CheckoutButton>
        </>
      ) : (
        <h1>Your Candy Bag is Empty</h1>
      )}
    </BagContainer>
  );
}

export default Bag;
