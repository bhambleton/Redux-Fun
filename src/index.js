import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Global, css } from '@emotion/core';
// import { useDispatch, useSelector } from 'react-redux';


// import {receiveProducts} from './redux/actions';
// import {getProducts} from './redux/selectors';
// import initialProducts from './data/products.json';

import App from './App';
import store from './redux/store';



const globalFonts = css`
  @import url('https://fonts.googleapis.com/css?family=Spicy+Rice|Source+Sans+Pro&display=swap');
`;


ReactDOM.render(
  <Provider store={ store }>
    <Global styles={globalFonts}/>
    <App />
  </Provider>,
  document.getElementById('root')
);
