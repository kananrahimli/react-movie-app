import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import "swiper/css/bundle";

import './index.css';
import App from './App';
import { createStore ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer} from './reducer'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

