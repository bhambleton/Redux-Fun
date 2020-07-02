import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

import { getBagCount } from '../redux/selectors';
import Bag from './bag';

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  h1 {
    font-family: 'Spicy Rice';
    font-size: 64px;
    background: linear-gradient(to bottom, skyblue, steelblue);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 2px 0px 6px 0px;
    font-kerning: none;
  }

  div {
    position: absolute;
    right: 1%;
    width: 140px;
    display: flex;
    flex-direction: column;
    justify-content: spec-evenly;
    align-items: center;
    padding: 4px;
  }

  div span {
    font-family: 'Source Sans Pro';
    font-size: 18px;
    color: steelblue;
  }

  button {
    background-color: #FFF;
    border-radius: 100%;
    border: none;
    height: 50px;
    width: 50px;
    color: steelblue;
    font-size: 36px;
    transition: all 0.4s linear;
    cursor: pointer;
    margin: 5px 0px;
  }

  button:hover {
    background-color: steelblue;
    color: #FFF;
    font-size 32px;
  }

  button:active {
    background-color: skyblue;
  }
`;

function HeaderBar(){
  const [ toggle, switchToggle ] = useState(false);

  let bagCount = useSelector(getBagCount);

  return (
    <>
    <Header>
      <h1>Penny Candy Store</h1>
      <div>
        <button onClick={() => switchToggle(toggle => !toggle)}>
          <FontAwesomeIcon icon={faShoppingBag} />
        </button>
        {bagCount > 0 ? (
          <span>Candy in Bag:&nbsp;{bagCount}</span>
        ) : (
          <span>Bag Empty</span>
        )}
      </div>
    </Header>
    <Bag show={toggle}>
    </Bag>
    </>
  );
}

export default HeaderBar;
